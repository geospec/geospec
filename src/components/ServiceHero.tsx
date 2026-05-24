import { Link } from 'react-router-dom';
import type { ServicePage } from '../types';
import Button from './Button';

/**
 * Service detail page hero. Compact, outcome-led, dark forest background
 * with amber glow. Title splits across two lines: regular weight then
 * italic accent.
 */
export default function ServiceHero({ service }: { service: ServicePage }) {
  return (
    <section
      className="relative bg-ink text-paper overflow-hidden border-b border-paper/10"
      style={{ paddingTop: 148, paddingBottom: 56 }}
    >
      <div
        className="absolute top-[-200px] right-[-200px] w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(232,154,28,0.18) 0%, rgba(232,154,28,0) 70%)',
        }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(232,154,28,0.6) 50%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <nav
          className="flex gap-2.5 items-center font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-paper/55 font-medium mb-7 md:mb-9"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="text-paper/55 hover:text-accent no-underline transition-colors">
            Home
          </Link>
          <span className="opacity-40">/</span>
          <Link
            to="/#services"
            className="text-paper/55 hover:text-accent no-underline transition-colors"
          >
            Services
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-accent font-semibold">{service.name}</span>
        </nav>

        <div className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-accent font-semibold mb-5 before:content-[''] before:w-9 before:h-px before:bg-accent before:inline-block">
          <span className="text-paper/55 font-medium">Service № {service.num}</span> ·{' '}
          {service.tag}
        </div>

        <h1
          className="font-sans font-semibold uppercase text-paper m-0 max-w-[1080px] text-balance text-[28px] md:text-[44px] lg:text-[64px]"
          style={{ lineHeight: 0.98, letterSpacing: '-0.030em' }}
        >
          {service.hook[0]}
          <span
            className="block font-serif italic font-normal text-accent normal-case text-[24px] md:text-[36px] lg:text-[52px] mt-1.5"
            style={{ letterSpacing: '-0.020em' }}
          >
            {service.hook[1]}
          </span>
        </h1>

        <p className="font-sans text-[15px] md:text-[18px] leading-[1.55] text-paper/80 max-w-[780px] mt-7 text-pretty">
          {service.lede}
        </p>

        <div className="flex flex-wrap gap-2.5 md:gap-3.5 mt-7 md:mt-9">
          <Button variant="accent" href="/#contact">
            Request a Consultation →
          </Button>
          <Button
            variant="ghost"
            href="/#services"
            className="!bg-transparent !text-paper !border-paper/55 hover:!bg-paper hover:!text-ink hover:!border-paper"
          >
            Back to all services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-12 pt-6 md:pt-7 border-t border-paper/20 max-w-[780px]">
          {service.kpi.map(([v, l]) => (
            <div key={l}>
              <div
                className="font-sans font-semibold text-paper uppercase text-[20px] md:text-[26px]"
                style={{ letterSpacing: '-0.020em', lineHeight: 1 }}
              >
                {v}
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-paper/55 font-medium mt-2 leading-[1.4]">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
