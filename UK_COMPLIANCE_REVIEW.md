# ByKira: UK website compliance review

**Last source review:** 21 October 2026  
**Deployment:** GitHub Pages (`bykirahayes.github.io/bykira-new`)  
**Legal determination:** **NOT LEGALLY CERTIFIED / INCOMPLETE.** This is an implementation and source audit. It does not replace legal counsel, a live cookie inspection, a WCAG audit, or real business data verification.

## Changes implemented

- Permanent `privacy.html`, `cookies.html`, `terms.html` and `accessibility.html` pages linked in the main footer. These pages are intentionally transparent that operator details are missing.
- Removed external Google Fonts stylesheet calls; bundled font assets are served from the same GitHub Pages build.
- Pausable decorative animation control and system reduced-motion support; CSS uses controlled transforms and gentle glow.
- Enquiry form accurately states that it only composes a local message; it does not transmit or book. It links to privacy information at point of data entry.
- Added `bun run legal:check` to ensure legal pages/links exist and external Google Fonts are not reintroduced.

## Remaining release blockers

1. **Legal operator identity, postal business address, verified contact email** (UK Electronic Commerce Regulations 2002 regulation 6). Confirm whether ByKira is an individual/sole trader, partnership or limited company.
2. If a limited company, publish the **registered company name, number, registered office and jurisdiction**. Display VAT number if VAT registered and applicable.
3. Complete a **UK GDPR Article 13 privacy notice** after the real controller, legal basis for each actual processing purpose, data recipients, transfers, retention and rights request route are confirmed. Do not invent these.
4. Verify any operational promise of a **free 45-minute audit** and **48-hour turnaround**, and keep all illustrations visibly labelled. No sale/payment is implemented.
5. Perform a **fresh browser inspection** of GitHub Pages and external resources for cookies, storage and technical requests. Confirm whether any PECR consent/objection mechanism is necessary; do not add a banner by default without a purpose.
6. Perform accessibility checks using **keyboard, mobile zoom, screen readers and automated WCAG testing**. The current code is not accessibility-certified.
7. Validate hosting, headers, TLS and external dependencies, plus privacy/retention practices of any future enquiry backend. The present site is static and does not send email.

## Sources reviewed (21 October 2026)

- ICO UK GDPR privacy requirements: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/
- ICO PECR storage/access guidance (updated 29 April 2026): https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/
- Electronic Commerce Regulations 2002, regulation 6: https://www.legislation.gov.uk/uksi/2002/2013/regulation/6
- Limited company website disclosures: https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material
- WCAG motion guidance: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions

## CI validation

GitHub Actions should run TypeScript checks, Vitest, legal content checks and production build. A successful CI run confirms that source checks passed, **not** UK law compliance.

