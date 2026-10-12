import { useState } from 'react';
import type { ServicePage } from '../types';
import Icon from './Icon';

/** FAQ accordion: one item open at a time, first open by default. */
export default function ServiceFaq({ service }: { service: ServicePage }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-[720px]">
          <p className="eyebrow">Questions</p>
          <h2 className="h2">Frequently asked questions</h2>
        </div>
        <div className="mt-10 max-w-[800px] border-b border-border">
          {service.faq.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-t border-border">
                <h3 className="text-base">
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    className="faq-btn"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{q}</span>
                    <Icon name={isOpen ? 'chevUp' : 'chevDown'} className="flex-none" />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="pb-5 max-w-[680px] text-muted-foreground"
                  >
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
