import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

export default defineConfig({
  root: "./client",
  build: {
    outDir: '../docs',
    emptyOutDir: true, // also necessary
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    deno(),
  ],
  optimizeDeps: {
    include: [ "react/jsx-runtime" ],
  },
});