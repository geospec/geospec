import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';

/** Site-wide footer (inverse theme): brand, services, company links, legal line. */
export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-background text-foreground border-t border-border">
      <div className="container-x pt-16 pb-8">
        <div className="grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))]">
          <div className="max-w-[420px] flex flex-col items-start gap-4">
            <img
              src="/assets/geospec-logo.png"
              alt="GeoSpec, Geospatial in Space Economy"
              className="block h-24 w-auto"
            />
            <p className="text-xl font-semibold leading-snug text-foreground">
              Precision intelligence. Decisive action.
            </p>
            <p className="text-sm leading-normal text-muted-foreground">
              GeoSpec Solutions is a geospatial intelligence and spatial data consultancy. We serve
              government, private sector and development sector clients with advanced satellite
              analytics, spatial modelling and GEOINT capabilities.
            </p>
          </div>

          <nav aria-label="Footer services" className="flex flex-col gap-3 items-start">
            <h2 className="text-sm font-semibold leading-snug text-eyebrow">Services</h2>
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="foot-link">
                {s.name}
              </Link>
            ))}
          </nav>

          <nav aria-label="Footer" className="flex flex-col gap-3 items-start">
            <h2 className="text-sm font-semibold leading-snug text-eyebrow">Company</h2>
            <Link to="/#about" className="foot-link">
              About GeoSpec
            </Link>
            <Link to="/#why" className="foot-link">
              Our approach
            </Link>
            <Link to="/#process" className="foot-link">
              How we work
            </Link>
            <Link to="/#contact" className="foot-link">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs font-medium tracking-[0.01em] text-muted-foreground">
          <span>© 2026 GeoSpec Solutions Ltd. All rights reserved.</span>
          <span>geospecsolutions@gmail.com · Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}
