# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A TypeScript + Express site for **Matombo Agency**, a Lagos-based digital marketing agency targeting hotels/short-stays, restaurants & lounges, and real estate. The repo is split into `backend/` (the Express/Prisma/TypeScript server) and `frontend/` (everything rendered to the browser — hand-written CSS/JS plus the EJS templates the server renders for every page). All six pages (`/`, `/about`, `/services`, `/portfolio`, `/blog`, `/contact`) are server-rendered EJS views sharing common partials; `services`, `portfolio`, and `blog` additionally loop over rows fetched from Postgres via Prisma, and `contact` is a plain HTML form whose submit handler POSTs JSON to an API route that writes to Postgres.

## Commands

All commands run from `backend/`:

```
cd backend
npm install
cp .env.example .env        # set DATABASE_URL to a reachable Postgres instance
npm run prisma:migrate      # creates tables, then auto-runs the seed script
npm run dev                 # tsx watch src/server.ts — http://localhost:3000
npm run build && npm start  # production: tsc -> dist/, then node dist/server.js
npm run db:seed             # re-run the seed script standalone (it deletes & re-inserts)
```

There is no test suite or linter configured in this project.

## Architecture

**`backend/`** — the Node project: `package.json`, `tsconfig.json`, `prisma.config.ts` (Prisma CLI config — schema path + seed command; loads `.env` itself via `dotenv/config` since a config file's presence makes the Prisma CLI skip its old built-in `.env` auto-load), `.env`, `prisma/` (`schema.prisma`, `seed.ts`, `migrations/`), and `src/` (`server.ts`, `db.ts`, `icons.ts`, `industry.ts`, `routes/pages.ts`, `routes/contact.ts`). Nothing under `backend/` is served over HTTP. Note: `@prisma/client`'s generated runtime auto-loads `.env` independently of `prisma.config.ts` (that's a separate mechanism baked into the client, not the CLI), which is why the app itself never needed explicit dotenv loading.

**`frontend/public/`** — static assets, served directly by `express.static` (see `backend/src/server.ts`): `css/` (`tokens.css`, `base.css`, `layout.css`, `components.css` — plain hand-written CSS, no build step) and `js/contact-form.js` (the contact form's submit handler). There's no client-side framework, templating runtime, or compiled component bundle — everything here is checked-in source you can edit directly.

**`frontend/views/`** — EJS templates for every page. `backend/src/routes/pages.ts` defines `GET` handlers at `/`, `/about`, `/services`, `/portfolio`, `/blog`, `/contact` that `res.render()` the matching view; `services`, `portfolio`, and `blog` first fetch rows via the Prisma client (`backend/src/db.ts`). Every view includes `partials/head.ejs` (title/meta/JSON-LD + the four CSS links), `partials/nav.ejs` (active-link highlighting via an `active` key passed at include time), and `partials/footer.ejs`. Pages are plain server-rendered HTML using real CSS classes (defined in `frontend/public/css/`) — no inline `style=` attributes, no custom tags.

**Data model (`backend/prisma/schema.prisma`):** `BlogPost`, `CaseStudy` (portfolio), `Service`, `PricingTier` — plus an `Industry` enum (`HOTELS`/`RESTAURANT`/`REAL_ESTATE`) used to look up each card's badge label/color via `backend/src/industry.ts` (colors live in code, not the DB). `Service.icon` and `CaseStudy.metrics` similarly keep presentation details (SVG path data via `backend/src/icons.ts`; `{ value, label }` pairs as JSON) out of raw markup. `backend/prisma/seed.ts` holds the actual copy for these tables — `npm run prisma:migrate` runs it automatically on a fresh database. `ContactSubmission` (with a separate `ContactBusinessType` enum: `HOTEL`/`RESTAURANT`/`REAL_ESTATE`/`OTHER`) stores contact-form leads; it's not seeded.

**`contact.ejs` — the contact form.** A plain HTML `<form id="contact-form">` rendered at `/contact`. `frontend/public/js/contact-form.js` is loaded via a normal `<script src="/js/contact-form.js">` at the end of the page body; it intercepts the `submit` event, POSTs JSON to `/api/contact` (handled by `backend/src/routes/contact.ts`, which validates required fields/email format and writes a `ContactSubmission` row via Prisma), and shows a success/error message in the `#contact-form-status` element. It's an ordinary external script — no special placement rules or naming constraints apply.

## Visual language

CSS lives in `frontend/public/css/`: `tokens.css` defines all design tokens as `:root` custom properties (colors, spacing, radii, shadows, fonts — including the Google Fonts `@import`), `base.css` is the reset/element defaults, `layout.css` covers header/nav/footer/section/grid patterns, and `components.css` covers buttons/cards/badges/forms/pricing/tables/accordion. New markup should stay consistent with these tokens: terracotta `var(--primary)` only for interactive/active states (never decorative), amber `var(--accent)` only for attention badges, warm stone neutrals (never pure black/white or cool grays), Playfair Display for headings / Source Sans 3 for body (max two weights per screen), strict 4px spacing scale (`--space-1` through `--space-20`), and fixed, non-mixed corner radii — `--radius-sm` (4px) for small badges, `--radius-md` (8px) for buttons/inputs, `--radius-lg` (12px) for cards/modals, `--radius-full` for avatars/chips/pills. Copy is sentence case, second-person ("you" / "your team"), no emoji.
