import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/kasa-deploy",
  plugins: [react()],
  
  server: {
    port: 3000, // Définit le port à 3000
  },
});
