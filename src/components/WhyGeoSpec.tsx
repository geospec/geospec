import SectionHead from './SectionHead';

const PILLARS: Array<[string, string, string]> = [
  [
    '01',
    'Context-driven analysis',
    'We do not deliver data — we deliver answers. Every product is framed around your operational context, your constraints and the decisions you need to make.',
  ],
  [
    '02',
    'Africa-native expertise',
    'Our analysts understand the data landscape across the continent — its gaps, its nuances and its opportunities. We do not apply generic global frameworks to African problems.',
  ],
  [
    '03',
    'Scalable delivery',
    'From rapid-turnaround intelligence briefs to long-term monitoring programmes, our delivery model adapts to your timeline, budget and technical environment.',
  ],
];

/**
 * Three-pillar differentiator section on a dark forest background.
 */
export default function WhyGeoSpec() {
  return (
    <section
      id="why"
      className="py-20 md:py-32 lg:py-36 bg-ink-deep text-paper border-b border-paper/10"
    >
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <SectionHead
          onDark
          ixLabel="§ 03 · Why GeoSpec"
          ixLead={
            <>
              Three reasons
              <br />
              clients stay.
            </>
          }
          title={
            <>
              The geospatial partner that works like a{' '}
              <span className="font-serif italic font-normal text-accent">member of your team</span>
              .
            </>
          }
          lead="We are not a data vendor and we are not a generic GIS shop. We are the team that sits between the imagery and the decision — close to the brief, accountable for the answer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
          {PILLARS.map(([ix, h, p]) => (
            <div
              key={ix}
              className="bg-ink-deep p-7 md:p-11 flex flex-col gap-5 min-h-[280px] md:min-h-[340px]"
            >
              <div
                className="font-serif italic font-normal text-accent opacity-40"
                style={{ fontSize: '48px', lineHeight: 1, letterSpacing: '-0.02em' }}
              >
                {ix}
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent font-semibold flex items-center gap-2.5 before:content-[''] before:w-9 before:h-px before:bg-accent before:inline-block">
                Pillar {ix}
              </div>
              <h4
                className="font-sans text-[20px] md:text-[24px] font-semibold uppercase text-paper m-0"
                style={{ letterSpacing: '-0.018em', lineHeight: 1.15 }}
              >
                {h}
              </h4>
              <p className="font-sans text-[15px] leading-[1.6] text-paper/75 m-0 flex-1 text-pretty">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
