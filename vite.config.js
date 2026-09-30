import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Base path for the deployed site.
// - Vercel (root domain): keep '/'
// - GitHub Pages (project site, e.g. https://user.github.io/repo-name/): set to '/repo-name/'
// Easiest way to change it: set the VITE_BASE_PATH env var at build time, e.g.
//   VITE_BASE_PATH=/repo-name/ npm run build
// or just edit the fallback string below.
const base = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
