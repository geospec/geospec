import ContactForm from './ContactForm';
import Icon from './Icon';
import type { IconName } from './Icon';

const DETAILS: Array<{ icon: IconName; label: string; value: React.ReactNode }> = [
  { icon: 'mail', label: 'Email', value: 'geospecsolutions@gmail.com' },
  { icon: 'phone', label: 'Phone', value: '+254 700 123 456' },
  {
    icon: 'pin',
    label: 'Office',
    value: (
      <>
        Nairobi, Kenya
        <br />
        By appointment
      </>
    ),
  },
  {
    icon: 'clock',
    label: 'Response',
    value: (
      <>
        Within 48 hours
        <br />
        EAT, working days
      </>
    ),
  },
];

/** Contact: inverse section, details on the left and the brief form on the right. */
export default function Contact() {
  return (
    <section id="contact" data-theme="dark" className="section-y bg-background text-foreground">
      <div className="container-x">
        <div className="grid gap-16 items-start [grid-template-columns:repeat(auto-fit,minmax(min(440px,100%),1fr))]">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="h2 text-foreground">We read every brief</h2>
            <p className="mt-6 max-w-[520px] text-muted-foreground">
              Tell us what you need to see and where. We will reply within one working day with a
              scoped proposal, a named technical lead and a fixed fee.
            </p>
            <ul className="list-none p-0 mt-12 flex flex-col gap-6">
              {DETAILS.map((d) => (
                <li key={d.label} className="flex gap-4 items-start">
                  <div className="icon-tile">
                    <Icon name={d.icon} />
                  </div>
                  <div>
                    <p className="text-sm leading-snug font-medium text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-0.5">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
