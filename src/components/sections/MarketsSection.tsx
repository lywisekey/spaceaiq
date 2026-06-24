import { MARKET_SEGMENTS } from "@/lib/constants";
import { SectionHead } from "@/components/ui/SectionHead";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionVideoBg } from "@/components/ui/SectionVideoBg";

function MarketIcon({ type }: { type: string }) {
  if (type === "LOGISTICS") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="8" width="18" height="10" rx="1" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2M3 13h18" />
      </svg>
    );
  }
  if (type === "MACHINE") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={type} />
    </svg>
  );
}

export function MarketsSection() {
  return (
    <section id="markets" className="py-[120px] relative overflow-hidden">
      <SectionVideoBg src="/space-2.mp4" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        <ScrollReveal>
          <SectionHead
            eyebrow="Markets"
            heading={
              <>
                Where orbital trust{" "}
                <b className="font-bold text-sq-kapton-bright">
                  becomes essential.
                </b>
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px_64px]">
            {MARKET_SEGMENTS.map((seg) => (
              <div
                key={seg.title}
                className="grid grid-cols-[54px_1fr] gap-[22px]"
              >
                <div className="w-[54px] h-[54px] border border-sq-line rounded-sm flex items-center justify-center text-sq-kapton-bright">
                  <MarketIcon type={seg.iconPath} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{seg.title}</h4>
                  <p className="text-sq-slate text-[.93rem]">
                    {seg.description}
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
