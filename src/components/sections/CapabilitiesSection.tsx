import { CAPABILITIES } from "@/lib/constants";
import { SectionHead } from "@/components/ui/SectionHead";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionVideoBg } from "@/components/ui/SectionVideoBg";

export function CapabilitiesSection() {
  return (
    <section className="py-[120px] relative overflow-hidden">
      <SectionVideoBg src="/space-3.mp4" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionHead
            eyebrow="Capabilities"
            heading={
              <>
                One constellation.{" "}
                <b className="font-bold text-sq-kapton-bright">
                  Three guarantees.
                </b>
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-sq-line border border-sq-line">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className="bg-sq-void p-[44px_36px] transition-colors duration-300 hover:bg-sq-panel"
              >
                <div className="font-mono text-[.7rem] tracking-[.2em] text-sq-kapton-bright mb-[26px]">
                  {cap.number}
                </div>
                <h3 className="font-display font-medium text-[1.05rem] leading-[1.4] mb-4">
                  {cap.title}
                </h3>
                <p className="text-sq-slate text-[.95rem]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
