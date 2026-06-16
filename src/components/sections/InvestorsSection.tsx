import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function InvestorsSection() {
  return (
    <section
      id="investors"
      className="py-[120px] relative border-t border-sq-line text-center"
      style={{
        background: "linear-gradient(180deg, #0B1124 0%, #060914 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <Eyebrow centered>Investors &amp; Partners</Eyebrow>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-display font-light text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.3] max-w-[22ch] mx-auto mt-6">
            The trust layer of space is{" "}
            <b className="font-bold text-sq-kapton-bright">
              being built now.
            </b>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="max-w-[60ch] mx-auto mt-[22px] text-sq-slate">
            SpaceQuantum is part of the WISeKey ecosystem (SIX: WIHN &middot;
            Nasdaq: WKEY), alongside SEALSQ (Nasdaq: LAES), with a planned
            Nasdaq listing on its own trajectory. For institutional briefings,
            partnership inquiries, and the full constellation economics, contact
            our Geneva headquarters.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex gap-[18px] flex-wrap justify-center">
            <Button variant="gold" href="mailto:info@wisekey.com">
              Request Investor Briefing
            </Button>
            <Button
              variant="ghost"
              href="https://www.wisesat.space"
              external
            >
              WISeSat.Space &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
