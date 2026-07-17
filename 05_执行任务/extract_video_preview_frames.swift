import AVFoundation
import Foundation
import ImageIO
import UniformTypeIdentifiers

@main
struct PreviewFrameExtractor {
    static func main() throws {
        guard CommandLine.arguments.count >= 4 else {
            fputs("Usage: extractor video.mp4 output-directory seconds...\n", stderr)
            exit(2)
        }

        let videoURL = URL(fileURLWithPath: CommandLine.arguments[1])
        let outputDirectory = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
        let seconds = CommandLine.arguments.dropFirst(3).compactMap(Double.init)
        try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

        let asset = AVURLAsset(url: videoURL)
        let generator = AVAssetImageGenerator(asset: asset)
        generator.appliesPreferredTrackTransform = true
        generator.requestedTimeToleranceBefore = CMTime(seconds: 0.02, preferredTimescale: 600)
        generator.requestedTimeToleranceAfter = CMTime(seconds: 0.02, preferredTimescale: 600)

        for (index, second) in seconds.enumerated() {
            let requested = CMTime(seconds: second, preferredTimescale: 600)
            var actual = CMTime.zero
            let image = try generator.copyCGImage(at: requested, actualTime: &actual)
            let output = outputDirectory.appendingPathComponent(String(format: "%02d-%05.2fs.png", index, second))
            guard let destination = CGImageDestinationCreateWithURL(
                output as CFURL,
                UTType.png.identifier as CFString,
                1,
                nil
            ) else {
                throw NSError(domain: "PreviewFrameExtractor", code: 1)
            }
            CGImageDestinationAddImage(destination, image, nil)
            guard CGImageDestinationFinalize(destination) else {
                throw NSError(domain: "PreviewFrameExtractor", code: 2)
            }
            print("frame=\(output.path) actual=\(String(format: "%.3f", CMTimeGetSeconds(actual)))")
        }
    }
}
