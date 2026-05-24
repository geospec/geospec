import Button from './Button';

/**
 * Bottom CTA — dark forest panel with subtle amber glow.
 * Mirrors the FinalCta on the service detail page.
 */
export default function FinalCta() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-ink relative overflow-hidden border-b border-paper/10">
      <div
        className="absolute top-[-180px] right-[-180px] w-[540px] h-[540px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(232,154,28,0.22) 0%, rgba(232,154,28,0) 70%)',
        }}
      />
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-9 lg:gap-16 items-end relative">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent font-semibold mb-6">
              § 05 · Engage
            </div>
            <h2
              className="font-sans font-semibold uppercase text-paper m-0 text-balance text-[36px] md:text-[64px] lg:text-[88px]"
              style={{ lineHeight: 0.98, letterSpacing: '-0.034em' }}
            >
              Let's <span className="font-serif italic font-normal text-accent">map</span>
              <br />
              your future.
            </h2>
          </div>
          <div>
            <p className="font-sans text-[15.5px] md:text-[17px] leading-[1.6] text-paper/80 max-w-[560px] my-7 md:my-9 m-0">
              Tell us your challenge. Our analysts will scope a solution and respond within 48
              hours — no commitment required. We start by understanding your problem.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <Button variant="accent" href="/#contact">
                Request a Consultation →
              </Button>
              <Button
                variant="ghost"
                href="/#services"
                className="!bg-transparent !text-paper !border-paper/55 hover:!bg-paper hover:!text-ink hover:!border-paper"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
