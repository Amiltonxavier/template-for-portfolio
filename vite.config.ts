import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite o acesso via IP ou hostname
    port: 3000, // Porta padrão (pode mudar se necessário)
  },
});
