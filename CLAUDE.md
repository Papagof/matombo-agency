# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A TypeScript + Express site for **Matombo Agency**, a Lagos-based digital marketing agency targeting hotels/short-stays, restaurants & lounges, and real estate. The repo is split into `backend/` (the Express/Prisma/TypeScript server) and `frontend/` (everything rendered to the browser — static pages plus the EJS templates the server renders). The frontend itself is a small custom "Design Component" (`.dc.html`) runtime (unchanged from the original static build); `services.dc.html`, `portfolio.dc.html`, and `blog.dc.html` are server-rendered from Postgres via Prisma, `index.dc.html` and `about.dc.html` remain plain static files, and `contact.dc.html` is static markup whose form POSTs to a JSON API that writes to Postgres.

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

**`frontend/public/`** — static assets, served directly by `express.static` (see `backend/src/server.ts`): `index.dc.html`, `about.dc.html`, `contact.dc.html`, `support.js` (the dc-runtime), and `_ds/` (the design-system bundle).

**`support.js` — the dc-runtime.** Generated output of an external `dc-runtime` build (see its header comment) — its source isn't vendored here, don't hand-edit it. It parses whatever HTML is inside a page's `<x-dc>` block (static or server-rendered, it doesn't care which) and mounts a React tree over it, implementing: `{{ expr }}` interpolation, `<sc-for>`/`<sc-if>` control flow (unused by this site), `<x-import component-from-global-scope="...">` to embed design-system components, `style-hover`/`style-focus` attributes compiled to real CSS at runtime, and `<helmet>` for injecting `<head>` content. It also re-fetches the current page and sibling `*.dc.html` files for a live-editor bridge — pages must be served over HTTP, not opened as `file://`.

**`frontend/public/_ds/ember-studio-design-system-*/` — the design-system bundle** ("Ember Studio"). Generated, compiled-only output: `_ds_bundle.js` (components on `window.EmberStudioDesignSystem_64dbe4.*`), `tokens/*.css`, `styles.css` (entrypoint), `_ds_manifest.json`, `readme.md` (the brand brief — colors, type, spacing, radii, do's/don'ts). No editable component source lives in this repo.

**`services.dc.html` / `portfolio.dc.html` / `blog.dc.html` — server-rendered pages.** `backend/src/routes/pages.ts` defines `GET` handlers at these exact paths (so existing nav links keep working) that fetch rows via the Prisma client (`backend/src/db.ts`) and `res.render()` an EJS view from `frontend/views/`. Each view reuses `frontend/views/partials/{head,nav,footer}.ejs` for the boilerplate shared across every page, keeps static sections (hero copy, FAQ, process timeline, comparison table) verbatim, and loops over the fetched rows only for the repeated card/grid sections. `backend/src/server.ts` points Express's `views` and static directories at `frontend/views` and `frontend/public` respectively (two levels up from `backend/src`, or `backend/dist` once built). The dc-runtime doesn't know or care that this HTML was generated per-request rather than read from a file.

**Data model (`backend/prisma/schema.prisma`):** `BlogPost`, `CaseStudy` (portfolio), `Service`, `PricingTier` — plus an `Industry` enum (`HOTELS`/`RESTAURANT`/`REAL_ESTATE`) used to look up each card's badge label/color via `backend/src/industry.ts` (colors live in code, not the DB). `Service.icon` and `CaseStudy.metrics` similarly keep presentation details (SVG path data via `backend/src/icons.ts`; `{ value, label }` pairs as JSON) out of raw markup. `backend/prisma/seed.ts` ports the original hardcoded copy into seed rows — `npm run prisma:migrate` runs it automatically on a fresh database. `ContactSubmission` (with a separate `ContactBusinessType` enum: `HOTEL`/`RESTAURANT`/`REAL_ESTATE`/`OTHER`) stores contact-form leads; it's not seeded.

**`contact.dc.html` — the contact form.** Stays a static file in `frontend/public/`, but its `<helmet>` block (see `support.js`'s notes above) carries a plain inline `<script>` that intercepts the form's `submit` event via event delegation on `document` and POSTs JSON to `/api/contact` (handled by `backend/src/routes/contact.ts`, which validates required fields/email format and writes a `ContactSubmission` row via Prisma), then shows a success/error message in the `#contact-form-status` element. Two notes if you touch that script: (1) it must stay inside `<helmet>` — a `<script>` in the rest of the `<x-dc>` body gets rendered through React and never executes, since the dc-runtime's helmet manager is the only part that injects scripts via real `document.createElement`/`appendChild`; (2) avoid camelCase identifiers with `name = value` spacing in it — `encodeCase()` in `support.js` runs a global regex over the *entire* page template (to support real camelCase HTML attributes like `viewBox`) that will mangle ` camelCaseName =` into ` sc-camel-camel-case-name=` wherever it appears, including inside inline scripts.

## Visual language

New markup should stay consistent with the Ember Studio brief (`frontend/public/_ds/.../readme.md`): terracotta `var(--primary)` only for interactive/active states (never decorative), amber `var(--accent)` only for attention badges, warm stone neutrals (never pure black/white or cool grays), Playfair Display for headings / Source Sans 3 for body (max two weights per screen), strict 4px spacing scale, and fixed, non-mixed corner radii — 4px small badges/code, 8px buttons/inputs, 12px cards/modals, full pill for avatars/chips/pills. Copy is sentence case, second-person ("you" / "your team"), no emoji.
