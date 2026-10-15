import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Journey } from "@/components/site/Journey";
import { Call } from "@/components/site/Call";
import { Deliverable } from "@/components/site/Deliverable";
import { Fixes } from "@/components/site/Fixes";
import { About, EndCTA } from "@/components/site/Closing";
import { AuditDialog } from "@/components/site/AuditDialog";
import { AuditContext } from "@/components/site/primitives";

const TITLE = "ByKira — Free Operations Audit for service businesses";
const DESC = "One 45-minute call, one customer journey. We map the slow handoffs and repetitive admin, and you keep the map within 48 hours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const ctx = useMemo(() => ({ open: () => setOpen(true) }), []);
  return (
    <MotionConfig reducedMotion="user">
      <AuditContext.Provider value={ctx}>
        <div className="grain relative">
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
            Skip to content
          </a>
          <Header />
          <main id="main">
            <Hero />
            <Journey />
            <Call />
            <Deliverable />
            <Fixes />
            <About />
          </main>
          <EndCTA />
          <AuditDialog open={open} onOpenChange={setOpen} />
        </div>
      </AuditContext.Provider>
    </MotionConfig>
  );
}
