# Alexandre Lopes — Portfolio

Bilingual (PT/EN) personal portfolio site. Static, no backend, no analytics, no cookies.

Stack: Vite + React + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (https://im-alexandre.vercel.app/?lang=pt#projects)
## Build

```bash
npm run build
npm run preview   # serve the production build locally to double-check it
```

## Language switching

- Language is auto-detected on first visit from the browser language (`pt*` → Portuguese, anything else → English).
- The choice is stored in `localStorage` and reflected in the URL as `?lang=pt` / `?lang=en`, so links are shareable.
- All copy lives in `src/content/pt.js` and `src/content/en.js` — nothing is hardcoded in components.

## Deploying

### Vercel

1. Push this folder to a Git repository (see note below — this project was only `git init`'d locally, no remote was configured).
2. Import the repo in Vercel. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
3. Leave `VITE_BASE_PATH` unset (defaults to `/`).

### GitHub Pages

1. Push to a GitHub repository, e.g. `github.com/AlexandreLopes2325/<repo-name>`.
2. Build with the base path set to your repo name:
   ```bash
   VITE_BASE_PATH=/<repo-name>/ npm run build
   ```
3. Deploy the contents of `dist/` to the `gh-pages` branch (e.g. with the `gh-pages` npm package, or a GitHub Actions workflow that runs the command above and publishes `dist/`).
4. In the repo settings, enable GitHub Pages for that branch.

The base path is controlled from `vite.config.js` via the `VITE_BASE_PATH` env var, so you don't need to edit code to switch between the two.

## TODOs before sending this to recruiters

See the final delivery report for the full list. In short, you still need to:

- Add your real email in `src/content/pt.js` and `src/content/en.js` (`contact.emailTodo`).
- Add `public/foto.jpg` (a square photo works best) — until then, the hero shows your initials.
- Add `public/cv-alexandre-lopes-pt.pdf` and `public/cv-alexandre-lopes-en.pdf`.
- Fill in the real repository links for each project in the content files (currently `TODO: ...` placeholders).
- Replace `https://im-alexandre.vercel.app/` in `index.html` and `public/sitemap.xml` with your real deployed URL once you have one.
- Consider replacing `public/og-image.svg` with a real 1200×630 PNG/JPG — some platforms (LinkedIn, etc.) don't render SVG for link previews.
