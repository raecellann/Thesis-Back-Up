/* eslint no-restricted-globals: ["error", "event"] */
/* global process */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      port: parseInt(process.env.PORT) + 2000,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@pages": path.resolve(__dirname, "./src/pages"),
      // "@schema": path.resolve(__dirname, "./src/schema"),
      // "@types": path.resolve(__dirname, "./src/types"),
      // "@hooks": path.resolve(__dirname, "./src/hooks"),
      // "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
