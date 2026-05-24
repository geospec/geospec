import SectionHead from './SectionHead';

interface TechCol {
  title: string;
  items: Array<[string, string]>;
}

const TECH: TechCol[] = [
  {
    title: 'Satellite platforms',
    items: [
      ['Sentinel-2', '10 m · multi-spectral'],
      ['Landsat 8 / 9', '15–30 m · open archive'],
      ['WorldView-3', '0.3 m · tasking'],
      ['Planet Labs', 'Daily · 3 m revisit'],
      ['SPOT-7', '1.5 m · regional'],
    ],
  },
  {
    title: 'Processing stack',
    items: [
      ['QGIS / ArcGIS Pro', 'Desktop GIS'],
      ['Google Earth Engine', 'Planetary-scale'],
      ['SNAP Toolbox', 'Sentinel processing'],
      ['ENVI / ERDAS', 'Image analysis'],
      ['Python / R', 'Custom pipelines'],
    ],
  },
  {
    title: 'Data standards',
    items: [
      ['STAC Catalogue', 'Discoverable archives'],
      ['OGC WMS / WFS', 'Interoperable services'],
      ['GeoTIFF / COG', 'Cloud-optimised'],
      ['GeoJSON / KML', 'Vector exchange'],
      ['ISO 19115', 'Metadata standard'],
    ],
  },
  {
    title: 'Delivery methods',
    items: [
      ['Cloud API', 'Streaming endpoints'],
      ['Secure FTP', 'Bulk transfer'],
      ['Web dashboard', 'Hosted views'],
      ['ArcGIS Online', 'Esri-native'],
      ['On-premise', 'Air-gapped install'],
    ],
  },
];

/**
 * Tech stack reference on a dark forest band. Four columns, dense lists.
 */
export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-20 md:py-32 lg:py-36 bg-ink text-paper border-b border-paper/10"
    >
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <SectionHead
          onDark
          ixLabel="§ 04 · Technology"
          ixLead={
            <>
              Our data
              <br />
              ecosystem
            </>
          }
          title={
            <>
              An <span className="font-serif italic font-normal text-accent">open, modern stack</span>.
            </>
          }
          lead="Leading constellations, ground sensors and open-data platforms — processed through one cloud pipeline. No lock-in, no proprietary mystery box. Everything we deliver is built on standards your engineers can verify and your IT team can integrate. If you live in Esri, we ship to Esri. If you live in QGIS, same."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15 border border-paper/15">
          {TECH.map((col) => (
            <div key={col.title} className="bg-ink p-7 flex flex-col gap-4">
              <h4 className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-accent m-0 mb-1 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {col.items.map(([n, m]) => (
                  <li
                    key={n}
                    className="font-sans text-[15px] md:text-[16px] font-medium text-paper leading-[1.4] pb-3 border-b border-paper/10 last:border-b-0 last:pb-0"
                    style={{ letterSpacing: '-0.005em' }}
                  >
                    {n}
                    <span className="block font-mono text-[11px] tracking-[0.08em] text-paper/55 uppercase mt-1 font-normal">
                      {m}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
