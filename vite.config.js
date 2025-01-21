// filepath: /D:/Proyectos git/EmpresaCanada/FrontendCanadaJavierRicardo/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FrontendCanadaJavierRicardo/' // Nombre de tu repositorio
})