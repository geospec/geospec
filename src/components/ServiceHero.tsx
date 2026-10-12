import { Link } from 'react-router-dom';
import type { ServicePage } from '../types';
import Button from './Button';
import { ILLUSTRATIONS } from '../data/illustrations';

/**
 * Service page hero: breadcrumb, eyebrow, two-line hook, lede, CTAs, a
 * per-service SVG illustration and three key-figure tiles.
 */
export default function ServiceHero({ service }: { service: ServicePage }) {
  const art = ILLUSTRATIONS[service.slug];

  return (
    <section className="bg-background pt-10 pb-20">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="text-sm leading-snug text-muted-foreground">
          <ol className="list-none m-0 p-0 flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <Link to="/" className="text-muted-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/#services" className="text-muted-foreground">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-foreground">
              {service.name}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid gap-x-16 gap-y-12 items-center [grid-template-columns:repeat(auto-fit,minmax(min(460px,100%),1fr))]">
          <div>
            <p className="eyebrow">
              Service {service.num} · {service.tag}
            </p>
            <h1
              className="mt-4 font-bold"
              style={{
                fontSize: 'clamp(2rem, 4.2vw, 3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              {service.hook[0]} <span className="text-primary">{service.hook[1]}</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              {service.lede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/#contact" large>
                Request a consultation
              </Button>
              <Button to="/#services" variant="outline" large>
                Back to all services
              </Button>
            </div>
          </div>

          {art && (
            <figure
              className="m-0 overflow-hidden rounded-lg border border-border shadow-sm"
              style={{ background: 'var(--il-bg)' }}
              dangerouslySetInnerHTML={{ __html: art }}
            />
          )}
        </div>

        <dl className="m-0 mt-14 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr))]">
          {service.kpi.map(([value, label]) => (
            <div key={label} className="p-4 border border-border rounded-lg bg-card shadow-sm">
              <dd className="m-0 text-xl font-semibold leading-tight tracking-tight">{value}</dd>
              <dt className="mt-1 text-sm leading-snug text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
