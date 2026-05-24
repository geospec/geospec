import Button from './Button';

/**
 * Mid-page CTA sitting between the About and Services sections.
 * Cream-deep background, big headline left, action stack right.
 */
export default function MidCta() {
  return (
    <section className="bg-paper-deep text-ink py-16 md:py-20 border-b border-ink-line">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-7 lg:gap-16 items-start lg:items-center">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent font-semibold mb-4">
              § · Take the next step
            </div>
            <h3
              className="font-sans font-semibold uppercase text-ink m-0 text-balance text-[24px] md:text-[36px] lg:text-[48px]"
              style={{ lineHeight: 1.02, letterSpacing: '-0.026em' }}
            >
              Ready to see what your data{' '}
              <span className="font-serif italic font-normal text-accent">can do</span>?
            </h3>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <p className="font-sans text-[15.5px] md:text-[17px] text-ink-body leading-[1.6] m-0">
              Tell us your challenge. Our analysts will scope a solution and respond within 48
              hours.
            </p>
            <Button variant="accent" href="/#contact">
              Request a Consultation →
            </Button>
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-body font-medium">
              No commitment required · we start with understanding the problem.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
