// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // Use mode=gh or env flag to toggle GH Pages settings
  const isGhPages = mode === 'gh' || env.GITHUB_PAGES === 'true'

  const repoBase = '/'

  return {
    plugins: [
      react(),
      // Emit a SPA fallback for GH Pages: copy index.html to 404.html
      {
        name: 'emit-404-for-gh-pages',
        closeBundle() {
          const out = isGhPages ? 'docs' : 'dist'
          const src = `${out}/index.html`
          const dest = `${out}/404.html`
          if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest)
          }
          // Optional: emit .nojekyll to avoid any Jekyll quirks
          const nojekyll = `${out}/.nojekyll`
          if (!fs.existsSync(nojekyll)) fs.writeFileSync(nojekyll, '')
          // --- Emit CNAME for custom domain
          const cname = 'factoryflow.io'
          fs.writeFileSync(`${out}/CNAME`, cname)
        }
      }
    ],

    // ✅ Switch base depending on hosting
    base: isGhPages ? (repoBase || '/') : '/',

    resolve: {
      alias: { '@': resolve(__dirname, './src') },
    },

    server: {
      host: 'factoryflow.local',
      allowedHosts: ['factoryflow.local'],
      port: 3000,
      strictPort: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://api.factoryflow.local:3001',
          changeOrigin: true,
          secure: false,
        }
      }
    },

    build: {
      // GitHub Pages can serve from /docs on the default branch
      outDir: isGhPages ? 'docs' : 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      target: 'es2018',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    }
  }
})
