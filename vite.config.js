import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy:{
    '/api': 'https://portfolio-backend-3wl8.onrender.com/api/v1'
  },
  plugins: [react()],
})
