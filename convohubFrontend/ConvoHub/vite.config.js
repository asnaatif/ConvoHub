import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port: 3000,
  },
  optimizeDeps: {
    include: ['lottie-react'], // Include lottie-react for proper handling
  },
})

