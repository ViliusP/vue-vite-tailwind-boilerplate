import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  server: {
    port: 8080 // <- change server port here
  },
  resolve: {
    alias: {
      '@': `${resolve(__dirname, './src')}`
    }
  }
})
