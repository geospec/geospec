import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from './Icon';
import { useTheme } from '../hooks/useTheme';

const LINKS: Array<[string, string]> = [
  ['About', '/#about'],
  ['Services', '/#services'],
  ['Why GeoSpec', '/#why'],
  ['How we work', '/#process'],
];

/**
 * Sticky site header: logo, section links, dark-mode switch, primary CTA.
 * Collapses to a menu button below 768px.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container-x h-16 flex items-center gap-8">
        <Link to="/" aria-label="GeoSpec Solutions, home" className="flex items-center no-underline">
          <img
            src="/assets/geospec-logo.png"
            alt="GeoSpec Solutions"
            className="block h-[52px] w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:flex gap-1 flex-1">
          {LINKS.map(([label, to]) => (
            <Link key={to} to={to} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          role="switch"
          aria-checked={dark}
          aria-label="Dark mode"
          onClick={toggle}
          className="switch ml-auto md:ml-0"
        >
          <span className="switch-thumb">
            <Icon name={dark ? 'moon' : 'sun'} size={14} strokeWidth={2} />
          </span>
        </button>

        <Link to="/#contact" className="btn btn-default hidden md:inline-flex -ml-4">
          Get in touch
        </Link>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="btn btn-ghost md:hidden w-11 h-11 p-0 -ml-4"
        >
          <Icon name={open ? 'x' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Main"
          className="md:hidden flex flex-col gap-1 p-4 border-t border-border bg-background"
        >
          {LINKS.map(([label, to]) => (
            <Link key={to} to={to} className="nav-link h-11" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="btn btn-default btn-lg mt-2"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
