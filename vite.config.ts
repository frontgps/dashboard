import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/theme.scss" as *;`,
      },
      less: {
        javascriptEnabled: true,
        // You can override Ant Design theme follow below pattern
        // modifyVars: { '@primary-color': '#4f46e5' },
      },
    },
  },
})
