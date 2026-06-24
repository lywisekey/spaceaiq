interface EyebrowProps {
  children: React.ReactNode;
  centered?: boolean;
}

export function Eyebrow({ children, centered }: EyebrowProps) {
  return (
    <div
      className={`font-mono text-[.72rem] tracking-[.22em] uppercase text-sq-kapton-bright flex items-center gap-3 ${centered ? "justify-center" : ""}`}
    >
      <span className="block w-7 h-px bg-sq-kapton-bright opacity-70" />
      {children}
      {centered && (
        <span className="block w-7 h-px bg-sq-kapton-bright opacity-70" />
      )}
    </div>
  );
}
