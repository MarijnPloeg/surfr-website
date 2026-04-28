// =====================================================================
// Accents — brand-cyan-only.
//
// An earlier version of this file used wind-palette stops as
// category-color accents (lime / orange / pink / purple). That was
// rolled back — those colors aren't on brand. Surfr's palette is
// brand cyan + neutrals.
//
// Variation across the site now comes from typography, scale, glow
// intensity, and composition — not from hue.
// =====================================================================

export type Accent =
  | "cyan"
  | "lime"
  | "orange"
  | "live"
  | "pink"
  | "purple";

export interface AccentColors {
  bg: string;
  fg: string;
  border: string;
  glow: string;
}

const CYAN: AccentColors = {
  bg: "rgba(1, 188, 215, 0.14)",
  fg: "#0097A7",
  border: "rgba(1, 188, 215, 0.30)",
  glow: "0 12px 28px rgba(1, 188, 215, 0.28)",
};

// All accent keys resolve to brand cyan. Type kept so existing call
// sites continue to compile while we revisit category differentiation
// through non-color means.
export const ACCENTS: Record<Accent, AccentColors> = {
  cyan: CYAN,
  lime: CYAN,
  orange: CYAN,
  live: CYAN,
  pink: CYAN,
  purple: CYAN,
};

/** Discipline → accent mapping. All cyan for now. */
export const DISCIPLINE_ACCENT: Record<string, Accent> = {
  "Big Air": "cyan",
  "Wave": "cyan",
  "Foil": "cyan",
  "Freeride": "cyan",
  "Freestyle": "cyan",
};
