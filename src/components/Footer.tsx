import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';

/**
 * Site-wide footer — 4 columns (brand + 3 link groups) on desktop,
 * stacked on mobile. Same content on every page.
 */
export default function Footer() {
  return (
    <footer className="bg-ink-deep text-paper pt-16 md:pt-24 pb-8">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-9 lg:gap-12 pb-12 md:pb-18 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
            <img
              src="/assets/geospec-logo.png"
              alt="GeoSpec Solutions"
              className="block h-20 md:h-24 w-auto self-start -ml-2"
            />
            <p className="font-serif italic text-[20px] text-accent leading-tight m-0">
              Precision intelligence. Decisive action.
            </p>
            <p className="font-sans text-[14.5px] text-paper/65 leading-relaxed max-w-[380px] m-0">
              GeoSpec Solutions is a geospatial intelligence and spatial data consultancy. We serve
              government, private sector and development sector clients with advanced satellite
              analytics, spatial modelling and GEOINT capabilities.
            </p>
          </div>

          <FooterColumn title="Services">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block text-paper text-[14.5px] py-1.5 opacity-85 hover:opacity-100 hover:text-accent no-underline transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink to="/#about">About GeoSpec</FooterLink>
            <FooterLink to="/#why">Our Approach</FooterLink>
            <FooterLink to="#">Case Studies</FooterLink>
            <FooterLink to="#">Careers</FooterLink>
            <FooterLink to="/#contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink to="#">Privacy Policy</FooterLink>
            <FooterLink to="#">Terms of Engagement</FooterLink>
            <FooterLink to="#">Data Use Policy</FooterLink>
          </FooterColumn>
        </div>

        <div className="pt-7 flex flex-col md:flex-row md:justify-between md:items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-paper/55">
          <span>© 2026 GeoSpec Solutions Ltd. All rights reserved.</span>
          <span>geospecsolutions@gmail.com · Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h5 className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper/55 font-semibold m-0 mb-4">
        {title}
      </h5>
      {children}
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block text-paper text-[14.5px] py-1.5 opacity-85 hover:opacity-100 hover:text-accent no-underline transition-colors"
    >
      {children}
    </Link>
  );
}
