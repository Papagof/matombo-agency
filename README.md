# Digital Marketing Website

TypeScript + Express backend with a Postgres database (via Prisma), rendering plain server-rendered EJS pages with hand-written CSS (no client-side framework).

## Layout

- `backend/` — Express + TypeScript server, Prisma schema/seed, `.env`
- `frontend/public/` — static assets: `css/` (tokens, base, layout, components) and `js/contact-form.js`
- `frontend/views/` — EJS templates the server renders for every page

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services & pricing (server-rendered from Postgres)
- `/portfolio` — Portfolio / case studies (server-rendered from Postgres)
- `/blog` — Blog (server-rendered from Postgres)
- `/contact` — Contact (the form POSTs to `/api/contact`, which saves the lead to Postgres)

## Getting started

```bash
cd backend
npm install
cp .env.example .env        # point DATABASE_URL at your Postgres instance
npm run prisma:migrate      # creates tables and seeds the initial content
npm run dev                 # http://localhost:3000
```

For production: `npm run build && npm start` (from `backend/`).

See [CLAUDE.md](CLAUDE.md) for the full architecture.

## Repository

https://github.com/Papagof/matombo-agency
