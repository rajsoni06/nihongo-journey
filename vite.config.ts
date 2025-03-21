import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"), // More robust path resolution
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild", // Use esbuild for fast minification
    chunkSizeWarningLimit: 850, // Set to 850KB (reduce unnecessary warnings)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor"; // Separate React
            if (id.includes("lodash")) return "lodash-vendor"; // Separate Lodash
            if (id.includes("recharts")) return "charts-vendor"; // Separate Recharts
            return "vendor"; // Other dependencies in vendor.js
          }
        },
      },
    },
  },
  esbuild: {
    drop: ["console", "debugger"], // Remove console logs & debuggers in production
  },
});
