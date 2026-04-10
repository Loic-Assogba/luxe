import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gozem-luxe/', // ⚠️ nom exact de ton repo
})