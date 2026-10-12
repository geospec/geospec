import type { Config } from 'tailwindcss';

/**
 * Tailwind config. Colours resolve to the CSS variables defined in
 * `src/index.css`, so the light/dark theme flips without `dark:` variants.
 * Design tokens come from the GeoSpec design system (forest green primary,
 * gold accent for graphics only, Inter).
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
        },
        secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
        accent: { DEFAULT: 'var(--accent)', foreground: 'var(--accent-foreground)' },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        link: 'var(--link)',
        eyebrow: 'var(--eyebrow)',
        success: { DEFAULT: 'var(--success)', subtle: 'var(--success-subtle)' },
        forest: {
          50: '#f3f8f2',
          100: '#e8f1e4',
          200: '#cee1c7',
          300: '#a8c99c',
          600: '#387c26',
          700: '#336720',
          800: '#29501b',
          900: '#1e3715',
          950: '#101b0b',
        },
        gold: { 300: '#f0c36d', 500: '#db8a07' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        md: '4px',
        lg: '6px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(17,31,24,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
