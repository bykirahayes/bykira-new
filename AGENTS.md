# ByKira site maintenance

## Hosting
- This project is an independent, static Vite + React site, built and deployed by GitHub Actions to GitHub Pages.
- Production path: https://bykirahayes.github.io/bykira-new/
- GitHub Pages project sites use the Vite `base: "/bykira-new/"`. Keep internal section links as anchors.
- GitHub Pages runs static files only; do not add server-rendering or server-only APIs.

## Architecture
- `src/App.tsx` composes the single-page sections from `src/components/site/*`.
- Brand colours and semantic tokens: `src/styles.css`.
- Journey copy and the verified contact destination: `src/lib/site.ts`.
- Enquiry form creates a copyable draft but does not transmit messages unless an actual verified email destination or external backend is configured.
- `UK_COMPLIANCE_REVIEW.md` records outstanding legal, accessibility and hosting checks. Do not assert legal compliance without verification.

## Checks
- `npm install`
- `npm run typecheck`
- `npm test`
- `npm run build`
