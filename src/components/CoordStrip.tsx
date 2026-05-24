/**
 * Five-column data strip beneath the hero. Communicates posture in
 * a high-density, instrument-readout aesthetic.
 */
export default function CoordStrip() {
  const cols: Array<[string, React.ReactNode]> = [
    ['Reach', 'Pan-African'],
    [
      'Sectors',
      <>
        <span className="font-serif italic text-accent font-normal">Public</span> + Private
      </>,
    ],
    ['Delivery', 'End-to-end'],
    [
      'Imagery',
      <>
        <span className="font-serif italic text-accent font-normal">Sub-metre</span> capable
      </>,
    ],
    [
      'Response',
      <>
        <span className="font-serif italic text-accent font-normal">48 h</span> scoping
      </>,
    ],
  ];

  return (
    <div className="bg-ink py-9 md:py-9 border-b border-paper/10">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
          {cols.map(([k, v], i) => (
            <div
              key={k}
              className={[
                'flex flex-col gap-1.5 pr-0 md:pr-8',
                'pb-3.5 md:pb-0 border-b md:border-b-0 border-paper/10',
                i < cols.length - 1 ? 'md:border-r md:border-paper/10' : '',
                i >= cols.length - 2 ? 'last:border-b-0 md:border-b-0' : '',
              ].join(' ')}
            >
              <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-paper/55 font-medium">
                {k}
              </span>
              <span
                className="font-sans font-semibold text-paper tabular-nums uppercase text-[18px] md:text-[22px]"
                style={{ letterSpacing: '-0.018em' }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
