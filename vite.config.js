import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/task-manager/', // Thay 'task-manager' bằng tên repo của bạn
})
