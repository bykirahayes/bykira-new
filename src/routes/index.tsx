import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About, Contact, ExperienceSection, Footer, Projects, Toolkit } from "@/components/site/Sections";

const TITLE = "Kian Price | Portfolio";
const DESC = "Kian Price — UK-based IT apprentice focused on IT support, Microsoft 365, identity, networks and well-documented troubleshooting.";

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
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <About />
          <ExperienceSection />
          <Toolkit />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}