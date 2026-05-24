# GeoSpec Solutions — Marketing Site

Production-ready Vite + React + TypeScript build of the GeoSpec marketing site.
Tailwind CSS for styling, React Router for clean URLs, react-helmet-async for
per-page SEO, Web3Forms for the contact form, Vitest for tests.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and add your Web3Forms key
cp .env.example .env.local
#   open .env.local and paste your VITE_WEB3FORMS_ACCESS_KEY

# 3. Run the dev server
npm run dev
#   → http://localhost:5173
```

## Available scripts

| Command              | What it does                                              |
| -------------------- | --------------------------------------------------------- |
| `npm run dev`        | Start Vite dev server with HMR                            |
| `npm run build`      | Type-check + production build → `dist/`                   |
| `npm run preview`    | Preview the production build locally                      |
| `npm run lint`       | Run ESLint over `src/`                                    |
| `npm run format`     | Run Prettier write over source                            |
| `npm run test`       | Run Vitest in watch mode                                  |
| `npm run test:run`   | Run Vitest once (CI / pre-commit friendly)                |

## Project structure

```
vite-app/
├── public/
│   ├── assets/          Static assets shipped as-is (logo)
│   └── uploads/         Hero video + photographs
├── src/
│   ├── components/      Section + shared components (Nav, Footer, ...)
│   │   └── __tests__/   Vitest test files
│   ├── data/
│   │   └── services.ts  Typed service-detail content (single source of truth)
│   ├── hooks/           Custom React hooks
│   ├── pages/           Route-level components
│   │   ├── Home.tsx
│   │   ├── ServiceDetail.tsx
│   │   └── NotFound.tsx
│   ├── test/setup.ts    Vitest setup (jest-dom)
│   ├── App.tsx          Router config
│   ├── main.tsx         Entry point
│   ├── index.css        Tailwind directives + a few global rules
│   └── types.ts         Shared TS types
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── vercel.json          SPA rewrite rules for Vercel
```

## Routes

| Path                                  | Component                                  |
| ------------------------------------- | ------------------------------------------ |
| `/`                                   | `Home` — single-scroll marketing page      |
| `/services/:slug`                     | `ServiceDetail` — one of 8 service pages   |
| `*`                                   | `NotFound`                                 |

Valid service slugs live in `src/data/services.ts`: `customer-mapping`,
`land-evaluation`, `environmental-monitoring`, `resource-mapping`,
`spatial-planning`, `satellite-imagery`, `analysis-ready-data`, `geoint`.

## Contact form (Web3Forms)

The form on the home page POSTs to **api.web3forms.com**. To activate:

1. Go to <https://web3forms.com> and sign up using `geospecsolutions@gmail.com`.
2. Confirm via the verification email.
3. Copy your access key.
4. Set it in your environment:

   - Locally: paste into `.env.local`:
     ```bash
     VITE_WEB3FORMS_ACCESS_KEY=your_key_here
     ```
   - On Vercel: Project Settings → Environment Variables → add
     `VITE_WEB3FORMS_ACCESS_KEY` with the same value, scoped to Production
     (and Preview if you want previews to send too).

The form fails closed with a visible error if the key is missing, so a
broken form is impossible to ship unnoticed.

## Deploying to Vercel

```bash
# Install the Vercel CLI
npm i -g vercel

# In the vite-app directory:
vercel       # first run → links project + previews
vercel --prod  # promote to production
```

The included `vercel.json`:

- Rewrites all paths to `/index.html` so React Router handles routing.
- Sets long cache headers on `/assets/*` and `/uploads/*`.

Don't forget the `VITE_WEB3FORMS_ACCESS_KEY` env var in Project Settings.

## Editing content

| Want to change…              | Edit                                                   |
| ---------------------------- | ------------------------------------------------------ |
| Service detail copy          | `src/data/services.ts`                                 |
| Home-page hero / sections    | The relevant component in `src/components/`            |
| Color palette                | `tailwind.config.ts` (CSS custom values for tokens)    |
| Per-page title / description | `<Seo>` props in each page file                        |
| Web3Forms key                | `.env.local` (locally) and Vercel env vars (prod)      |

## Asset replacement

- **Logo**: replace `public/assets/geospec-logo.png` (PNG with transparent
  background recommended).
- **Hero video**: replace `public/uploads/15164036-uhd_3840_2024_30fps.mp4`,
  then update the path in `src/components/Hero.tsx`.
- **About section photo**: replace `public/uploads/mustafa-omar-...jpg`,
  then update the path in `src/components/About.tsx`.

## Notes

- TypeScript strict mode is on. Lint-on-save in your editor is recommended.
- The site is fully responsive at the breakpoints `sm`/`md`/`lg`.
- All section anchors (`#about`, `#services`, `#why`, `#contact`, etc.) work
  cross-page — `ScrollToHash.tsx` handles hash arrivals after route changes.
