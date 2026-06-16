const FOOT_LINKS = [
  { label: "Architecture", href: "#highway" },
  { label: "Constellation", href: "#constellation" },
  { label: "Markets", href: "#markets" },
  { label: "Investors", href: "#investors" },
];

export function Footer() {
  return (
    <footer className="border-t border-sq-line pt-14 pb-10 text-sq-slate text-[.85rem]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex justify-between gap-8 flex-wrap items-start">
          <div>
            <a href="#top" className="text-sq-starlight font-display font-medium text-[.95rem] tracking-[.04em]">
              SPACE<b className="text-sq-kapton font-bold">QUANTUM</b>
              <span className="block font-mono font-normal text-[.55rem] tracking-[.28em] text-sq-slate mt-px">
                by WISeSat &middot; a WISeKey company
              </span>
            </a>
          </div>
          <div className="flex gap-7 font-mono text-[.72rem] tracking-[.12em] uppercase">
            {FOOT_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sq-starlight transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-9 pt-6 border-t border-sq-line text-[.78rem] leading-[1.7] max-w-[90ch]">
          &copy; 2026 SpaceQuantum &middot; WISeSat AG, a WISeKey International
          Holding company. Geneva, Switzerland. Cryptographic Root of Trust
          operated by the OISTE Foundation. This page may contain
          forward-looking statements regarding planned satellite deployments and
          corporate transactions; actual results may differ materially.
        </p>
      </div>
    </footer>
  );
}
