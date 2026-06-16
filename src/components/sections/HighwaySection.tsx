import { STACK_LAYERS } from "@/lib/constants";
import { SectionHead } from "@/components/ui/SectionHead";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HighwaySection() {
  return (
    <section
      id="highway"
      className="py-[120px] relative border-t border-b border-sq-line bg-sq-midnight"
    >
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionHead
            eyebrow="Architecture"
            heading={
              <>
                The final layer of the{" "}
                <b className="font-bold text-sq-kapton-bright">
                  Quantum Highway.
                </b>
              </>
            }
            description="Seven layers connect a cryptographic root of trust on the ground to a constellation overhead. SpaceQuantum is where the stack leaves the planet."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
          <ScrollReveal>
            <ul className="list-none border-l border-sq-line">
              {STACK_LAYERS.map((layer) => (
                <li
                  key={layer.id}
                  className={`relative pl-[26px] py-4 font-mono text-[.82rem] tracking-[.04em] transition-colors duration-200 ${
                    layer.active ? "text-sq-starlight" : "text-sq-slate"
                  }`}
                >
                  {/* Dot */}
                  <span
                    className={`absolute left-[-4px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full ${
                      layer.active
                        ? "bg-sq-kapton shadow-[0_0_12px_rgba(224,169,78,.8)]"
                        : "bg-sq-line"
                    }`}
                  />
                  <span className="text-sq-kapton mr-[14px]">
                    {layer.id}
                  </span>
                  {layer.label}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-display font-medium text-[1.25rem] mb-[18px]">
                Why trust must leave the ground
              </h3>
              <p className="text-sq-slate mb-4">
                Terrestrial key distribution depends on infrastructure that can
                be cut, intercepted, or legislated against. A satellite passing
                overhead answers to{" "}
                <b className="text-sq-starlight font-semibold">
                  physics and Swiss neutrality
                </b>{" "}
                &mdash; not to any single jurisdiction&rsquo;s network.
              </p>
              <p className="text-sq-slate">
                Each SpaceQuantum satellite carries{" "}
                <b className="text-sq-starlight font-semibold">
                  SEALSQ post-quantum semiconductors
                </b>
                , anchored to the OISTE cryptographic Root of Trust, exchanging
                NIST-standardized post-quantum keys directly with devices on the
                ground &mdash; no cell tower, no fiber, no intermediary.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
