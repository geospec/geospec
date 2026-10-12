import { Link } from 'react-router-dom';
import Icon from './Icon';
import type { IconName } from './Icon';
import { SERVICES } from '../data/services';

/**
 * Eight-card grid linking to /services/<slug>. The whole card is clickable
 * (the "Learn more" link stretches over it) while keeping one link per card
 * for keyboard and screen-reader users.
 */
export default function Services() {
  return (
    <section id="services" className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-[720px]">
          <p className="eyebrow">Our services</p>
          <h2 className="h2">Precision solutions across the full geospatial spectrum</h2>
          <p className="mt-4 text-muted-foreground">
            From satellite imagery acquisition through advanced spatial modelling and intelligence
            products, GeoSpec delivers the full value chain under one roof. Each engagement is
            tailored, evidence-based and built around the outcomes that matter to you.
          </p>
        </div>
        <div className="svc-grid mt-12 grid gap-6" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
          {SERVICES.map((s) => (
            <article key={s.slug} className="card">
              <div className="icon-tile">
                <Icon name={s.slug as IconName} />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold leading-snug">{s.name}</h3>
                <p className="text-sm leading-normal text-muted-foreground">{s.summary}</p>
                <Link
                  to={`/services/${s.slug}`}
                  className="stretch card-more mt-auto self-start pt-2"
                  aria-label={`Learn more about ${s.name === 'GEOINT' ? s.name : s.name.toLowerCase()}`}
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
