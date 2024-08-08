import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fhcl/",
  build: {
    outDir: './docs',  // Outputs the build to the docs folder (necessary for gitbucket pages)
    emptyOutDir: true,  // also necessary
  }
})
