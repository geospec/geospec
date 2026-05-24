import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import SectionHead from './SectionHead';

/**
 * Eight-card grid linking to /services/<slug>. Each card is a Link so
 * the whole thing is clickable, not just the "Learn more" line.
 */
export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-32 lg:py-36 border-b border-ink-line">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <SectionHead
          ixLabel="§ 02 · Our services"
          ixLead={
            <>
              The full geospatial
              <br />
              spectrum
            </>
          }
          title={
            <>
              Precision solutions across the{' '}
              <span className="font-serif italic font-normal text-accent">
                full geospatial spectrum
              </span>
              .
            </>
          }
          lead="From satellite imagery acquisition through advanced spatial modelling and intelligence products, GeoSpec delivers the full value chain under one roof. Each engagement is tailored, evidence-based and built around the outcomes that matter to you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="bg-paper p-7 md:p-7 flex flex-col gap-3 min-h-[260px] md:min-h-[300px] transition-colors hover:bg-paper-deep group relative no-underline text-inherit"
            >
              <div className="flex justify-between font-mono text-[11px] tracking-[0.10em] uppercase text-ink-body font-medium">
                <span>— № {s.num}</span>
                <span className="transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                  ↗
                </span>
              </div>
              <h3
                className="font-sans text-[18px] md:text-[21px] font-semibold uppercase text-ink m-0 mt-2 mb-1 group-hover:text-accent transition-colors"
                style={{ letterSpacing: '-0.012em', lineHeight: 1.18 }}
              >
                {s.name}
              </h3>
              <p className="font-sans text-[14px] text-ink-body leading-[1.6] flex-1 m-0">
                {s.summary}
              </p>
              <div className="font-mono text-[11px] tracking-[0.10em] uppercase text-ink-body mt-3 border-t border-ink-lineSoft pt-3.5 font-medium">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
