# Kian Price | Personal IT Portfolio

This branch is an independent copy of the Kian Price portfolio, based on the separate [Lovable editor project](https://lovable.dev/projects/00bd5dfd-e37b-4941-9964-7320ae5b0f48). It does not change ByKira's `main` branch.

## GitHub Pages
This repository's project-site URL, **once GitHub Pages is successfully enabled and deployed**, is `https://bykirahayes.github.io/bykira-new/`.

This branch includes a GitHub Actions Pages build and deploy workflow, which builds the TanStack Start site with static prerendering and publishes `.output/public`.

If GitHub Pages has not enabled automatically, open **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow is restricted to this `kian-price-portfolio` branch. Check the Actions run for successful deployment. GitHub's hosted project URL will still include the repository name; a dedicated `bykirahayes.github.io` repository would be needed for a username-root homepage.

For future Lovable updates, the GitHub code must be resynchronised; this branch is not automatically linked to Lovable.

## Local development
- Install Node.js / Bun
- Run `bun install`
- Run `bun run dev`
- Portfolio content: `src/lib/site.ts`

Contact details are deliberately unset until verified.
