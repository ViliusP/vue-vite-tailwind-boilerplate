import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    }),
    eslintPlugin()
  ],
  server: {
    port: 8080 // <- change server port here
  },
  resolve: {
    alias: {
      '@': `${resolve(__dirname, './src')}`
    }
  }
})
