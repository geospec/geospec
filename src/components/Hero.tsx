import Button from './Button';

/**
 * Hero section — full-bleed dark background with looped aerial video,
 * headline + lede + dual CTA + trust line. Sits beneath the fixed nav.
 */
export default function Hero() {
  return (
    <section className="relative bg-ink-deep text-paper overflow-hidden min-h-[600px] md:min-h-[640px] md:h-screen md:max-h-[1080px]">
      <video
        src="/uploads/15164036-uhd_3840_2024_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,38,19,0.62) 0%, rgba(7,38,19,0.18) 22%, rgba(7,38,19,0.28) 58%, rgba(7,38,19,0.92) 100%), linear-gradient(90deg, rgba(7,38,19,0.55) 0%, rgba(7,38,19,0) 60%)',
        }}
      />
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />

      <div className="relative z-[2] mx-auto max-w-wrap px-7 md:px-9 lg:px-14 pt-28 md:pt-[120px] pb-8 md:pb-12 flex flex-col justify-center md:justify-between min-h-[600px] md:min-h-screen md:max-h-[1080px] gap-8">
        <div>
          <h1
            className="font-sans font-semibold uppercase text-paper m-0 max-w-[1180px] text-balance leading-[1.02] md:leading-[0.98]"
            style={{
              fontSize: 'clamp(28px, 7vw, 96px)',
              letterSpacing: '-0.038em',
            }}
          >
            Intelligence that moves
            <br />
            at the{' '}
            <span
              className="font-sans italic font-semibold text-accent"
              style={{ letterSpacing: '-0.030em' }}
            >
              speed of decisions.
            </span>
          </h1>

          <p className="font-sans text-paper/85 mt-6 md:mt-7 max-w-[680px] text-[15px] md:text-[18px] leading-[1.55] text-pretty">
            GeoSpec Solutions delivers advanced geospatial intelligence, satellite analytics and
            spatial data services to organisations that need clarity where it counts — from
            boardrooms to the field.
          </p>

          <div className="flex flex-row flex-wrap gap-2.5 mt-6 md:mt-8 items-start">
            <Button variant="accent" href="/#contact">
              Start a Conversation →
            </Button>
            <Button
              variant="ghost"
              href="/#services"
              className="!bg-transparent !text-paper !border-paper/55 hover:!bg-paper hover:!text-ink hover:!border-paper"
            >
              Explore Services
            </Button>
          </div>

          <p className="font-mono text-[9.5px] md:text-[11px] tracking-[0.14em] uppercase text-paper/55 mt-8 md:mt-10 max-w-[620px] leading-[1.7] font-medium border-t border-paper/20 pt-4 md:pt-[18px]">
            Trusted by government agencies, development organisations and private sector clients
            across Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
