import Button from './Button';

/**
 * Home hero: inverse (dark) section over looping Earth-observation footage,
 * with a left-weighted scrim so the copy stays legible.
 */
export default function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden flex items-center min-h-[600px] bg-background text-foreground"
      style={{ paddingBlock: 'var(--hero-y)' }}
    >
      <video
        className="hero-video absolute inset-0 w-full h-full object-cover"
        src="/uploads/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(16,27,11,0.86) 0%, rgba(16,27,11,0.80) 40%, rgba(16,27,11,0.25) 72%, rgba(16,27,11,0.12) 100%)',
        }}
      />
      <div className="container-x relative w-full">
        <div className="max-w-[880px] flex flex-col items-start">
          <h1
            className="max-w-[680px] font-bold text-foreground"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            From orbit to ground{' '}
            <span className="text-gold-500 underline decoration-[0.06em] underline-offset-[0.12em]">
              TRUTH
            </span>
          </h1>
          <p className="mt-6 max-w-[520px] text-foreground">
            GeoSpec Solutions provides end-to-end geospatial and Earth observation services to
            governments, agribusinesses and development organisations across Africa. We turn
            satellite data into decision-ready intelligence that supports investment, planning and
            risk management.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/#services" large>
              See our services
            </Button>
            <Button to="/#contact" variant="outline" large>
              Talk to us
            </Button>
          </div>
          <p className="mt-10 max-w-[520px] pt-4 border-t border-border text-sm leading-normal text-foreground">
            Trusted by government agencies, development organisations and private sector clients
            across Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
