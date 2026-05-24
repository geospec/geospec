/**
 * "What we do" — left column has an eyebrow + title + photo, right
 * column has 3 paragraphs of body copy and three numbered points.
 */
export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-32 lg:py-40 border-b border-ink-line">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left column — eyebrow, title, photo */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-20">
            <div>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent font-semibold mb-6">
                § 01 · What we do
              </div>
              <h2
                className="font-sans font-semibold uppercase text-ink m-0 text-balance text-[30px] md:text-[48px] lg:text-[60px]"
                style={{ lineHeight: 1.02, letterSpacing: '-0.028em' }}
              >
                We turn location data into{' '}
                <span
                  className="font-serif italic font-normal text-accent"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  strategic advantage
                </span>
                .
              </h2>
            </div>
            <div className="relative h-[280px] lg:h-[440px] overflow-hidden border border-ink-line">
              <img
                src="/uploads/mustafa-omar-Zkao_QBEjk8-unsplash.jpg"
                alt="Nairobi at night — operational across Africa"
                className="block w-full h-full object-cover"
                style={{ objectPosition: 'center 42%' }}
              />
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
            </div>
          </div>

          {/* Right column — prose + points */}
          <div>
            <p className="font-sans text-[15.5px] md:text-[17px] leading-[1.65] text-ink-body m-0 mb-5 text-pretty">
              <strong className="text-ink font-semibold">GeoSpec Solutions</strong> is a geospatial
              intelligence consultancy that combines cutting-edge satellite imagery, spatial data
              engineering and analytical expertise to deliver actionable intelligence that drives
              better decisions — faster.
            </p>
            <p className="font-sans text-[15.5px] md:text-[17px] leading-[1.65] text-ink-body m-0 mb-5 text-pretty">
              Whether you are managing land portfolios, monitoring environmental compliance,
              planning infrastructure or seeking market expansion, our team provides the rigorous
              spatial analysis your organisation needs to act with confidence.
            </p>
            <p className="font-sans text-[15.5px] md:text-[17px] leading-[1.65] text-ink-body m-0 mb-5 text-pretty">
              We work with clients across the public and private sector — including government
              ministries, development finance institutions, NGOs, agribusinesses and real estate
              developers. Every engagement is tailored, evidence-based and built around outcomes
              that matter to you.
            </p>

            <Points />
          </div>
        </div>
      </div>
    </section>
  );
}

const POINTS: Array<[string, string, string]> = [
  [
    '01',
    'Pan-African reach',
    'Projects delivered across East, West and Southern Africa — with the local data fluency the work demands.',
  ],
  [
    '02',
    'End-to-end delivery',
    'From raw satellite data to decision-ready intelligence products. One team, one accountable lead, fixed scope.',
  ],
  [
    '03',
    'Multi-sector expertise',
    'Agriculture, environment, security, planning and beyond — we bring the right analytical lens for the brief.',
  ],
];

function Points() {
  return (
    <div>
      {POINTS.map(([ix, h, p], i) => (
        <div
          key={ix}
          className={[
            'py-5 md:py-6 grid grid-cols-[32px_1fr] md:grid-cols-[48px_1fr] gap-3.5 md:gap-4 items-start',
            'border-t border-ink-line',
            i === POINTS.length - 1 ? 'border-b' : '',
          ].join(' ')}
        >
          <div className="font-mono text-[11px] md:text-[12px] tracking-[0.10em] uppercase text-accent font-semibold pt-1">
            — {ix}
          </div>
          <div>
            <h5 className="font-sans text-[16px] md:text-[18px] font-semibold uppercase text-ink m-0 mb-1.5">
              {h}
            </h5>
            <p className="font-sans text-[14.5px] md:text-[15px] m-0 text-ink-body leading-[1.6]">
              {p}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
