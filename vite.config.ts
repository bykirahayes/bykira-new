// Dedicated GitHub Pages branch of the Kian Price portfolio.
// Keep the main/ByKira configuration unchanged.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  vite: { base: "/bykira-new/" },
  tanstackStart: {
    router: { basepath: "/bykira-new" },
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: false,
      failOnError: true,
    },
  },
});
