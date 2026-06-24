interface SectionVideoBgProps {
  src: string;
}

/**
 * Full-bleed, dimmed background video for a section. Autoplays muted/looping as
 * atmospheric motion behind the content. Heavy dark overlay + edge-to-black
 * gradient keep text readable and keep red the dominant accent (nothing competes
 * with the logo). Decorative only — aria-hidden.
 *
 * Usage: place as the first child of a `relative overflow-hidden` section and
 * wrap the section's content in `relative z-10`.
 */
export function SectionVideoBg({ src }: SectionVideoBgProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dim the footage so content reads and red stays dominant */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Blend top/bottom into pure black so sections flow into each other */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/20 to-black" />
    </div>
  );
}
