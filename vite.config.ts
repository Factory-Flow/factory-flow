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
  const legalStaticPages = [
    {
      slug: 'terms',
      title: 'Factory Flow | Terms of Service',
      canonical: 'https://factoryflow.io/terms',
    },
    {
      slug: 'privacy',
      title: 'Factory Flow | Privacy Policy',
      canonical: 'https://factoryflow.io/privacy',
    },
    {
      slug: 'cookies',
      title: 'Factory Flow | Cookie Policy',
      canonical: 'https://factoryflow.io/cookies',
    },
  ]

  const applyLegalMeta = (html: string, title: string, canonical: string) => {
    return html
      .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${title}" />`,
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${title}" />`,
      )
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${canonical}" />`,
      )
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${canonical}" />`,
      )
  }

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
            const baseHtml = fs.readFileSync(src, 'utf8')
            for (const page of legalStaticPages) {
              const destDir = `${out}/${page.slug}`
              fs.mkdirSync(destDir, { recursive: true })
              const pageHtml = applyLegalMeta(baseHtml, page.title, page.canonical)
              fs.writeFileSync(`${destDir}/index.html`, pageHtml)
            }
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
      // Safari on iOS can choke on newer ES2018 syntax (e.g. RegExp lookbehind).
      target: 'safari13',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    }
  }
})
