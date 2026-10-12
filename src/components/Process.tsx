const STEPS: Array<[string, string]> = [
  ['Brief', 'Tell us what you need to see and where, and the decision it has to support.'],
  [
    'Scope',
    'Within 48 hours our analysts reply with a scoped proposal, a named technical lead and a fixed fee.',
  ],
  [
    'Analyse',
    'Satellite imagery and spatial data are processed and modelled around your operational context.',
  ],
  [
    'Deliver',
    'Decision-ready intelligence, formatted for the people and systems that will act on it.',
  ],
];

/** "How we work": four-step sequence over the topographic pattern. */
export default function Process() {
  return (
    <section id="process" className="section-y pattern-bg bg-background">
      <div className="container-x">
        <div className="max-w-[720px]">
          <p className="eyebrow">How we work</p>
          <h2 className="h2">From brief to decision in four steps</h2>
          <p className="mt-4 text-muted-foreground">
            One team, one accountable lead, fixed scope. Every engagement follows the same path, so
            you always know what comes next.
          </p>
        </div>
        <ol className="list-none p-0 mt-16 grid gap-x-8 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))]">
          {STEPS.map(([title, text], i) => (
            <li key={title}>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex-none w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold tabular-nums"
                >
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && <span className="step-line" aria-hidden="true" />}
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-snug">
                <span className="sr-only">Step {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
