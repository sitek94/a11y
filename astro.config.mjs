import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import path from 'path'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve('src/assets'),
        '@components': path.resolve('src/components'),
        '@layouts': path.resolve('src/layouts'),
        '@examples': path.resolve('src/examples'),
      },
    },
  },
})
