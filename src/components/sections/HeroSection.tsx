import { Starfield } from "@/components/canvas/Starfield";
import { TelemetryStrip } from "@/components/telemetry/TelemetryStrip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <header id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Starfield canvas */}
      <Starfield />

      {/* Earth limb */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 -bottom-[72vw] w-[160vw] h-[160vw] min-w-[1400px] min-h-[1400px] rounded-full z-[1]"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, #1A2C5E 0%, #101B3D 18%, #0A1129 38%, #060914 62%)",
          boxShadow:
            "0 -2px 80px rgba(120,170,255,.22), inset 0 6px 60px rgba(159,216,234,.10)",
        }}
      >
        {/* Atmosphere arc */}
        <div
          className="absolute inset-[-1px] rounded-full"
          style={{
            borderTop: "1px solid rgba(159,216,234,.45)",
            mask: "linear-gradient(to bottom, #000 0 90px, transparent 140px)",
            WebkitMask:
              "linear-gradient(to bottom, #000 0 90px, transparent 140px)",
          }}
        />
      </div>

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
