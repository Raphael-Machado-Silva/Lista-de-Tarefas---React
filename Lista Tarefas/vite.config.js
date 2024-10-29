import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Lista-de-Tarefas---React/',  // Altere para o nome do seu repositório
});
