import { useRef, useState } from 'react';
import { SERVICES } from '../data/services';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

type Status =
  | { state: 'idle' }
  | { state: 'loading' }
  | { state: 'success'; msg: string }
  | { state: 'error'; msg: string };

/**
 * Contact form — posts to Web3Forms.
 * Reads the access key from `VITE_WEB3FORMS_ACCESS_KEY` (Vite env var).
 *
 * Set it in `.env.local` (locally) and in the Vercel project settings
 * (production). The form fails closed with a clear error if the key is
 * missing or still placeholder.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === 'loading') return;
    const form = formRef.current;
    if (!form) return;

    if (!ACCESS_KEY || ACCESS_KEY === 'replace_with_your_web3forms_key') {
      setStatus({
        state: 'error',
        msg: 'Form not yet wired — set VITE_WEB3FORMS_ACCESS_KEY in .env.local.',
      });
      return;
    }

    const data = new FormData(form);
    if (data.get('botcheck')) return; // honeypot
    data.append('access_key', ACCESS_KEY);
    data.append('subject', 'New brief from geospecsolutions.com');
    data.append('from_name', 'GeoSpec Website');

    setStatus({ state: 'loading' });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = (await res.json()) as { success: boolean; message?: string };
      if (json.success) {
        setStatus({
          state: 'success',
          msg: 'Brief received — we will reply within one working day.',
        });
        form.reset();
      } else {
        setStatus({
          state: 'error',
          msg:
            json.message ||
            'Something went wrong. Please email us directly at geospecsolutions@gmail.com.',
        });
      }
    } catch {
      setStatus({
        state: 'error',
        msg: 'Network error. Please email us directly at geospecsolutions@gmail.com.',
      });
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="bg-ink text-paper border border-ink p-7 md:p-10 flex flex-col gap-5"
    >
      <h3
        className="font-sans text-[20px] md:text-[22px] font-semibold uppercase text-paper m-0"
        style={{ letterSpacing: '-0.015em' }}
      >
        Brief us on the project
      </h3>
      <p className="font-sans text-[14px] text-paper/65 leading-[1.55] m-0 -mt-2">
        An analyst reads every brief and responds within 48 hours.
      </p>

      {/* Honeypot — hidden field, real users will leave blank */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Field label="Name" name="name" type="text" placeholder="Full name" required />
        <Field label="Organisation" name="organisation" type="text" placeholder="Company / agency" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Field label="Email" name="email" type="email" placeholder="name@org.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="+254 …" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-paper/65 font-medium">
          Service of interest
        </label>
        <select
          name="service"
          defaultValue=""
          className="font-sans text-[14.5px] text-paper bg-paper/5 border border-paper/20 px-3.5 py-3 outline-none focus:border-accent focus:bg-paper/10 transition-colors"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Other / not sure</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-paper/65 font-medium">
          Tell us about the challenge
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Area of interest, target outcomes, indicative timeline…"
          className="font-sans text-[14.5px] text-paper bg-paper/5 border border-paper/20 px-3.5 py-3 outline-none focus:border-accent focus:bg-paper/10 transition-colors placeholder:text-paper/40 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status.state === 'loading'}
        className="inline-flex items-center justify-center gap-2 px-6 py-[15px] bg-accent border border-accent text-paper font-sans text-[13.5px] font-medium tracking-[0.04em] uppercase cursor-pointer transition-colors hover:bg-paper hover:text-ink hover:border-paper disabled:opacity-65 disabled:cursor-wait self-start"
      >
        {status.state === 'loading' ? 'Sending…' : 'Submit brief →'}
      </button>

      {status.state !== 'idle' && status.state !== 'loading' && (
        <div
          role="status"
          aria-live="polite"
          className={[
            'mt-1 px-4 py-3.5 font-mono text-[11.5px] tracking-[0.06em] uppercase font-medium leading-[1.5] border text-pretty',
            status.state === 'success'
              ? 'border-accent text-accent bg-accent/10'
              : 'border-paper/35 text-paper/85 bg-paper/5',
          ].join(' ')}
        >
          {status.msg}
        </div>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
}

function Field({ label, name, type, placeholder, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-paper/65 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="font-sans text-[14.5px] text-paper bg-paper/5 border border-paper/20 px-3.5 py-3 outline-none focus:border-accent focus:bg-paper/10 transition-colors placeholder:text-paper/40"
      />
    </div>
  );
}
