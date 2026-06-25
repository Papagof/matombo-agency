# Digital Marketing Website

Built with the Ember Studio Design System. TypeScript + Express backend with a Postgres database (via Prisma) for the Services, Portfolio, Blog, and Contact-form content.

## Layout

- `backend/` — Express + TypeScript server, Prisma schema/seed, `.env`
- `frontend/public/` — static pages and assets, served as-is
- `frontend/views/` — EJS templates the server renders for the database-backed pages

## Pages

- `index.dc.html` — Home (static, served from `frontend/public/`)
- `about.dc.html` — About (static, served from `frontend/public/`)
- `services.dc.html` — Services & pricing (server-rendered from Postgres)
- `portfolio.dc.html` — Portfolio / case studies (server-rendered from Postgres)
- `blog.dc.html` — Blog (server-rendered from Postgres)
- `contact.dc.html` — Contact (static page; the form POSTs to `/api/contact`, which saves the lead to Postgres)

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

## Getting started with git

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
