import Icon from './Icon';
import type { IconName } from './Icon';

const REASONS: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: 'target',
    title: 'Context-driven analysis',
    text: 'We do not deliver data, we deliver answers. Every product is framed around your operational context, your constraints and the decisions you need to make.',
  },
  {
    icon: 'globe',
    title: 'Africa-native expertise',
    text: 'Our analysts understand the data landscape across the continent: its gaps, its nuances and its opportunities. We do not apply generic global frameworks to African problems.',
  },
  {
    icon: 'layers',
    title: 'Scalable delivery',
    text: 'From rapid-turnaround intelligence briefs to long-term monitoring programmes, our delivery model adapts to your timeline, budget and technical environment.',
  },
];

/** "Why GeoSpec": three differentiators. */
export default function WhyGeoSpec() {
  return (
    <section id="why" className="section-y bg-muted border-y border-border">
      <div className="container-x">
        <div className="max-w-[720px]">
          <p className="eyebrow">Why GeoSpec</p>
          <h2 className="h2">The geospatial partner that works like a member of your team</h2>
          <p className="mt-4 text-muted-foreground">
            We are not a data vendor and we are not a generic GIS shop. We are the team that sits
            between the imagery and the decision, close to the brief, accountable for the answer.
          </p>
        </div>
        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
          {REASONS.map((r) => (
            <article key={r.title} className="card">
              <div className="icon-tile">
                <Icon name={r.icon} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-snug">{r.title}</h3>
                <p className="text-sm leading-normal text-muted-foreground">{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
