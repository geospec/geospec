import type { ReactNode } from 'react';

interface Props {
  /** Mono eyebrow above the title (e.g. "§ 02 · Our services"). */
  ixLabel: string;
  /** Larger text beneath the eyebrow (typically broken with <br/>). */
  ixLead: ReactNode;
  /** Main title — usually contains an italic accent span. */
  title: ReactNode;
  /** Supporting paragraph beneath the title. */
  lead: string;
  /** Set when used inside a dark-section. Switches subdued colors. */
  onDark?: boolean;
}

/**
 * Two-column section header used by Services, Tech, Why, etc.
 * Left column = eyebrow + lead phrase. Right column = title + supporting copy.
 * Stacks to single column on mobile.
 */
export default function SectionHead({ ixLabel, ixLead, title, lead, onDark = false }: Props) {
  const eyebrowColor = onDark ? 'text-accent' : 'text-accent';
  const ixColor = onDark ? 'text-paper/55' : 'text-ink-body';
  const leadColor = onDark ? 'text-paper' : 'text-ink';
  const titleColor = onDark ? 'text-paper' : 'text-ink';
  const subColor = onDark ? 'text-paper/70' : 'text-ink-body';
  const borderColor = onDark ? 'border-paper/20' : 'border-ink-line';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5 lg:gap-14 mb-9 lg:mb-16 items-start border-b ${borderColor} pb-5 lg:pb-7`}
    >
      <div
        className={`font-mono text-[11px] tracking-[0.14em] uppercase ${eyebrowColor} font-semibold flex flex-col gap-2 leading-[1.4]`}
      >
        <span className={ixColor + ' font-medium'}>{ixLabel}</span>
        <span
          className={`font-sans text-[18px] lg:text-[22px] font-semibold ${leadColor} uppercase mt-1`}
          style={{ letterSpacing: '-0.012em', lineHeight: 1.08 }}
        >
          {ixLead}
        </span>
      </div>
      <div>
        <h2
          className={`font-sans font-semibold uppercase ${titleColor} m-0 text-balance text-[28px] md:text-[44px] lg:text-[56px]`}
          style={{ lineHeight: 1.02, letterSpacing: '-0.030em' }}
        >
          {title}
        </h2>
        <p
          className={`font-sans text-[15.5px] md:text-[17px] leading-[1.6] ${subColor} max-w-[680px] mt-6 m-0 normal-case font-normal`}
        >
          {lead}
        </p>
      </div>
    </div>
  );
}
