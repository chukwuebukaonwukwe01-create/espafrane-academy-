# EspaFrane Academy: Landing Page

Next.js 14 (App Router) + Tailwind CSS + Framer Motion. A static, one-page site that's ready for Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Where to change things

| What | File |
|---|---|
| Phone, WhatsApp number, pre-filled WhatsApp messages, email, nav links | `lib/site.js` |
| Section content | `components/*.jsx` (one file per section) |
| Colours, fonts, container width | `tailwind.config.js` |
| Page title, description, social preview | `app/layout.jsx` |
| Logo / hero image | `public/logo.png`, `public/hero-salon.webp` |
| Favicon | `app/icon.png` |

## Notes

- Every enrol/enquire button opens a WhatsApp chat with a pre-filled message. Email uses `mailto:`.
- Scroll animations respect the visitor's "reduce motion" setting.
- Icons are Google Material Symbols (inline SVG). Fonts are self-hosted (Plus Jakarta Sans and Source Sans 3), with no Google Fonts request.
- The logo and hero image were cut from the design exports. Replace them with the original files (SVG logo, full-resolution photo) for sharper results.

## Deploy (Vercel)

Push to GitHub, then import the repo at vercel.com/new. Framework: Next.js, no settings to change.
