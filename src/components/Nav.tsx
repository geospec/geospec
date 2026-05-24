import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Top navigation. Floats over the hero (transparent background) and
 * sticks to a solid background once the user scrolls past 80px.
 *
 * Defaults assume the nav is on-dark (hero is dark forest green).
 * The `mode` prop forces a light or dark scheme for pages without a
 * dark hero behind it.
 */
export default function Nav({ mode = 'over-dark' }: { mode?: 'over-dark' | 'solid-dark' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mode === 'solid-dark') return undefined;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mode]);

  const isSolid = mode === 'solid-dark' || scrolled;

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-30 transition-colors duration-200',
        isSolid ? 'bg-ink/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14 flex items-center justify-between h-[72px] md:h-[82px]">
        <Link to="/" aria-label="GeoSpec Solutions home" className="inline-flex items-center">
          <img
            src="/assets/geospec-logo.png"
            alt="GeoSpec Solutions"
            className="block h-12 md:h-16 w-auto"
          />
        </Link>

        <div className="flex items-center gap-9 font-sans text-[12px] font-medium uppercase tracking-[0.14em]">
          <Link
            to="/#services"
            className="hidden md:inline text-paper/90 hover:text-accent no-underline transition-colors"
          >
            Services
          </Link>
          <Link
            to="/#why"
            className="hidden md:inline text-paper/90 hover:text-accent no-underline transition-colors"
          >
            Why GeoSpec
          </Link>
          <Link
            to="/#about"
            className="hidden md:inline text-paper/90 hover:text-accent no-underline transition-colors"
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-paper text-ink border border-paper px-[18px] py-[11px] text-[11.5px] font-medium tracking-[0.04em] uppercase no-underline hover:bg-accent hover:border-accent hover:text-paper transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </nav>
  );
}
