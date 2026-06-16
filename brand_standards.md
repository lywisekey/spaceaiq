# Brand Standards — Visual System Application

**✓ Reference Caching:** This file is loaded ONE TIME at conversation start via `@cache-load`. Referenced as `brand_standards.md (cached)` in all subsequent messages.

**Owner:** Phase 3. Read before touching any visual design.
**WCAG contrast rules:** see `quality_standards.md (cached) § 1`.

---

## Color system

### SpaceQuantum dark palette

| Role | Tailwind token | Hex / Value | Usage |
|---|---|---|---|
| Void (base bg) | `bg-sq-void` | `#060914` | Default body/page background |
| Midnight | `bg-sq-midnight` | `#0B1124` | Alternate section bands, card backgrounds |
| Panel | `bg-sq-panel` | `#10172E` | Hover states, elevated surfaces |
| Line / border | `border-sq-line` | `rgba(140,160,210,.14)` | Dividers, grid lines, subtle borders |
| Starlight (primary text) | `text-sq-starlight` | `#E9ECF6` | Headings, high-emphasis body text |
| Slate (secondary text) | `text-sq-slate` | `#8B94AB` | Body copy, descriptions, meta text |
| Kapton gold (accent) | `bg-sq-kapton`, `text-sq-kapton` | `#E0A94E` | Primary CTAs, eyebrow labels, active indicators, brand accent |
| Kapton bright | `text-sq-kapton-bright` | `#F5C97A` | Bold highlights within headings, emphasis text |
| Ice blue | `text-sq-ice` | `#9FD8EA` | Atmospheric glow, orbit lines, secondary accent |

**Key constraints:**
- `#E0A94E` (kapton) on `#060914` (void) passes WCAG AA for all text sizes.
- `#8B94AB` (slate) on `#060914` (void) passes WCAG AA for large text — avoid for small body copy below 16px.
- `#E9ECF6` (starlight) on `#060914` (void) passes WCAG AAA.
- Never use kapton gold for long-form body text — reserve for accents, labels, and CTAs.

**CTA convention:**
- Primary: `bg-sq-kapton text-sq-void` (gold button, dark text)
- Secondary / ghost: `border-sq-line text-sq-starlight` (transparent with border)
- Nav CTA: `border border-sq-kapton text-sq-kapton`, hover fills `bg-sq-kapton text-sq-void`
- Tertiary: text link, color shift to starlight on hover

---

## Typography

- **Family:** neo-grotesque or geometric sans serif (Swiss-precise). Inter or Helvetica Neue.
- **Weights:** three maximum — regular (400), medium (500), bold (700).
- **Body minimum:** 16px, line-height 1.5.

**Type scale (8px rhythm):**

| Tailwind class | Size | Line height | Use |
|---|---|---|---|
| `text-h1` | 48–64px | 1.1 | Page hero |
| `text-h2` | 32–40px | 1.15 | Section title |
| `text-h3` | 24px | 1.25 | Sub-section |
| `text-h4` | 20px | 1.3 | Card title |
| `text-base` | 16px | 1.5 | Default body |
| `text-sm` | 14px | 1.5 | Meta, captions |

Avoid all-caps for long strings. Use for short labels only.

---

## Grid & spacing

- **Baseline:** 8px. Every margin, padding, and height is a multiple of 8.
- **Columns:** 4 mobile, 8 tablet, 12 desktop.
- **Max content width:** 1280–1440px.
- **Gutter:** 16–24px mobile, 24–32px desktop.
- **Section vertical padding:** 48–96px per hierarchy.

Generous negative space is a brand value (Core Value #2: Minimalist Mindset).

---

## Imagery & iconography

**Approved categories:**
- Semiconductor macro and manufacturing (SEALSQ)
- WISeSat satellites, LEO orbits, ground stations
- Swiss Alps secure-storage and sovereignty context
- Human-centric tech (people operating secure systems)
- Abstract cryptography, used sparingly

**Avoid:**
- Hooded hackers, neon code walls, glowing padlocks
- Generic handshake-over-globe stock
- Cartoon characters (unless sanctioned campaign)

**Icons:** 24–32px, 1.5px stroke, rounded joins. Keep stroke consistent site-wide.

---

## Motion

Motion clarifies change; it does not decorate.

- Default easing: `ease-out`, 200–300ms.
- Hover states: subtle color/border shift, no bouncing.
- No parallax unless a single deliberate moment.
- Honor `prefers-reduced-motion` (cached: see `quality_standards.md`).

---

## UI voice

Professional, assertive, quantified. Per `audience_playbook.md` (cached) for per-audience tonal shifts.

- Prefer concrete nouns/verbs. Cut adjectives that don't work.
- **Quantify everywhere:** "1.6B+ chips deployed," "NASDAQ-listed since 2016," "Swiss-headquartered."
- Cite standards by name: ISO 27001, FIPS 140-3, Common Criteria EAL, eIDAS.
- Use the slogan intentionally, not decoratively: "The Human-Driven Technology Platform."

---

## Applying tokens in code

Declare CSS custom properties at `:root`, then use everywhere. Never hard-code hex.

```css
:root {
  --sq-void: #060914;
  --sq-midnight: #0B1124;
  --sq-panel: #10172E;
  --sq-line: rgba(140, 160, 210, .14);
  --sq-starlight: #E9ECF6;
  --sq-slate: #8B94AB;
  --sq-kapton: #E0A94E;
  --sq-kapton-bright: #F5C97A;
  --sq-ice: #9FD8EA;
  --space-unit: 8px;
}
```

Tailwind integrates these automatically via `tailwind.config.ts`. Use semantic class names — no inline `style=` or hard-coded hex.
