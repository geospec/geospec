/**
 * Shape of one service page entry.
 * Used for both the home-page service grid and the /services/:slug detail page.
 */
export interface ServicePage {
  /** Two-digit index for the eyebrow (e.g. "01"). */
  num: string;
  /** Display name (heading). */
  name: string;
  /** Short slug used in the URL — kebab-case, no special chars. */
  slug: string;
  /** Short summary used on the home-page service card. */
  summary: string;
  /** 4-6 word category tag shown in the eyebrow on the detail page. */
  tag: string;
  /** Two-line hero subhead, outcome-led. */
  hook: [string, string];
  /** Single-paragraph lede beneath the hook. */
  lede: string;
  /** 2-3 paragraphs of body copy describing what we deliver. */
  prose: string[];
  /** Concrete bullet list — what the client actually receives. */
  delivers: string[];
  /** 4-5 Q/A entries for the FAQ accordion. */
  faq: Array<[string, string]>;
  /** Three stat tiles for the hero strip — [value, label]. */
  kpi: Array<[string, string]>;
}
