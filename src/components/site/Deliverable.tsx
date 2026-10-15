import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal, Tag, Annotation } from "./primitives";
import { SampleMapDialog } from "./SampleMapDialog";

const OUTPUTS = [
  { k: "Handoffs", v: "Every point where work passes between people, tools or the customer." },
  { k: "Bottlenecks", v: "Where things wait, repeat, or depend on someone remembering." },
  { k: "Practical improvements", v: "Changes sized to your business. Often tools you already pay for." },
  { k: "Priorities", v: "What to fix first, what can wait, and what isn't worth doing." },
];

export function Deliverable() {
  return (
    <section id="what-you-get" className="relative py-24 md:py-36">
      <div className="blob left-1/3 top-1/3 h-[380px] w-[380px] bg-primary/12" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow n="03">What you get</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
              You get a map,
              <br />
              <em className="text-lilac">not a sales pitch.</em>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Within 48 hours of the call, a short document lands in your inbox. Plain language, one page per stop, no jargon.
            </p>
          </Reveal>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {OUTPUTS.map((o, i) => (
              <Reveal key={o.k} delay={i * 0.05}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-2 py-5">
                  <span className="label-mono pt-1.5 text-lilac">0{i + 1}</span>
                  <div>
                    <dt className="font-display text-2xl">{o.k}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{o.v}</dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* document preview */}
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-20">
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-2 rounded-2xl border border-line bg-surface" aria-hidden />
            <figure className="relative rounded-2xl bg-paper p-6 text-paper-foreground shadow-[var(--shadow-panel)] md:p-8">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs"><FileText className="h-4 w-4" /> operations-map.pdf</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest opacity-60">Illustrative</span>
              </div>
              <p className="mt-6 font-display text-3xl leading-tight">Sample salon — <em>booking journey</em></p>
              <svg viewBox="0 0 300 90" className="mt-6 w-full" aria-hidden>
                <path d="M10 60 C 70 0, 110 90, 160 45 S 250 10, 290 50" fill="none" stroke="currentColor" strokeOpacity=".5" strokeDasharray="2 5" />
                {[10, 105, 195, 290].map((x, i) => (
                  <circle key={x} cx={x} cy={[60, 55, 32, 50][i]} r="6" fill={i === 1 ? "var(--leak)" : "var(--primary)"} />
                ))}
              </svg>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-current/10 p-3" style={{ borderColor: "color-mix(in oklab, var(--leak) 50%, transparent)" }}>
                  <p className="font-mono uppercase tracking-wider" style={{ color: "oklch(0.55 0.13 50)" }}>Bottleneck</p>
                  <p className="mt-1">Times agreed over four DMs</p>
                </div>
                <div className="rounded-lg border p-3" style={{ borderColor: "color-mix(in oklab, var(--primary) 50%, transparent)" }}>
                  <p className="font-mono uppercase tracking-wider text-primary">Improve</p>
                  <p className="mt-1">Booking link with live slots</p>
                </div>
              </div>
              <div className="mt-5 space-y-1.5" aria-hidden>
                {[92, 78, 85, 60].map((w) => (
                  <div key={w} className="h-1.5 rounded bg-paper-foreground/10" style={{ width: `${w}%` }} />
                ))}
              </div>
              <figcaption className="sr-only">Illustrative preview of an operations map document</figcaption>
            </figure>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <SampleMapDialog>
                <Button variant="ivory" size="xl">View example map</Button>
              </SampleMapDialog>
              <Tag>Illustrative example</Tag>
            </div>
            <Annotation className="mt-3">yours to keep, whatever you decide</Annotation>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
