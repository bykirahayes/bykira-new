// @lovable.dev/vite-tanstack-config includes the TanStack, React, Tailwind,
// Nitro and router plugins. Do not add duplicate plugins.
//
// The GitHub Pages preview sets BYKIRA_GITHUB_PAGES=true at build time.
// This opt-in changes the asset base and prerenders the landing page as HTML,
// without modifying the default Lovable development/production setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const githubPagesPreview = process.env.BYKIRA_GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    ...(githubPagesPreview ? { base: "/bykira-new/" } : {}),
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to our SSR error wrapper.
    server: { entry: "server" },
    ...(githubPagesPreview
      ? {
          prerender: {
            enabled: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: false,
            failOnError: true,
          },
        }
      : {}),
  },
});
