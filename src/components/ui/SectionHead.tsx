import { Eyebrow } from "./Eyebrow";

interface SectionHeadProps {
  eyebrow: string;
  heading: React.ReactNode;
  description?: string;
}

export function SectionHead({ eyebrow, heading, description }: SectionHeadProps) {
  return (
    <div className="mb-16 max-w-[720px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display font-light text-[clamp(1.5rem,3.2vw,2.3rem)] leading-[1.25] mt-5">
        {heading}
      </h2>
      {description && (
        <p className="mt-[18px] text-sq-slate">{description}</p>
      )}
    </div>
  );
}
