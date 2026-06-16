export const NAV_LINKS = [
  { label: "The Quantum Highway", href: "#highway" },
  { label: "Constellation", href: "#constellation" },
  { label: "Markets", href: "#markets" },
  { label: "Investors", href: "#investors" },
] as const;

export const STACK_LAYERS = [
  { id: "L1", label: "Root of Trust \u2014 OISTE Foundation, Geneva", active: false },
  { id: "L2", label: "Post-Quantum Semiconductors \u2014 SEALSQ", active: false },
  { id: "L3", label: "Digital Identity \u2014 Certified PKI", active: false },
  { id: "L4", label: "Quantum-Safe Networks", active: false },
  { id: "L5", label: "Sovereign Cloud & Data", active: false },
  { id: "L6", label: "Machine Economy \u2014 Tokenized Transactions", active: false },
  { id: "L7", label: "SpaceQuantum \u2014 The Orbital Trust Layer", active: true },
] as const;

export const CAPABILITIES = [
  {
    number: "QS / 01",
    title: "Post-Quantum Key Delivery",
    description:
      "NIST-standardized post-quantum algorithms, embedded in radiation-tolerant SEALSQ silicon and broadcast from low Earth orbit. Encryption that holds when quantum computers arrive \u2014 because it was built for that day.",
  },
  {
    number: "QS / 02",
    title: "Direct-to-Satellite IoT",
    description:
      "Sensors, vehicles, containers, and grids connect straight to the constellation. Authenticated telemetry from the 85% of the planet that terrestrial networks never reach \u2014 oceans, deserts, poles, and conflict zones.",
  },
  {
    number: "QS / 03",
    title: "Sovereign by Design",
    description:
      "Anchored to a neutral Swiss foundation with UN consultative status. No kill switch, no extraterritorial data seizure, no single point of political failure. Trust as critical infrastructure \u2014 owned by no one government.",
  },
] as const;

export const MISSION_STATS = [
  { value: "10", suffix: undefined, label: "Next-Gen Satellites" },
  { value: "2027", suffix: "\u201328", label: "Launch Window" },
  { value: "550", suffix: " km", label: "Low Earth Orbit" },
  { value: "F9", suffix: undefined, label: "SpaceX Falcon 9 Rideshare" },
] as const;

export const TIMELINE_ITEMS = [
  {
    date: "HERITAGE",
    title: "Operational constellation in orbit",
    description:
      "WISeSat picosatellites launched on successive SpaceX Falcon 9 missions, validating post-quantum key exchange and direct-to-satellite IoT connectivity in flight.",
  },
  {
    date: "2026",
    title: "WISeSat 3.0 platform finalization",
    description:
      "Next-generation satellite design integrating SEALSQ post-quantum semiconductors at the payload core, with expanded throughput for the machine economy.",
  },
  {
    date: "2027\u20132028",
    title: "Constellation deployment",
    description:
      "Ten WISeSat 3.0 satellites deployed to low Earth orbit, extending coverage toward continuous, planet-wide post-quantum key delivery.",
  },
  {
    date: "BEYOND",
    title: "The quantum internet, from orbit",
    description:
      "From post-quantum key delivery to space-based quantum key distribution and entanglement links \u2014 extending the quantum internet from LEO to lunar operations and beyond.",
  },
] as const;

export const MARKET_SEGMENTS = [
  {
    iconPath: "M3 17h18M5 17V9l7-5 7 5v8M9 17v-4h6v4",
    title: "Critical Infrastructure & Energy",
    description:
      "Quantum-safe authentication for grids, pipelines, and utilities \u2014 including assets far beyond terrestrial coverage.",
  },
  {
    iconPath: "M3 12h4l2-6 4 12 2-6h6",
    title: "Defense & Government",
    description:
      "Sovereign, jurisdiction-neutral key distribution for nations seeking communications resilience without dependence on any single power\u2019s networks.",
  },
  {
    iconPath: "LOGISTICS",
    title: "Global Logistics & Maritime",
    description:
      "Authenticated tracking of containers, fleets, and cargo across oceans \u2014 tamper-evident custody from origin to destination.",
  },
  {
    iconPath: "MACHINE",
    title: "The Machine Economy",
    description:
      "Cryptographic identity and tokenized transaction rails for autonomous devices \u2014 every machine provable, every transaction lawful by design.",
  },
] as const;
