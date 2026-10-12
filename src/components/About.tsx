import Icon from './Icon';
import type { IconName } from './Icon';

const POINTS: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: 'globe',
    title: 'Pan-African reach',
    text: 'Projects delivered across East, West and Southern Africa, with the local data fluency the work demands.',
  },
  {
    icon: 'layers',
    title: 'End-to-end delivery',
    text: 'From raw satellite data to decision-ready intelligence products. One team, one accountable lead, fixed scope.',
  },
  {
    icon: 'grid',
    title: 'Multi-sector expertise',
    text: 'Agriculture, environment, security, planning and beyond. We bring the right analytical lens for the brief.',
  },
];

/** "What we do": photo with coordinates, company copy and three proof points. */
export default function About() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-x">
        <div className="grid gap-16 items-start [grid-template-columns:repeat(auto-fit,minmax(min(440px,100%),1fr))]">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="h2">We turn location data into strategic advantage</h2>
            <figure className="mt-8">
              <img
                src="/uploads/nairobi.jpg"
                alt="Nairobi at night, operational across Africa"
                className="block w-full h-[400px] object-cover border border-border rounded-lg"
                style={{ objectPosition: 'center 42%' }}
              />
              <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs font-medium tracking-[0.01em] text-muted-foreground">
                <span>Nairobi, Kenya</span>
                <span className="font-mono font-normal">-1.2921, 36.8219</span>
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="text-muted-foreground">
              <strong className="font-semibold text-foreground">GeoSpec Solutions</strong> is a
              geospatial intelligence consultancy that combines cutting-edge satellite imagery,
              spatial data engineering and analytical expertise to deliver actionable intelligence
              that drives better decisions, faster.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you are managing land portfolios, monitoring environmental compliance,
              planning infrastructure or seeking market expansion, our team provides the rigorous
              spatial analysis your organisation needs to act with confidence.
            </p>
            <p className="mt-4 text-muted-foreground">
              We work with clients across the public and private sector, including government
              ministries, development finance institutions, NGOs, agribusinesses and real estate
              developers. Every engagement is tailored, evidence-based and built around outcomes
              that matter to you.
            </p>
            <ul className="list-none p-0 mt-10 flex flex-col border-b border-border">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4 py-6 border-t border-border">
                  <div className="icon-tile">
                    <Icon name={p.icon} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-normal">{p.title}</h3>
                    <p className="mt-1 text-sm leading-normal text-muted-foreground">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
