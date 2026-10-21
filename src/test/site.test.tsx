import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { App } from "@/App";
import { CONTACT_EMAIL, JOURNEY } from "@/lib/site";

describe("ByKira GitHub Pages site", () => {
  it("renders the complete landing page without a server router", () => {
    const markup = renderToStaticMarkup(<App />);
    expect(markup).toContain("Before we build");
    expect(markup).toContain("Request a free audit");
    expect(markup).toContain("Privacy &amp; cookies");
    expect(markup).toContain("View example map");
  });

  it("keeps journey steps available and does not pretend to send enquiries", () => {
    expect(JOURNEY.map((step) => step.id)).toEqual(["inquiry", "booking", "payment", "records"]);
    expect(CONTACT_EMAIL).toBeNull();
  });
});
