import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost", // Changed "::" to avoid IPv6-related issues
    port: 8080,
    open: true, // Auto-open browser
  },
  plugins: [
    react(),
    // Ensure componentTagger() is defined before using it
    // mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500, // Set limit for warnings (default is 500kB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Moves dependencies into a separate chunk
          }
        },
      },
    },
    minify: "esbuild", // Uses esbuild for faster builds
    target: "esnext", // Optimize for modern browsers
  },
}));
