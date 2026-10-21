# ByKira: UK website compliance review

**Last source review:** 21 October 2026  
**Deployment:** GitHub Pages (`bykirahayes.github.io/bykira-new`)  
**Legal determination:** **NOT LEGALLY CERTIFIED / INCOMPLETE.** This is an implementation and source audit. It does not replace legal counsel, a live cookie inspection, a WCAG audit, or real business data verification.

## Changes implemented

- Permanent `privacy.html`, `cookies.html`, `terms.html` and `accessibility.html` pages linked in the main footer. These pages are intentionally transparent that operator details are missing.
- Removed external Google Fonts stylesheet calls; bundled font assets are served from the same GitHub Pages build.
- Pausable decorative animation control and system reduced-motion support; CSS uses controlled transforms and gentle glow.
- Owner confirms ByKira is a **sole-trader brand** and supplied `info@bykira.co.uk` as the contact destination. The form prepares copyable text or a `mailto:` draft only; the user must send it from their own mail application. The mailbox has not been independently tested.
- All four legal pages and the site footer now provide `info@bykira.co.uk` and identify sole-trader status; they do not invent an address or legal operator's name.
- Added `bun run legal:check` to ensure legal pages/links exist and external Google Fonts are not reintroduced.

## Remaining release blockers

1. **Outstanding:** Confirm and disclose the sole trader's full legal name and a geographical business/contact address or suitable UK service address (Electronic Commerce Regulations 2002 reg. 6 and relevant business-name disclosure rules). Do not invent an address or publish a personal home address without the operator's approval. Confirm the trading name is not misleading or infringing another's mark.
2. **Email supplied, not tested:** `info@bykira.co.uk`. Confirm DNS/MX, mailbox access and delivery by sending a test enquiry. For sole traders there is no ordinary Companies House company-registration requirement or automatic company number. VAT registration/details are conditional on applicable thresholds and circumstances. HMRC Self Assessment registration rules still apply. References: https://www.gov.uk/become-sole-trader/register-sole-trader and https://www.gov.uk/become-sole-trader/choose-your-business-name .
3. Complete a **UK GDPR Article 13 privacy notice** after the real controller, legal basis for each actual processing purpose, data recipients, transfers, retention and rights request route are confirmed. Do not invent these.
4. Verify any operational promise of a **free 45-minute audit** and **48-hour turnaround**, and keep all illustrations visibly labelled. No sale/payment is implemented.
5. Perform a **fresh browser inspection** of GitHub Pages and external resources for cookies, storage and technical requests. Confirm whether any PECR consent/objection mechanism is necessary; do not add a banner by default without a purpose.
6. Perform accessibility checks using **keyboard, mobile zoom, screen readers and automated WCAG testing**. The current code is not accessibility-certified.
7. Validate hosting, headers, TLS and external dependencies, plus privacy/retention practices of any future enquiry backend. The present site is static and does not send email.

## Sources reviewed (21 October 2026)

- ICO UK GDPR privacy requirements: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/
- ICO PECR storage/access guidance (updated 29 April 2026): https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/
- Electronic Commerce Regulations 2002, regulation 6: https://www.legislation.gov.uk/uksi/2002/2013/regulation/6
- Sole trader business name disclosures: https://www.gov.uk/become-sole-trader/choose-your-business-name
- Sole trader registration: https://www.gov.uk/become-sole-trader/register-sole-trader
- WCAG motion guidance: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions

## CI validation

GitHub Actions should run TypeScript checks, Vitest, legal content checks and production build. A successful CI run confirms that source checks passed, **not** UK law compliance.

