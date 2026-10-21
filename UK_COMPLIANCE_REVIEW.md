# ByKira: UK website compliance review

**Reviewed:** 21 October 2026  
**Repository:** bykirahayes/bykira-new  
**Method:** Static source inspection, colour-contrast calculation, and comparison with ICO, legislation.gov.uk and GOV.UK guidance. **Not** a legal opinion, live browser audit, penetration test, cookie-network capture or certification.

## Status: NOT VERIFIED COMPLIANT — action required before public launch

| Area | Static inspection result | Required next step |
| --- | --- | --- |
| Brand palette | Updated to six specified tokens in `src/styles.css`. Contrast checks: Royal Violet on Obsidian ~4.55:1; Obsidian on Royal Violet ~4.55:1; Neon Lilac on Obsidian ~7.53:1; Silver on Obsidian ~9.13:1. | Run automated and manual browser contrast checks on ALL states, especially alpha overlays, hover states and disabled text. |
| UK business identity and contact | **BLOCKER.** No verified legal operator name, geographical business address or email is configured. `CONTACT_EMAIL` is null. | Add the operator's true legal name, geographical address, direct email, and company registration number/registered office/jurisdiction/VAT number **if applicable**. Do not invent details. Review E-Commerce Regulations 2002 reg. 6 and Companies House requirements. |
| Privacy (UK GDPR) | **INCOMPLETE.** New interim Privacy & cookies dialog accurately explains the local-only enquiry form and visible external services. This is **not** a complete Article 13 notice. | Confirm operator identity/contact, purposes, lawful bases, recipients/hosting, transfers, retention, rights, complaints process, and publish a final notice at data collection points. |
| Cookies/PECR | App code does not visibly configure analytics/advertising cookies. Google Fonts is externally loaded; hosting and Lovable preview behaviour have **not** been tested. | Test the deployed site with clean-browser storage, request inspection and consent state. Block consent-requiring non-essential storage until permitted. A banner is not automatically required if none exists. Check current ICO guidance including DUA Act exemptions. |
| Enquiry integrity | **Improved.** Wording now makes clear the form neither sends nor books anything. It prepares text for copying or email once verified email is configured. | Supply a real monitored email or secure backend and revise privacy notice before accepting messages. Test end-to-end. |
| Accessibility | Existing skip link, page language, visible focus, semantic sections, form error associations and reduced-motion support. Hero map keyboard tab handling improved. | Perform keyboard/screen-reader audit at 320px/mobile and axe/Lighthouse/WCAG 2.2 AA audit. Dynamic rendering and all hover/contrast conditions are **not verified**. |
| Accuracy of advertising | Sample UI and example map are identified as illustrative. No checkout exists. Free audit, 45-minute call and 48-hour delivery are claims present in content. | Confirm you can actually provide these promised services and times; if not, change the claims. Clarify any eligibility/limitations. |
| Consumer sales / checkout | No real payment, ordering or checkout in audited app. | If future services are sold online, implement applicable pre-contract information, pricing, cancellation and payment disclosures. |
| Security and platform | No app-side analytics token or service backend in reviewed files. Lovable-specific runtime error reporting hooks are present. | Check external CDN/fonts, privacy policies, hosting logs, HTTPS, security headers, CSP, dependencies, deploy provider and data processors. No vulnerability or dependency scanner was executed in this review. |

## Main relevant official sources

- ICO privacy information: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/
- ICO cookies/privacy for small businesses: https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/cookies-and-privacy-notices-in-detail/
- Electronic Commerce Regulations (reg. 6): https://www.legislation.gov.uk/uksi/2002/2013/regulation/6
- Companies House site disclosure: https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material
- GOV.UK online selling rules (if checkout added): https://www.gov.uk/online-and-distance-selling-for-businesses/online-selling

## Release criteria

1. Provide verified business identity, address and direct email.
2. Replace interim notice with a complete accurate UK GDPR notice for real processing.
3. Test cookies/storage/tracking on actual production hosting; implement consent **if applicable**.
4. Run a real browser/mobile keyboard + WCAG accessibility audit.
5. Verify Free Audit offer and lead-delivery behaviour.
6. Confirm CI build/test/lint and hosting HTTPS. A GitHub source review is not deployment verification.
