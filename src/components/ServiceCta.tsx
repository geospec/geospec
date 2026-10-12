import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import Button from './Button';
import Icon from './Icon';

/**
 * Bottom of a service page: consultation CTA, previous/next pager and the
 * list of all services.
 */
export default function ServiceCta({ slug }: { slug: string }) {
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const current = SERVICES[idx];
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];
  const topic = current.name === 'GEOINT' ? current.name : current.name.toLowerCase();

  return (
    <>
      <section className="bg-muted py-16 border-y border-border">
        <div className="container-x">
          <div className="grid gap-x-16 gap-y-8 items-center [grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr))]">
            <div>
              <p className="eyebrow">Take the next step</p>
              <h2 className="h2">Talk to an analyst about {topic}</h2>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-muted-foreground">
                Tell us your challenge. Our analysts will scope a solution and respond within 48
                hours.
              </p>
              <Button to="/#contact" large>
                Request a consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x">
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
            <Link to={`/services/${prev.slug}`} className="pager-card">
              <span className="inline-flex items-center gap-2 text-sm leading-snug text-muted-foreground">
                <Icon name="arrowL" size={16} />
                Previous service
              </span>
              <span className="text-xl font-semibold leading-snug">{prev.name}</span>
            </Link>
            <Link to={`/services/${next.slug}`} className="pager-card items-end text-right">
              <span className="inline-flex items-center gap-2 text-sm leading-snug text-muted-foreground">
                Next service
                <Icon name="arrowR" size={16} />
              </span>
              <span className="text-xl font-semibold leading-snug">{next.name}</span>
            </Link>
          </div>

          <h2 className="mt-16 text-xl font-semibold leading-snug">All services</h2>
          <div
            className="svc-grid mt-6 grid gap-3"
            style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
          >
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="all-link"
                aria-current={s.slug === slug ? 'page' : undefined}
              >
                <span className="tabular-nums text-muted-foreground">{s.num}</span>
                <span>{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
