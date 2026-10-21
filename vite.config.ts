import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// GitHub Pages publishes repository sites under /<repository-name>/.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: "/bykira-new/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
