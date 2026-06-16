interface ButtonProps {
  variant: "gold" | "ghost";
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function Button({ variant, href, children, external }: ButtonProps) {
  const base =
    "font-mono text-[.78rem] tracking-[.14em] uppercase px-[30px] py-[15px] rounded-sm inline-block transition-all duration-200";
  const variants = {
    gold: "bg-sq-kapton text-sq-void border border-sq-kapton hover:bg-sq-kapton-bright hover:border-sq-kapton-bright",
    ghost:
      "border border-sq-line text-sq-starlight hover:border-sq-slate",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
