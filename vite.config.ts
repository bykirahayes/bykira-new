import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Cloudflare Pages serves this site from the domain root. GitHub Pages project
// URLs remain supported for the existing deployment until Cloudflare is connected.
const base =
  process.env["CF_PAGES"] === "1" || process.env["DEPLOY_TARGET"] === "cloudflare"
    ? "/"
    : "/bykira-new/";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base,
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
