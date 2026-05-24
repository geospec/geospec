import type { Config } from 'tailwindcss';

/**
 * Tailwind config — palette + fonts mirror the brand tokens.
 * `ink` = deep forest green (from the GeoSpec logo)
 * `paper` = cream / off-white
 * `accent` = amber (orbit ring + satellite in the logo)
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E3D1A',
          deep: '#072613',
          line: 'rgba(14,61,26,0.16)',
          lineSoft: 'rgba(14,61,26,0.07)',
          body: 'rgba(14,61,26,0.72)',
        },
        paper: {
          DEFAULT: '#F4EFE3',
          deep: '#E8E1CE',
          line: 'rgba(244,239,227,0.20)',
          lineSoft: 'rgba(244,239,227,0.10)',
          body: 'rgba(244,239,227,0.72)',
        },
        accent: {
          DEFAULT: '#E89A1C',
          deep: '#C57F0F',
        },
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        // Used a lot in headlines — match the bespoke values from the prototype
        tightest: '-0.038em',
        'tight-30': '-0.030em',
        'tight-28': '-0.028em',
        'tight-25': '-0.025em',
        'tight-18': '-0.018em',
        'tight-12': '-0.012em',
        'mono-wide': '0.14em',
        'mono-wider': '0.18em',
      },
      maxWidth: {
        wrap: '1360px',
      },
      animation: {
        blink: 'blink 1.6s infinite',
      },
      keyframes: {
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.30' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
