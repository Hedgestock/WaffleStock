import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  root: "./client",
  // base: "/WaffleStock",
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
    viteSingleFile(),
  ],
  optimizeDeps: {
    include: [ "react/jsx-runtime" ],
  },
});