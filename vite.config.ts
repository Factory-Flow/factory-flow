// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  // Load VITE_* vars from .env, .env.development, .env.production, etc.
  const env = loadEnv(mode, process.cwd(), '')

  const isGhPages = mode === 'gh' || env.GITHUB_PAGES === 'true'

  return {
    plugins: [react()],
    // Always serve from domain root
    base: '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    // Dev-only server/proxy (ignored in production build)
    server: {
      host: 'factoryflow.local',          // or '0.0.0.0' if you want LAN dev access
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
      outDir: isGhPages ? 'docs' : 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      target: 'es2018',
      // optional: speed/compat tweaks
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined, // single bundle for tiny sites; remove if you prefer code-splitting
        }
      }
    }
  }
})
