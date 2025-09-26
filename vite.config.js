// vite.config.js - CLEANED UP VERSION
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // REMOVED: customDevHeadersPlugin() to avoid conflicts
  ],
  base: "/legendstores",

  server: {
    headers: {
      // THIS IS THE CRITICAL FIX: Enforce the stricter policy.
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
});
