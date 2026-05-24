import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import Button from './Button';

/**
 * Service-detail page bottom — repeats the "Let's map your future" CTA,
 * adds a previous/next pager, and a full 8-card "explore the rest" grid.
 */
export default function ServiceCta({ slug }: { slug: string }) {
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <section className="py-20 md:py-28 lg:py-32 bg-ink text-paper relative overflow-hidden">
        <div
          className="absolute top-[-180px] right-[-180px] w-[540px] h-[540px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(232,154,28,0.22) 0%, rgba(232,154,28,0) 70%)',
          }}
        />
        <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-9 lg:gap-16 items-end relative">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent font-semibold mb-6">
                § Take the next step
              </div>
              <h2
                className="font-sans font-semibold uppercase text-paper m-0 text-balance text-[36px] md:text-[48px] lg:text-[64px]"
                style={{ lineHeight: 0.98, letterSpacing: '-0.030em' }}
              >
                Let's <span className="font-serif italic font-normal text-accent">map</span>
                <br />
                your future.
              </h2>
            </div>
            <div>
              <p className="font-sans text-[15.5px] md:text-[17px] leading-[1.6] text-paper/80 max-w-[520px] my-6 m-0">
                Tell us your challenge. Our analysts will scope a solution and respond within 48
                hours — no commitment required.
              </p>
              <div className="flex flex-col gap-3 items-start mt-8">
                <Button variant="accent" href="/#contact">
                  Request a Consultation →
                </Button>
                <Button
                  variant="ghost"
                  href="/#services"
                  className="!bg-transparent !text-paper !border-paper/55 hover:!bg-paper hover:!text-ink hover:!border-paper"
                >
                  Browse all services
                </Button>
              </div>
            </div>
          </div>

          {/* Prev / next pager */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6 pt-9 border-t border-paper/20">
            <Link
              to={`/services/${prev.slug}`}
              className="no-underline text-paper flex flex-col gap-2 p-5 border border-paper/20 hover:bg-paper/5 hover:border-accent transition-colors group"
            >
              <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-paper/55 font-semibold">
                ← Previous service
              </span>
              <span
                className="font-sans text-[16px] md:text-[18px] font-semibold uppercase text-paper group-hover:text-accent transition-colors"
                style={{ letterSpacing: '-0.010em' }}
              >
                {prev.name}
              </span>
            </Link>
            <Link
              to={`/services/${next.slug}`}
              className="no-underline text-paper flex flex-col gap-2 p-5 border border-paper/20 hover:bg-paper/5 hover:border-accent transition-colors group items-end text-right md:text-right"
            >
              <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-paper/55 font-semibold">
                Next service →
              </span>
              <span
                className="font-sans text-[16px] md:text-[18px] font-semibold uppercase text-paper group-hover:text-accent transition-colors"
                style={{ letterSpacing: '-0.010em' }}
              >
                {next.name}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* All-services strip */}
      <section className="py-16 md:py-24 bg-ink-deep text-paper">
        <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
          <h3 className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-paper/55 m-0 mb-7">
            Explore the rest of our service catalogue
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/12 border border-paper/12">
            {SERVICES.map((s) => {
              const isActive = s.slug === slug;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={[
                    'no-underline text-paper p-5 md:p-6 flex flex-col gap-2 min-h-[140px]',
                    'transition-colors group',
                    isActive
                      ? 'bg-ink border-l-2 border-accent pl-[18px] md:pl-[22px]'
                      : 'bg-ink-deep hover:bg-ink',
                  ].join(' ')}
                >
                  <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-paper/55 font-semibold">
                    — № {s.num}
                  </span>
                  <span
                    className="font-sans text-[15px] md:text-[16px] font-semibold uppercase text-balance group-hover:text-accent transition-colors"
                    style={{ letterSpacing: '-0.008em', lineHeight: 1.18 }}
                  >
                    {s.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
