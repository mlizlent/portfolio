# Meroline Lizlent — Portfolio

A multi-page portfolio built with React, Vite, and React Router.

## Pages
- `/` — Home (hero, featured work, skills, CTA)
- `/projects` — Full project listing
- `/projects/:slug` — Individual case study pages
- `/about` — About
- `/contact` — Contact

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
```

## Editing content
Project data (name, tags, description, live link) lives in `src/data/projects.js` — edit that file to add, remove, or update projects. Contact links live in `src/pages/Contact.jsx` and `src/components/Footer.jsx`.

## Deploying
The `dist/` folder produced by `npm run build` is a static site — deploy it to Vercel, Netlify, GitHub Pages, or any static host.
