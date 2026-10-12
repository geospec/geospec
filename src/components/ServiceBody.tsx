import type { ServicePage } from '../types';
import Icon from './Icon';

/** "What we deliver": prose on the left, deliverables checklist on the right. */
export default function ServiceBody({ service }: { service: ServicePage }) {
  return (
    <section className="section-y bg-muted border-y border-border">
      <div className="container-x">
        <div className="grid gap-x-16 gap-y-12 items-start [grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr))]">
          <div>
            <p className="eyebrow">What we deliver</p>
            <h2 className="h2">{service.name}, built around your decision</h2>
            {service.prose.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="p-8 bg-card text-card-foreground border border-border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold leading-snug">What you receive</h3>
            <ul className="list-none p-0 mt-6 flex flex-col gap-4">
              {service.delivers.map((d) => (
                <li key={d} className="flex gap-3 items-start">
                  <Icon name="check" className="flex-none mt-0.5 text-success" />
                  <span className="text-sm leading-normal">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
