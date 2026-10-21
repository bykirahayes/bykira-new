import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Describes behaviour actually present in this app. It is NOT a substitute for
 * verifying the hosting platform, identifying the legal operator or obtaining
 * UK legal advice. See UK_COMPLIANCE_REVIEW.md before going live.
 */
export function PrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
          Privacy &amp; cookies
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto rounded-2xl border-line bg-popover p-6 sm:rounded-2xl">
        <DialogHeader>
          <p className="label-mono text-lilac">ByKira / information</p>
          <DialogTitle className="font-display text-4xl font-normal">Privacy &amp; cookies</DialogTitle>
          <DialogDescription>How this website works, last reviewed 21 October 2026.</DialogDescription>
        </DialogHeader>
        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h3 className="font-semibold text-foreground">Audit enquiries</h3>
            <p>The audit form currently builds a message in your browser. It does not submit your name, email address or business details to a ByKira server, and it does not make a booking. Your details leave the page only if you choose to copy them or open and send them in your own email application.</p>
            <p>If you send us an enquiry by email, the recipient may use it to respond and arrange services. Email processing and retention details still need to be confirmed before a full privacy notice can be published.</p>
          </section>
          <section className="space-y-2">
            <h3 className="font-semibold text-foreground">Cookies and external services</h3>
            <p>The website application code does not install analytics, advertising or marketing cookies. On GitHub Pages, GitHub may process connection and security logs to deliver the website. The live deployment still needs a browser-based cookie and storage check.</p>
            <p>This site loads typefaces from Google Fonts, so your browser makes requests to Google servers. The site uses GitHub Pages for hosting, which may process technical connection information. Check these providers' current notices before publication.</p>
          </section>
          <section className="space-y-2">
            <h3 className="font-semibold text-foreground">Your information and rights</h3>
            <p>UK data protection law gives individuals rights over personal information, subject to applicable conditions, including rights to access, correction, erasure, objection and to complain to the Information Commissioner's Office.</p>
            {CONTACT_EMAIL ? (
              <p>Contact us at <a className="text-lilac underline underline-offset-4" href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a> about an enquiry or a privacy request.</p>
            ) : (
              <p className="font-medium text-foreground">The operator's verified contact details have not yet been configured. The legal identity, business address and contact email must be published before this notice is complete.</p>
            )}
            <p><a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-lilac underline underline-offset-4">Information Commissioner's Office: how to complain (opens in new tab)</a>.</p>
          </section>
          <p className="border-t border-line pt-4 text-xs">This is interim site information, not a final UK GDPR privacy notice. It will be updated when the business operator, providers, processing purposes and retention periods are confirmed.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
