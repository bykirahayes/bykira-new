# ByKira — website

A React, TypeScript, Tailwind CSS and Vite website hosted entirely as a static site on **GitHub Pages**. It does **not** need Lovable or a running application server.

**GitHub repository:** https://github.com/bykirahayes/bykira-new  
**GitHub Pages site:** https://bykirahayes.github.io/bykira-new/

## Automatic publishing

The GitHub Actions workflow `.github/workflows/deploy.yml` runs when you push to `main`, checks TypeScript and tests, builds `dist/`, and publishes that output to GitHub Pages.

### One-time GitHub setup

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and inspect **Deploy ByKira to GitHub Pages**. You may select **Run workflow** to deploy manually.
4. A successful deployment becomes visible at https://bykirahayes.github.io/bykira-new/.

The site uses the Vite base path `/bykira-new/`. If you rename the repository or add a custom domain, change `base` in `vite.config.ts` and relevant HTML metadata.

## Local development

Use Bun (tested in the GitHub Actions workflow); Node.js 22+ can also run Vite locally.

```sh
bun install
bun run dev
bun run typecheck
bun run test
bun run build
bun run preview
```

GitHub Actions uses `bun install` and the same scripts. The old Lovable-specific dependency lockfile was removed. Commit a newly generated `bun.lock` after a verified local install if you want frozen, reproducible installs.

## Features

- Original ByKira landing page, sample interactive operations map, illustrated workflows and modal dialogs
- Copyable audit enquiry text; **the form does not send messages and does not book calls** until a verified contact destination/service is configured
- Mobile-responsive layouts, keyboard affordances, reduced-motion support and purple brand palette

## Design and legal improvements (21 October 2026)

- Added kinetic signal ribbon, interactive depth/tilt, animated violet typography, richer lighting and card hover effects.
- Added a visible pause/resume button for decorative animations; prefers-reduced-motion support is maintained.
- Fonts are bundled in the production build rather than fetched from Google Fonts.
- Permanent direct-link pages: `privacy.html`, `cookies.html`, `terms.html`, `accessibility.html`.
- Run `bun run legal:check` for automated checks of important legal links/disclosures. It **does not prove UK legal compliance**.
- Business identity, geographical address, direct verified email and any applicable company/VAT details remain unconfigured.

## UK legal checklist

Read [UK_COMPLIANCE_REVIEW.md](UK_COMPLIANCE_REVIEW.md). The interim Privacy & cookies dialog is **not** a final UK GDPR privacy notice; verified business details and live-hosting checks are still required. A successful build does not establish legal compliance.

## Hosting limitations

GitHub Pages is static hosting: it cannot run Node, API routes, a database or email sending. If future features need backend services, connect a separately hosted provider and update the privacy and security review before collecting personal information.
