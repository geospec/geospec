import { useRef, useState } from 'react';
import { SERVICES } from '../data/services';
import Icon from './Icon';

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
        msg: 'The form is not connected yet. Set VITE_WEB3FORMS_ACCESS_KEY in .env.local.',
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
          msg: 'We will be in touch shortly.',
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
        msg: 'A network error occurred. Please email us directly at geospecsolutions@gmail.com.',
      });
    }
  }

  const busy = status.state === 'loading';

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="p-8 border border-border rounded-lg"
    >
      <h3 className="text-xl font-semibold leading-snug">Send us a brief</h3>

      {/* Honeypot: hidden field, real users leave it blank */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-6 flex flex-col gap-6">
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr))]">
          <Field id="f-name" label="Name" name="name" type="text" placeholder="Full name" autoComplete="name" required />
          <Field id="f-org" label="Organisation" name="organisation" type="text" placeholder="Company or agency" autoComplete="organization" />
        </div>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr))]">
          <Field id="f-email" label="Email" name="email" type="email" placeholder="name@org.com" autoComplete="email" required />
          <Field id="f-phone" label="Phone" name="phone" type="tel" placeholder="+254" autoComplete="tel" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-service" className="text-sm leading-snug font-medium">
            Service of interest
          </label>
          <select id="f-service" name="service" defaultValue="" className="field">
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Other / not sure</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-message" className="text-sm leading-snug font-medium">
            Message
          </label>
          <textarea
            id="f-message"
            name="message"
            rows={4}
            required
            placeholder="Area of interest, target outcomes, indicative timeline"
            className="field"
          />
        </div>

        <button type="submit" disabled={busy} className="btn btn-default btn-lg w-full">
          {busy ? 'Sending' : 'Submit brief'}
        </button>

        {status.state === 'success' && (
          <div
            role="status"
            className="flex gap-3 items-start p-4 bg-success-subtle border border-border rounded-lg"
          >
            <Icon name="check" className="flex-none mt-0.5 text-success" />
            <div>
              <p className="text-sm leading-snug font-semibold text-success">Brief received</p>
              <p className="mt-0.5 text-sm leading-normal text-muted-foreground">{status.msg}</p>
            </div>
          </div>
        )}
        {status.state === 'error' && (
          <div
            role="alert"
            className="p-4 border border-border rounded-lg text-sm leading-normal text-foreground"
          >
            {status.msg}
          </div>
        )}
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

function Field({ id, label, name, type, placeholder, autoComplete, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm leading-snug font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="field"
      />
    </div>
  );
}
