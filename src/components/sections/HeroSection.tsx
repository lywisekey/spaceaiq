import { Starfield } from "@/components/canvas/Starfield";
import { TelemetryStrip } from "@/components/telemetry/TelemetryStrip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <header id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background video */}
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
          <source src="/space-1.mp4" type="video/mp4" />
        </video>
        {/* Readability + brand overlays: darken left (text), fade top/bottom to black */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Starfield canvas — subtle moving stars + red satellites over the video */}
      <Starfield />

      {/* Hero content */}
      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-7 pt-[120px] pb-[220px]">
        <Eyebrow>The Quantum Internet &middot; Root-to-Qubit-to-Space</Eyebrow>
        <h1 className="font-display font-light text-[clamp(2rem,5.2vw,3.9rem)] leading-[1.16] tracking-[-0.01em] max-w-[18ch] mt-7">
          Bringing quantum technologies to space &mdash; to build the{" "}
          <b className="font-bold text-sq-kapton-bright">quantum internet.</b>
        </h1>
        <p className="mt-7 max-w-[54ch] text-sq-slate text-[1.06rem]">
          SpaceQuantum is the trusted platform backbone of the future quantum
          internet: a satellite constellation delivering post-quantum
          cryptographic keys to any device on Earth today, and evolving in the
          future toward space-based quantum communications and entangled
          communication links &mdash; a network secured by the laws of physics,
          beyond the reach of terrestrial vulnerabilities.
        </p>
        <div className="mt-[42px] flex gap-[18px] flex-wrap">
          <Button variant="gold" href="#constellation">
            Explore the Constellation
          </Button>
          <Button variant="ghost" href="#highway">
            How It Works
          </Button>
        </div>
      </div>

      {/* Telemetry strip */}
      <TelemetryStrip />
    </header>
  );
}
