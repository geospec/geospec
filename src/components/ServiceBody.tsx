import type { ServicePage } from '../types';

/**
 * "What we deliver" — left column has prose paragraphs, right column has
 * a sticky dark panel listing concrete deliverables.
 */
export default function ServiceBody({ service }: { service: ServicePage }) {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-paper border-b border-ink-line">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5 lg:gap-14 mb-10 md:mb-16 items-start border-b border-ink-line pb-5 md:pb-7">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent font-semibold flex flex-col gap-2 leading-[1.4]">
            <span className="text-ink-body font-medium">§ Overview</span>
            <span
              className="font-sans text-[18px] lg:text-[22px] font-semibold text-ink uppercase mt-1"
              style={{ letterSpacing: '-0.012em', lineHeight: 1.08 }}
            >
              What we
              <br />
              deliver
            </span>
          </div>
          <h2
            className="font-sans font-semibold uppercase text-ink m-0 text-balance text-[28px] md:text-[36px] lg:text-[48px] max-w-[780px]"
            style={{ lineHeight: 1.03, letterSpacing: '-0.028em' }}
          >
            The outcome you can{' '}
            <span className="font-serif italic font-normal text-accent">
              put in front of the board
            </span>
            .
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Prose */}
          <div>
            {service.prose.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[15.5px] md:text-[17px] leading-[1.65] text-ink-body m-0 mb-5 last:mb-0 text-pretty"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Deliverables panel */}
          <div className="bg-ink text-paper p-6 md:p-10 border border-ink lg:sticky lg:top-24">
            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-accent font-semibold flex items-center gap-2.5 mb-6 before:content-[''] before:w-6 before:h-px before:bg-accent before:inline-block">
              What you receive
            </div>
            <h3
              className="font-sans text-[22px] md:text-[24px] font-semibold uppercase text-paper m-0 mb-7"
              style={{ letterSpacing: '-0.018em', lineHeight: 1.15 }}
            >
              Concrete{' '}
              <span className="font-serif italic font-normal text-accent">deliverables</span> — not
              a deck.
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col">
              {service.delivers.map((d, i) => (
                <li
                  key={i}
                  className="py-4 md:py-[18px] font-sans text-[15px] leading-[1.55] text-paper/85 border-b border-paper/15 last:border-b-0 grid grid-cols-[28px_1fr] md:grid-cols-[32px_1fr] gap-3.5 items-start"
                >
                  <span className="text-accent font-mono font-medium text-[14px]">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
