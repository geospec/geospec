import ContactForm from './ContactForm';

/**
 * Contact section — left column has the header + Email/Phone/Office/Response,
 * right column has the form.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 lg:py-36 bg-paper text-ink">
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2
              className="font-sans font-semibold uppercase text-ink m-0 mb-5 text-balance text-[26px] md:text-[42px] lg:text-[54px]"
              style={{ lineHeight: 1.0, letterSpacing: '-0.030em' }}
            >
              Get in <span className="font-serif italic font-normal text-accent">touch</span> —
              <br />
              we read every brief.
            </h2>
            <p className="font-sans text-[15.5px] md:text-[17px] leading-[1.55] text-ink-body max-w-[520px]">
              Tell us what you need to see and where. We will reply within one working day with a
              scoped proposal, a named technical lead and a fixed fee.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-y-8 gap-x-6 mt-10 md:mt-12 border-t border-ink-line pt-8">
              <Info label="Email" value="geospecsolutions@gmail.com" />
              <Info label="Phone" value="+254 700 123 456" />
              <Info label="Office" value={<>Nairobi, Kenya<br />By appointment</>} />
              <Info label="Response" value={<>Within 48 hours<br />EAT, working days</>} />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <h5 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-body font-semibold m-0 mb-2.5">
        {label}
      </h5>
      <div className="font-sans text-[16px] md:text-[17px] leading-[1.5] text-ink font-medium">
        {value}
      </div>
    </div>
  );
}
