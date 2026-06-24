import { MISSION_STATS, TIMELINE_ITEMS } from "@/lib/constants";
import { SectionHead } from "@/components/ui/SectionHead";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionVideoBg } from "@/components/ui/SectionVideoBg";
import { ConstellationSVG } from "@/components/constellation/ConstellationSVG";

export function ConstellationSection() {
  return (
    <section
      id="constellation"
      className="py-[120px] relative overflow-hidden border-t border-b border-sq-line bg-sq-midnight"
    >
      <SectionVideoBg src="/space-3.mp4" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionHead
            eyebrow="The Program"
            heading={
              <>
                WISeSat 3.0: the constellation,{" "}
                <b className="font-bold text-sq-kapton-bright">
                  by the numbers.
                </b>
              </>
            }
            description="Built on a flight heritage of operational picosatellites launched aboard SpaceX Falcon 9, the next generation scales the orbital trust layer to continuous global coverage."
          />
        </ScrollReveal>

        <ScrollReveal>
          <ConstellationSVG />
        </ScrollReveal>

        {/* Mission stats grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-sq-line border border-sq-line mb-16">
            {MISSION_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-sq-midnight p-[36px_30px]"
              >
                <div className="font-display font-bold text-[2rem] text-sq-kapton-bright">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-[1rem] font-light text-sq-slate">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="font-mono text-[.68rem] tracking-[.18em] uppercase text-sq-slate mt-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <div className="border-t border-sq-line">
            {TIMELINE_ITEMS.map((item) => (
              <div
                key={item.date}
                className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-[30px] border-b border-sq-line"
              >
                <div className="font-mono text-[.8rem] tracking-[.1em] text-sq-kapton-bright">
                  {item.date}
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-[6px]">
                    {item.title}
                  </h4>
                  <p className="text-sq-slate text-[.93rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
