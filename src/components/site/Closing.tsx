import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrivacyDialog } from "./PrivacyDialog";
import { Annotation, Eyebrow, Reveal, Star, Wordmark, useAudit } from "./primitives";

export function About() {
  return (
    <section className="relative border-t border-line py-24 md:py-32" aria-labelledby="about-h">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-3">
          <Eyebrow n="05">The studio</Eyebrow>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-8">
          <h2 id="about-h" className="font-display text-4xl leading-[1.05] md:text-6xl">
            ByKira designs <em className="text-lilac">the useful bits</em> first.
          </h2>
          <div className="mt-8 grid gap-6 text-muted-foreground md:grid-cols-2">
            <p>We're a small digital studio. We build websites and tidy up the workflows behind them, but only once we understand how the work really moves.</p>
            <p>That means drawing the system before choosing the software. Sometimes the answer is a new site. Sometimes it's a better form and one automation. We'll tell you which.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EndCTA() {
  const { open } = useAudit();
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line pt-24 md:pt-36">
      <span className="studio-index" aria-hidden="true">05 / Next steps</span>
      <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="blob -right-20 top-20 h-[460px] w-[460px] bg-primary/20" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <span className="studio-legend mb-7">Think first. Build the right thing.</span>
          <h2 className="font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-8xl">
            No obligation.
            <br />
            <em className="text-lilac">Keep the map</em>
            <br />
            either way.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="pill" size="xl" onClick={open}>Request your free audit <ArrowRight /></Button>
            <Annotation>takes about two minutes</Annotation>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex justify-center lg:col-span-4 lg:col-start-9">
          <div className="w-64 rotate-6 rounded-xl bg-paper p-5 text-paper-foreground shadow-[var(--shadow-panel)] transition-transform duration-300 hover:rotate-3 sm:w-72" aria-hidden>
            <p className="flex items-center gap-2 font-mono text-xs"><FileText className="h-4 w-4" /> operations-map.pdf</p>
            <svg viewBox="0 0 200 120" className="mt-4 w-full">
              <path d="M10 100 C 60 20, 90 110, 130 50 S 180 30, 190 20" fill="none" stroke="currentColor" strokeOpacity=".45" strokeDasharray="2 4" />
              <circle cx="10" cy="100" r="5" fill="var(--primary)" />
              <circle cx="88" cy="78" r="5" fill="var(--leak)" />
              <circle cx="130" cy="50" r="5" fill="var(--primary)" />
              <circle cx="190" cy="20" r="5" fill="var(--primary)" />
            </svg>
            <div className="mt-3 space-y-1.5">
              {[90, 70, 80].map((w) => <div key={w} className="h-1.5 rounded bg-paper-foreground/10" style={{ width: `${w}%` }} />)}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-24 max-w-7xl border-t border-line px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Wordmark className="text-5xl md:text-7xl" />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">Websites and workflow improvements for service businesses.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li><a className="inline-flex min-h-11 items-center hover:text-foreground" href="#work">Work</a></li>
              <li><a className="inline-flex min-h-11 items-center hover:text-foreground" href="#approach">Approach</a></li>
              <li><a className="inline-flex min-h-11 items-center hover:text-foreground" href="#what-you-get">What you get</a></li>
              <li><PrivacyDialog /></li>
              <li><a className="inline-flex min-h-11 items-center hover:text-foreground" href="#top">Back to top ↑</a></li>
            </ul>
          </nav>
        </div>
        <p className="label-mono mt-8 flex items-center gap-2 text-muted-foreground">
          <Star className="h-2 w-2 text-lilac" /> © {new Date().getFullYear()} ByKira · Examples on this site are illustrative
        </p>
      </div>
    </footer>
  );
}
