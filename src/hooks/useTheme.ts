import { useCallback, useEffect, useState } from 'react';

const KEY = 'geospec-theme';

function read(): boolean {
  if (typeof document === 'undefined') return false;
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

/**
 * Site-wide light/dark theme. The theme lives on <html data-theme>, the
 * choice is remembered in localStorage (guarded: storage can be blocked).
 */
export function useTheme(): { dark: boolean; toggle: () => void } {
  const [dark, setDark] = useState<boolean>(read);

  useEffect(() => {
    setDark(read());
  }, []);

  const toggle = useCallback(() => {
    const next = !read();
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    try {
      window.localStorage.setItem(KEY, next ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
    setDark(next);
  }, []);

  return { dark, toggle };
}
