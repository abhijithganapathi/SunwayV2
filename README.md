# Sunway Solar Systems Website

Marketing website for Sunway Solar Systems, a rooftop solar installation business in Kerala. Built with Next.js App Router, Tailwind CSS, and a small server-side lead forwarding API.

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- Google Analytics 4, optional
- Google Apps Script lead endpoint, configured through environment variables

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Required environment variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `GOOGLE_SCRIPT_URL` | Yes for lead form submissions | HTTPS Google Apps Script endpoint that receives lead payloads |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | GA4 measurement ID for page/event tracking |

Keep production values only in Vercel/project environment variables. Do not commit real endpoint secrets.

## Quality checks

Run before pushing or deploying:

```bash
npm test
npm run lint
npm run build
npm audit --omit=dev
```

## Lead form behavior

The `/api/lead` route:

- accepts `name`, `phone`, `location`, `billRange`, and `customerType`
- trims and length-limits submitted fields
- validates phone format
- requires `GOOGLE_SCRIPT_URL` to be a valid HTTPS URL
- forwards valid submissions to the configured Apps Script endpoint
- normalizes non-JSON successful upstream responses to `{ ok: true }`
- times out upstream forwarding after 10 seconds

## SEO/content notes

- Canonical domain is configured as `https://sunwaysolarsystems.in`.
- Sitemap is generated from primary routes plus entries in `src/content/localPages.ts`.
- Local SEO landing pages are statically generated from `src/content/localPages.ts`.
- Business, service, and FAQ schema are emitted as JSON-LD on relevant pages.

## Deployment

The project is suitable for Vercel deployment.

1. Set environment variables in Vercel.
2. Run the quality checks locally.
3. Deploy from the `main` branch.
4. After deployment, verify:
   - homepage loads
   - `/contact` lead form submits successfully
   - phone and WhatsApp CTAs work on mobile
   - `/sitemap.xml` and `/robots.txt` are accessible
   - Open Graph image renders correctly when shared
