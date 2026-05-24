import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On every route change (including arrivals with `#anchor`), scroll the
 * target into view AFTER React has painted. Solves the "deep link to
 * #contact loads the page at the top" issue that plain `href="/#contact"`
 * exhibits on SPAs.
 */
export default function ScrollToHash(): null {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick for the target route to mount before measuring positions.
      const id = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
          }
        });
      });
      return () => window.cancelAnimationFrame(id);
    }
    // Plain route changes — scroll to top.
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    return undefined;
  }, [pathname, hash]);

  return null;
}
