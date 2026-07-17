#!/usr/bin/env bash
set -Eeuo pipefail

release_id="${1:?release id is required}"
archive="${2:?archive path is required}"
expected_sha256="${3:?archive sha256 is required}"

base_dir="/var/www/english-picture-book"
release_dir="${base_dir}/releases/${release_id}"
incoming_dir="${base_dir}/releases/.${release_id}.incoming"
current_link="${base_dir}/current"
validation_host="${VALIDATION_HOST:-47.98.198.2}"

actual_sha256="$(sha256sum "${archive}" | awk '{print $1}')"
if [[ "${actual_sha256}" != "${expected_sha256}" ]]; then
  echo "Archive checksum mismatch" >&2
  exit 1
fi

if [[ -e "${release_dir}" || -e "${incoming_dir}" ]]; then
  echo "Release path already exists: ${release_id}" >&2
  exit 1
fi

if tar -tzf "${archive}" | grep -Eq '(^/|(^|/)\.\.(/|$))'; then
  echo "Archive contains an unsafe path" >&2
  exit 1
fi

install -d -m 0755 "${incoming_dir}"
tar -xzf "${archive}" -C "${incoming_dir}"

file_count="$(find "${incoming_dir}" -type f | wc -l | tr -d ' ')"
if [[ "${file_count}" != "21" ]]; then
  echo "Expected 21 files, found ${file_count}" >&2
  exit 1
fi

required_files=(
  "app/static/benchmark.html"
  "app/static/benchmark.css"
  "app/static/benchmark.js"
  "assets/images/lesson31/panel01.png"
  "assets/images/lesson31/panel08.png"
  "assets/audio/benchmark31/time-to-go.mp3"
  "assets/audio/benchmark31/you-did-it.mp3"
  "assets/audio/lesson31/panel02.mp3"
  "assets/audio/lesson31/panel04.mp3"
)

for relative_path in "${required_files[@]}"; do
  test -s "${incoming_dir}/${relative_path}"
done

grep -Fq 'benchmark.js?v=20260716-9' "${incoming_dir}/app/static/benchmark.html"
grep -Fq '../../assets/audio/benchmark31' "${incoming_dir}/app/static/benchmark.js"

if command -v node >/dev/null 2>&1; then
  node --check "${incoming_dir}/app/static/benchmark.js"
fi

find "${incoming_dir}" -type d -exec chmod 0755 {} +
find "${incoming_dir}" -type f -exec chmod 0644 {} +
chown -R root:root "${incoming_dir}"
mv "${incoming_dir}" "${release_dir}"

previous_release="$(readlink -f "${current_link}")"
test -d "${previous_release}"
nginx -t

candidate_link="${base_dir}/.current-${release_id}-$$"
ln -s "${release_dir}" "${candidate_link}"
mv -Tf "${candidate_link}" "${current_link}"

rollback() {
  local rollback_link="${base_dir}/.rollback-${release_id}-$$"
  ln -s "${previous_release}" "${rollback_link}"
  mv -Tf "${rollback_link}" "${current_link}"
  systemctl reload nginx || true
}

if ! systemctl reload nginx; then
  rollback
  echo "Nginx reload failed; restored ${previous_release}" >&2
  exit 1
fi

if ! {
  curl --retry 3 --retry-connrefused -fsS -H "Host: ${validation_host}" \
    http://127.0.0.1/english-picture-book/app/static/benchmark.html \
    | grep -F 'benchmark.js?v=20260716-9' >/dev/null
  curl --retry 3 --retry-connrefused -fsS -H "Host: ${validation_host}" -o /dev/null \
    http://127.0.0.1/english-picture-book/assets/images/lesson31/panel07.png
  curl --retry 3 --retry-connrefused -fsS -H "Host: ${validation_host}" -o /dev/null \
    http://127.0.0.1/english-picture-book/assets/audio/benchmark31/time-to-go.mp3
  curl --retry 3 --retry-connrefused -fsS -H "Host: ${validation_host}" -o /dev/null \
    http://127.0.0.1/english-picture-book/assets/audio/lesson31/panel04.mp3
}; then
  rollback
  echo "HTTP validation failed; restored ${previous_release}" >&2
  exit 1
fi

printf 'release=%s\nprevious=%s\ncurrent=%s\nfiles=%s\nsha256=%s\n' \
  "${release_dir}" \
  "${previous_release}" \
  "$(readlink -f "${current_link}")" \
  "${file_count}" \
  "${actual_sha256}"
