import AVFoundation
import CoreGraphics
import CoreImage
import CoreMedia
import CoreVideo
import Foundation
import ImageIO

struct Segment: Decodable {
    let image: String
    let duration: Double
    let transition: String?
}

struct AudioCue: Decodable {
    let path: String
    let start: Double
}

struct Manifest: Decodable {
    let width: Int
    let height: Int
    let fps: Int
    let transitionDuration: Double
    let segments: [Segment]
    let audioCues: [AudioCue]
}

enum RenderFailure: Error, CustomStringConvertible {
    case message(String)

    var description: String {
        switch self {
        case .message(let text): return text
        }
    }
}

func removeIfPresent(_ url: URL) throws {
    if FileManager.default.fileExists(atPath: url.path) {
        try FileManager.default.removeItem(at: url)
    }
}

func loadSlide(path: String, width: Int, height: Int) throws -> CIImage {
    let url = URL(fileURLWithPath: path) as CFURL
    guard let source = CGImageSourceCreateWithURL(url, nil),
          let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
        throw RenderFailure.message("Could not load slide: \(path)")
    }

    let scaleX = CGFloat(width) / CGFloat(image.width)
    let scaleY = CGFloat(height) / CGFloat(image.height)
    return CIImage(cgImage: image)
        .transformed(by: CGAffineTransform(scaleX: scaleX, y: scaleY))
        .cropped(to: CGRect(x: 0, y: 0, width: width, height: height))
}

func zoomed(_ image: CIImage, progress: Double, width: Int, height: Int) -> CIImage {
    let amount = CGFloat(1.0 + 0.024 * max(0, min(1, progress)))
    let centerX = CGFloat(width) / 2
    let centerY = CGFloat(height) / 2
    let transform = CGAffineTransform(translationX: centerX, y: centerY)
        .scaledBy(x: amount, y: amount)
        .translatedBy(x: -centerX, y: -centerY)
    return image.transformed(by: transform)
        .cropped(to: CGRect(x: 0, y: 0, width: width, height: height))
}

func withOpacity(_ image: CIImage, opacity: Double) -> CIImage {
    let value = CGFloat(max(0, min(1, opacity)))
    return image.applyingFilter("CIColorMatrix", parameters: [
        "inputRVector": CIVector(x: 1, y: 0, z: 0, w: 0),
        "inputGVector": CIVector(x: 0, y: 1, z: 0, w: 0),
        "inputBVector": CIVector(x: 0, y: 0, z: 1, w: 0),
        "inputAVector": CIVector(x: 0, y: 0, z: 0, w: value),
    ])
}

func blendedFrame(
    slides: [CIImage],
    manifest: Manifest,
    segmentIndex: Int,
    localTime: Double
) -> CIImage {
    let segment = manifest.segments[segmentIndex]
    let localProgress = localTime / max(segment.duration, 0.001)
    let current = zoomed(
        slides[segmentIndex],
        progress: localProgress,
        width: manifest.width,
        height: manifest.height
    )

    guard segmentIndex + 1 < slides.count,
          localTime >= segment.duration - manifest.transitionDuration else {
        return current
    }

    let transitionProgress = max(
        0,
        min(1, (localTime - segment.duration + manifest.transitionDuration) / manifest.transitionDuration)
    )
    let next = zoomed(
        slides[segmentIndex + 1],
        progress: transitionProgress * 0.08,
        width: manifest.width,
        height: manifest.height
    )

    if segment.transition == "page" {
        let offset = CGFloat(manifest.width) * CGFloat(transitionProgress)
        let oldPage = current.transformed(by: CGAffineTransform(translationX: -offset, y: 0))
        let newPage = next.transformed(
            by: CGAffineTransform(translationX: CGFloat(manifest.width) - offset, y: 0)
        )
        return newPage.composited(over: oldPage)
            .cropped(to: CGRect(x: 0, y: 0, width: manifest.width, height: manifest.height))
    }

    return withOpacity(next, opacity: transitionProgress)
        .composited(over: current)
        .cropped(to: CGRect(x: 0, y: 0, width: manifest.width, height: manifest.height))
}

func renderSilentVideo(manifest: Manifest, outputURL: URL) async throws {
    try removeIfPresent(outputURL)

    let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
    let compression: [String: Any] = [
        AVVideoAverageBitRateKey: 3_600_000,
        AVVideoMaxKeyFrameIntervalKey: manifest.fps * 2,
        AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
    ]
    let settings: [String: Any] = [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: manifest.width,
        AVVideoHeightKey: manifest.height,
        AVVideoCompressionPropertiesKey: compression,
    ]
    let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
    input.expectsMediaDataInRealTime = false
    let adaptor = AVAssetWriterInputPixelBufferAdaptor(
        assetWriterInput: input,
        sourcePixelBufferAttributes: [
            kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
            kCVPixelBufferWidthKey as String: manifest.width,
            kCVPixelBufferHeightKey as String: manifest.height,
            kCVPixelBufferIOSurfacePropertiesKey as String: [:],
        ]
    )

    guard writer.canAdd(input) else {
        throw RenderFailure.message("AVAssetWriter could not add the video input")
    }
    writer.add(input)

    guard writer.startWriting() else {
        throw writer.error ?? RenderFailure.message("AVAssetWriter failed to start")
    }
    writer.startSession(atSourceTime: .zero)

    guard let pixelBufferPool = adaptor.pixelBufferPool else {
        throw RenderFailure.message("Could not create the pixel-buffer pool")
    }

    let slides = try manifest.segments.map {
        try loadSlide(path: $0.image, width: manifest.width, height: manifest.height)
    }
    let segmentStarts = manifest.segments.reduce(into: [0.0]) { starts, segment in
        starts.append((starts.last ?? 0) + segment.duration)
    }
    let totalDuration = segmentStarts.last ?? 0
    let totalFrames = Int((totalDuration * Double(manifest.fps)).rounded())
    let ciContext = CIContext(options: [.cacheIntermediates: false])
    let colorSpace = CGColorSpaceCreateDeviceRGB()
    var segmentIndex = 0

    for frameIndex in 0..<totalFrames {
        let seconds = Double(frameIndex) / Double(manifest.fps)
        while segmentIndex + 1 < manifest.segments.count && seconds >= segmentStarts[segmentIndex + 1] {
            segmentIndex += 1
        }

        while !input.isReadyForMoreMediaData {
            if writer.status == .failed {
                throw writer.error ?? RenderFailure.message("Video writer failed while waiting for input")
            }
            try await Task.sleep(for: .milliseconds(2))
        }

        var pixelBuffer: CVPixelBuffer?
        let result = CVPixelBufferPoolCreatePixelBuffer(nil, pixelBufferPool, &pixelBuffer)
        guard result == kCVReturnSuccess, let pixelBuffer else {
            throw RenderFailure.message("Could not allocate frame \(frameIndex)")
        }

        let localTime = seconds - segmentStarts[segmentIndex]
        let frame = blendedFrame(
            slides: slides,
            manifest: manifest,
            segmentIndex: segmentIndex,
            localTime: localTime
        )
        ciContext.render(
            frame,
            to: pixelBuffer,
            bounds: CGRect(x: 0, y: 0, width: manifest.width, height: manifest.height),
            colorSpace: colorSpace
        )

        let presentationTime = CMTime(value: CMTimeValue(frameIndex), timescale: CMTimeScale(manifest.fps))
        guard adaptor.append(pixelBuffer, withPresentationTime: presentationTime) else {
            throw writer.error ?? RenderFailure.message("Could not append frame \(frameIndex)")
        }
    }

    input.markAsFinished()
    await withCheckedContinuation { continuation in
        writer.finishWriting {
            continuation.resume()
        }
    }
    guard writer.status == .completed else {
        throw writer.error ?? RenderFailure.message("Video writer did not complete")
    }
}

func addAudioAndExport(manifest: Manifest, silentVideoURL: URL, outputURL: URL) async throws {
    try removeIfPresent(outputURL)

    let composition = AVMutableComposition()
    let videoAsset = AVURLAsset(url: silentVideoURL)
    guard let sourceVideoTrack = try await videoAsset.loadTracks(withMediaType: .video).first,
          let compositionVideoTrack = composition.addMutableTrack(
            withMediaType: .video,
            preferredTrackID: kCMPersistentTrackID_Invalid
          ) else {
        throw RenderFailure.message("Could not create the composition video track")
    }
    let totalDuration = CMTime(seconds: manifest.segments.reduce(0) { $0 + $1.duration }, preferredTimescale: 600)
    try compositionVideoTrack.insertTimeRange(
        CMTimeRange(start: .zero, duration: totalDuration),
        of: sourceVideoTrack,
        at: .zero
    )

    guard let compositionAudioTrack = composition.addMutableTrack(
        withMediaType: .audio,
        preferredTrackID: kCMPersistentTrackID_Invalid
    ) else {
        throw RenderFailure.message("Could not create the composition audio track")
    }

    for cue in manifest.audioCues {
        let audioAsset = AVURLAsset(url: URL(fileURLWithPath: cue.path))
        guard let sourceAudioTrack = try await audioAsset.loadTracks(withMediaType: .audio).first else {
            throw RenderFailure.message("No audio track found in \(cue.path)")
        }
        let assetDuration = try await audioAsset.load(.duration)
        let startTime = CMTime(seconds: cue.start, preferredTimescale: 600)
        let remaining = CMTimeSubtract(totalDuration, startTime)
        let duration = CMTimeCompare(assetDuration, remaining) < 0 ? assetDuration : remaining
        if CMTimeCompare(duration, .zero) > 0 {
            try compositionAudioTrack.insertTimeRange(
                CMTimeRange(start: .zero, duration: duration),
                of: sourceAudioTrack,
                at: startTime
            )
        }
    }

    guard let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetHighestQuality) else {
        throw RenderFailure.message("Could not create the MP4 exporter")
    }
    exporter.shouldOptimizeForNetworkUse = true
    exporter.timeRange = CMTimeRange(start: .zero, duration: totalDuration)
    try await exporter.export(to: outputURL, as: .mp4)
}

func printValidation(outputURL: URL) async throws {
    let asset = AVURLAsset(url: outputURL)
    let duration = try await asset.load(.duration)
    let videoTracks = try await asset.loadTracks(withMediaType: .video)
    let audioTracks = try await asset.loadTracks(withMediaType: .audio)
    guard let videoTrack = videoTracks.first else {
        throw RenderFailure.message("The final MP4 has no video track")
    }
    let size = try await videoTrack.load(.naturalSize)
    let bytes = (try FileManager.default.attributesOfItem(atPath: outputURL.path)[.size] as? NSNumber)?.intValue ?? 0
    print(
        "duration=\(String(format: "%.3f", CMTimeGetSeconds(duration))) " +
        "size=\(Int(size.width))x\(Int(size.height)) " +
        "videoTracks=\(videoTracks.count) audioTracks=\(audioTracks.count) bytes=\(bytes)"
    )
}

@main
struct ShortVideoRenderer {
    static func main() async {
        do {
            guard CommandLine.arguments.count == 4 else {
                throw RenderFailure.message("Usage: renderer manifest.json silent.mp4 output.mp4")
            }
            let manifestURL = URL(fileURLWithPath: CommandLine.arguments[1])
            let silentVideoURL = URL(fileURLWithPath: CommandLine.arguments[2])
            let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])
            let manifest = try JSONDecoder().decode(Manifest.self, from: Data(contentsOf: manifestURL))
            guard !manifest.segments.isEmpty else {
                throw RenderFailure.message("The manifest has no video segments")
            }

            try await renderSilentVideo(manifest: manifest, outputURL: silentVideoURL)
            try await addAudioAndExport(manifest: manifest, silentVideoURL: silentVideoURL, outputURL: outputURL)
            try await printValidation(outputURL: outputURL)
        } catch {
            fputs("render error: \(error)\n", stderr)
            exit(1)
        }
    }
}
