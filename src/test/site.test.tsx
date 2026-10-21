import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { App } from "@/App";
import { CONTACT_EMAIL, JOURNEY } from "@/lib/site";

describe("ByKira GitHub Pages site", () => {
  it("renders the complete landing page without a server router", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Before we build");
    expect(markup).toContain("Request a free audit");
    expect(markup).toContain("privacy.html");
    expect(markup).toContain("cookies.html");
    expect(markup).toContain("accessibility.html");
    expect(markup).toContain("Pause decorative animations");
    expect(markup).toContain("View example map");
    expect(markup).toContain("info@bykira.co.uk");
    expect(markup).toContain("mailto:info@bykira.co.uk");
  });

  it("keeps journey steps available and does not pretend to send enquiries", () => {
    expect(JOURNEY.map((step) => step.id)).toEqual(["inquiry", "booking", "payment", "records"]);
    expect(CONTACT_EMAIL).toBe("info@bykira.co.uk");
  });
});
