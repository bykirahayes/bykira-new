# Cloudflare Pages deployment and security

## Build settings

- Framework preset: Vite (or None)
- Production branch: main
- Build command: `npm ci && npm run typecheck && npm test && npm run legal:check && npm run build`
- Build output directory: `dist`
- Node.js: 22
- Environment variable: `VITE_CALENDLY_URL=https://calendly.com/bykira`

The Vite config switches to a root-relative base path when Cloudflare Pages sets `CF_PAGES=1`. The existing GitHub Pages deployment keeps its repository subpath until the Cloudflare custom domain is confirmed.

## Security configuration

The `public/_headers` file is copied into `dist/_headers` and Cloudflare Pages applies its rules to static responses. It configures CSP, HSTS, clickjacking and MIME-sniffing protection, a restrictive referrer policy, and browser permissions. After the first deploy, inspect actual response headers in DevTools or with `curl -I https://YOUR-DOMAIN/`; configuration alone does not prove that production is serving them.

The Content Security Policy currently allows the Calendly embed. If adding analytics, Turnstile, external scripts, payment providers, or new fonts, update and retest the policy deliberately rather than broadly allowing all scripts.

## Connect Cloudflare

1. In Cloudflare, open Workers & Pages and create a Pages project connected to the GitHub repository `bykirahayes/bykira-new`.
2. Use the build settings above and set `VITE_CALENDLY_URL` as a public build-time variable. Do not put API keys, private tokens, or credentials in any `VITE_*` variable.
3. Use a preview deployment to check the booking iframe, direct legal-page links, navigation, asset paths, and response headers.
4. Add the intended custom domain in Pages and follow Cloudflare's DNS instructions. Do not change existing DNS records blindly; check current mail-related MX, SPF, DKIM and DMARC records first.
5. After production deployment, confirm HTTPS, redirects, headers, and the correct canonical domain. Keep the previous host until Cloudflare is verified.

## Dependency and repository hygiene

Commit `package-lock.json` and use `npm ci` in CI and Cloudflare builds for repeatable dependency installs. The Security checks workflow runs dependency audit, type checking, tests, legal integrity checks, linting, and a production build. Resolve any audit findings before launch.

This checklist is not a penetration test or a legal compliance certification. If a credential has ever been committed, rotate it even if the file is later removed.
