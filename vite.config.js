// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/myapp/", // Adjust based on your deployment
  plugins: [react()],
});
