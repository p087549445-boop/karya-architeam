import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/root/dist/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "s8g7ln-8081.csb.app", // host sandbox kamu
      /\.csb\.app$/, // semua subdomain CodeSandbox
      "localhost",
      "127.0.0.1",
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
