import { useMemo, useState } from "react";
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
import { Toaster } from "@/components/ui/sonner";

// One-page static app. Anchor links, interactive examples, print,
// accessible dialogs and the client-side enquiry composer all work
// without a Node, Lovable or TanStack server.
export function App() {
  const [open, setOpen] = useState(false);
  const ctx = useMemo(() => ({ open: () => setOpen(true) }), []);

  return (
    <MotionConfig reducedMotion="user">
      <AuditContext.Provider value={ctx}>
        <div className="grain relative">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          >
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
          <Toaster />
        </div>
      </AuditContext.Provider>
    </MotionConfig>
  );
}
