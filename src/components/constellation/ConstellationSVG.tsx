export function ConstellationSVG() {
  return (
    <figure
      className="mb-16 border border-sq-line bg-sq-void rounded-sm overflow-hidden"
      aria-label="Illustration of a satellite constellation in orbit around Earth, linked by inter-satellite communication paths."
    >
      <svg
        viewBox="0 0 900 620"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto"
      >
        <defs>
          <radialGradient id="earthGrad" cx="42%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#2A4B8C" />
            <stop offset="42%" stopColor="#16306A" />
            <stop offset="78%" stopColor="#0C1B40" />
            <stop offset="100%" stopColor="#070F26" />
          </radialGradient>
          <radialGradient id="atmo" cx="50%" cy="50%" r="50%">
            <stop offset="74%" stopColor="rgba(159,216,234,0)" />
            <stop offset="92%" stopColor="rgba(159,216,234,.35)" />
            <stop offset="100%" stopColor="rgba(159,216,234,0)" />
          </radialGradient>
          <radialGradient id="satGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(245,201,122,.9)" />
            <stop offset="100%" stopColor="rgba(245,201,122,0)" />
          </radialGradient>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(245,201,122,.7)" />
            <stop offset="100%" stopColor="rgba(159,216,234,.5)" />
          </linearGradient>
        </defs>

        {/* starfield */}
        <g fill="#C9D4F0">
          <circle cx="70" cy="60" r="1.1" opacity=".7" />
          <circle cx="180" cy="110" r=".8" opacity=".5" />
          <circle cx="820" cy="80" r="1.2" opacity=".8" />
          <circle cx="760" cy="180" r=".7" opacity=".5" />
          <circle cx="40" cy="300" r=".9" opacity=".6" />
          <circle cx="860" cy="360" r="1" opacity=".7" />
          <circle cx="120" cy="520" r=".8" opacity=".5" />
          <circle cx="800" cy="540" r="1.1" opacity=".7" />
          <circle cx="300" cy="40" r=".7" opacity=".5" />
          <circle cx="560" cy="50" r=".9" opacity=".6" />
          <circle cx="660" cy="470" r=".8" opacity=".5" />
          <circle cx="250" cy="580" r="1" opacity=".6" />
        </g>

        {/* orbital rings */}
        <g fill="none" stroke="rgba(159,216,234,.16)" strokeWidth="1">
          <ellipse cx="450" cy="320" rx="330" ry="118" />
          <ellipse
            cx="450"
            cy="320"
            rx="300"
            ry="250"
            transform="rotate(28 450 320)"
          />
          <ellipse
            cx="450"
            cy="320"
            rx="300"
            ry="250"
            transform="rotate(-32 450 320)"
          />
        </g>

        {/* Earth */}
        <circle cx="450" cy="320" r="150" fill="url(#atmo)" />
        <circle cx="450" cy="320" r="132" fill="url(#earthGrad)" />

        {/* graticule */}
        <g
          fill="none"
          stroke="rgba(159,216,234,.22)"
          strokeWidth="1"
          clipPath="circle(132px at 450px 320px)"
        >
          <ellipse cx="450" cy="320" rx="132" ry="44" />
          <ellipse cx="450" cy="320" rx="132" ry="90" />
          <line x1="318" y1="320" x2="582" y2="320" />
          <ellipse cx="450" cy="320" rx="44" ry="132" />
          <ellipse cx="450" cy="320" rx="90" ry="132" />
          <line x1="450" y1="188" x2="450" y2="452" />
        </g>

        {/* soft continents */}
        <g
          fill="rgba(95,150,210,.30)"
          clipPath="circle(132px at 450px 320px)"
        >
          <path d="M392 250 q34 -16 60 4 q24 18 8 42 q-20 26 -52 18 q-30 -10 -30 -34 q0 -22 14 -30 Z" />
          <path d="M470 350 q40 -8 56 18 q14 28 -14 46 q-34 18 -56 -6 q-18 -22 -4 -42 q8 -12 18 -16 Z" />
          <path d="M360 360 q24 -4 30 16 q4 22 -18 28 q-24 4 -30 -16 q-4 -20 18 -28 Z" />
        </g>

        {/* terminator */}
        <circle
          cx="450"
          cy="320"
          r="132"
          fill="rgba(7,15,38,.45)"
          clipPath="circle(132px at 450px 320px)"
          transform="translate(48 0)"
        />

        {/* mesh links */}
        <g
          stroke="url(#linkGrad)"
          strokeWidth="1.4"
          fill="none"
          opacity=".85"
        >
          <line
            x1="450" y1="150" x2="688" y2="262"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite" }}
          />
          <line
            x1="688" y1="262" x2="612" y2="470"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "0.5s" }}
          />
          <line
            x1="612" y1="470" x2="300" y2="452"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "1s" }}
          />
          <line
            x1="300" y1="452" x2="206" y2="244"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "1.5s" }}
          />
          <line
            x1="206" y1="244" x2="450" y2="150"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "2s" }}
          />
          <line
            x1="450" y1="150" x2="612" y2="470"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "2.5s" }}
          />
          <line
            x1="688" y1="262" x2="300" y2="452"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "3s" }}
          />
          <line
            x1="206" y1="244" x2="612" y2="470"
            className="constellation-link"
            style={{ strokeDasharray: "6 8", animation: "flow 6s linear infinite", animationDelay: "3.5s" }}
          />
        </g>

        {/* satellites */}
        <g>
          {[
            [450, 150],
            [688, 262],
            [612, 470],
            [300, 452],
            [206, 244],
          ].map(([cx, cy], i) => (
            <g
              key={i}
              transform={`translate(${cx} ${cy})`}
              className="constellation-sat"
              style={{
                animation: "satpulse 3s ease-in-out infinite",
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <circle r="16" fill="url(#satGlow)" />
              <circle r="3.4" fill="#F5C97A" />
              <rect
                x="-13"
                y="-2.2"
                width="9"
                height="4.4"
                rx="1"
                fill="#9FD8EA"
              />
              <rect
                x="4"
                y="-2.2"
                width="9"
                height="4.4"
                rx="1"
                fill="#9FD8EA"
              />
            </g>
          ))}
        </g>

        {/* ground downlink */}
        <line
          x1="300"
          y1="452"
          x2="430"
          y2="392"
          stroke="rgba(245,201,122,.5)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
      </svg>

      <figcaption className="font-mono text-[.72rem] tracking-[.06em] text-sq-slate p-[16px_24px] border-t border-sq-line bg-sq-midnight">
        A meshed constellation in low Earth orbit &mdash; inter-satellite links
        forming the trusted backbone of the future quantum internet.
      </figcaption>
    </figure>
  );
}
