import type { ServicePage } from '../types';

/**
 * FAQ accordion. Uses native <details>/<summary>; first item is open
 * by default. Plus-sign rotation animation on open.
 */
export default function ServiceFaq({ service }: { service: ServicePage }) {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-paper-deep border-b border-ink-line">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5 lg:gap-14 mb-10 md:mb-14 items-start">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent font-semibold flex flex-col gap-2 leading-[1.4]">
            <span className="text-ink-body font-medium">§ Questions</span>
            <span
              className="font-sans text-[18px] lg:text-[22px] font-semibold text-ink uppercase mt-1"
              style={{ letterSpacing: '-0.012em', lineHeight: 1.08 }}
            >
              Frequently
              <br />
              asked
            </span>
          </div>
          <h2
            className="font-sans font-semibold uppercase text-ink m-0 text-balance text-[28px] md:text-[36px] lg:text-[44px]"
            style={{ lineHeight: 1.03, letterSpacing: '-0.026em' }}
          >
            Questions our clients{' '}
            <span className="font-serif italic font-normal text-accent">actually</span> ask.
          </h2>
        </div>

        <div className="max-w-[920px] ml-auto flex flex-col bg-paper border border-ink-line">
          {service.faq.map(([q, a], i) => (
            <details
              key={i}
              open={i === 0}
              className="border-b border-ink-line last:border-b-0 group"
            >
              <summary className="cursor-pointer px-6 py-6 md:px-7 md:py-7 font-sans text-[16px] md:text-[18px] font-semibold text-ink flex justify-between items-center gap-6 hover:bg-paper-deep transition-colors group-open:bg-paper-deep group-open:text-accent">
                <span style={{ letterSpacing: '-0.008em' }}>{q}</span>
                <span
                  aria-hidden
                  className="font-sans font-light text-[28px] leading-none text-accent flex-none transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 md:px-7 md:pb-7 font-sans text-[15px] md:text-[16px] leading-[1.65] text-ink-body text-pretty max-w-[760px]">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
