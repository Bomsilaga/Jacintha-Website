# Epitome Quality Group

Marketing site for **Epitome Quality Group**, a trading name of Mac Ben —
a Victorian quality control consultancy for the food industry, offering food
safety testing, HACCP systems, audits and specialist QA labour hire.

| | |
| --- | --- |
| Trading name | Epitome Quality Group |
| Legal entity | Mac Ben |
| ABN | 62 825 390 390 |
| Chief Executive | Mac Ben |
| Phone | 0487 907 952 |
| Email | info@epitometesting.com.au |
| Service area | Victoria, Australia |

## Stack

- **Next.js 16** (App Router, Turbopack) — every route prerendered as static HTML
- **Tailwind CSS v4** with a custom design system in `src/app/globals.css`
- **TypeScript**
- Fonts self-hosted at build time via `next/font`: Fraunces (display),
  Instrument Sans (body), IBM Plex Mono (data labels)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npx eslint src   # lint
```

## Project layout

```
src/
  app/
    page.tsx            Home
    services/           Seven service lines
    labour-hire/        QA & QC labour hire
    work/               Success stories, testimonials, contract register
    industries/         Sectors served
    about/              Company, leadership, business details
    contact/            Enquiry form and business card
    layout.tsx          Fonts, metadata, JSON-LD, header/footer
    globals.css         Design system (colours, type scale, motion)
    sitemap.ts robots.ts icon.svg
  components/           Header, Footer, Bits, Reveal, SpecimenCard, Mark
  lib/
    site.ts             Business details, services, roles, industries
    work.ts             Case studies, testimonials, contract register
```

All copy and business data live in `src/lib/` — edit those two files to change
content without touching page markup.

## Before promoting this site publicly

Two things need real data first:

1. **`src/lib/work.ts` is placeholder content.** The case studies, testimonials
   and contract register are structural templates, not a record of real work.
   Replace every entry with genuine engagements, and only publish a testimonial
   where the client has given written permission. Under the Australian Consumer
   Law (ss 18 and 29, *Competition and Consumer Act 2010*) false or unauthorised
   testimonials and misleading claims about past work are prohibited. Delete any
   entry that cannot be substantiated.

2. **Labour hire licensing.** Providing labour hire services in Victoria
   generally requires a licence under the *Labour Hire Licensing Act 2018* (Vic).
   Confirm the licence position with Labour Hire Authority Victoria and add the
   licence number to `src/lib/site.ts` so it can be displayed.

The enquiry form composes a message and hands it to the visitor's email client;
no data is sent to a server. To capture submissions directly, replace the submit
handler in `src/components/EnquiryForm.tsx` with a route handler backed by an
email provider.

## Deployment

Hosted on Vercel. Pushes to the connected branch deploy automatically.
