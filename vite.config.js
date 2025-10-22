import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ibm_final_project/e-plantShopping/",
  plugins: [react()],
})

