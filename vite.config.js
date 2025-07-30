import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/paginaclaudio/", // 🔥 debe coincidir con el nombre del repo
});
