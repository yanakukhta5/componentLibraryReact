import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      name: 'KubUI',
      formats: ['es', 'cjs', 'umd'],
      entry: path.resolve(__dirname, 'src', 'index.ts')
    },
    rollupOptions: {
      external: ['react', 'ReactDOM'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
