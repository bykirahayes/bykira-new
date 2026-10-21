import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wordmark, useAudit } from "./primitives";

const NAV = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "what-you-get", label: "What you get" },
  { id: "contact", label: "Contact" },
];

export function Header({ motionPaused, onToggleMotion }: { motionPaused: boolean; onToggleMotion: () => void }) {
  const { open } = useAudit();
  const [active, setActive] = useState("");
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line bg-background/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-5">
          <a href="#top" aria-label="ByKira, back to top" className="flex min-h-11 items-center">
            <Wordmark />
          </a>
          <span className="studio-nav-note hidden lg:block">Sites &amp; systems<br />made with intention.</span>
        </div>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-200",
                    active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/8 ring-1 ring-foreground/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMotion}
            aria-pressed={motionPaused}
            aria-label={motionPaused ? "Resume decorative animations" : "Pause decorative animations"}
            title={motionPaused ? "Resume animations" : "Pause animations"}
            className="motion-control inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-lilac transition-colors hover:border-lilac/50 hover:bg-primary/10"
          >
            {motionPaused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
          </button>
          <Button variant="pill" className="hidden h-10 px-5 sm:inline-flex" onClick={open}>
            Request a free audit
          </Button>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary to-lilac" style={{ width: `${progress * 100}%` }} aria-hidden />
      <AnimatePresence>
        {menu && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-line bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-5 pb-6 pt-2">
              {NAV.map((n, i) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setMenu(false)}
                    className="flex min-h-12 items-center justify-between border-b border-line font-display text-3xl"
                  >
                    {n.label}
                    <span className="label-mono text-muted-foreground">0{i + 1}</span>
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button variant="pill" size="xl" className="w-full" onClick={() => { setMenu(false); open(); }}>
                  Request a free audit
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
