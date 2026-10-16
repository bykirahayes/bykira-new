import { Eyebrow, Reveal, Annotation } from "./primitives";
import { cn } from "@/lib/utils";

const OUTLINE = [
  { t: "00:00", title: "How things run today", body: "You talk, we listen. Which tools, which people, which bits feel heavier than they should.", span: "md:col-span-7" },
  { t: "10:00", title: "One customer, start to finish", body: "We pick a recent customer and trace them through inquiry, booking, payment and records.", span: "md:col-span-5 md:mt-24" },
  { t: "30:00", title: "Where it slows down", body: "We point out the handoffs and repeats as we hear them, so nothing is a surprise later.", span: "md:col-span-5 md:col-start-2" },
  { t: "40:00", title: "What happens next", body: "We agree what goes into your map. No proposal, no pitch deck at the end.", span: "md:col-span-5 md:col-start-8 md:-mt-10" },
];

export function Call() {
  return (
    <section id="approach" className="relative border-y border-line py-24 md:py-36">
      <span className="studio-index" aria-hidden="true">02 / Listen</span>
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Eyebrow n="02">The approach</Eyebrow>
            <h2 className="studio-section-heading mt-6 font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
              45 minutes.
              <br />
              <em className="text-lilac">One call.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 md:pt-16">
            <p className="text-lg text-muted-foreground">
              A video call with screen-sharing if it helps. Bring the tools you actually use, even the messy spreadsheet. Especially the messy spreadsheet.
            </p>
            <Annotation className="mt-4 rotate-[-1.5deg]">no prep needed, honestly →</Annotation>
          </Reveal>
        </div>

        {/* time ruler */}
        <div className="mt-16 hidden items-center gap-2 md:flex" aria-hidden>
          {Array.from({ length: 46 }).map((_, i) => (
            <span key={i} className={cn("w-px flex-1 bg-foreground/15", i % 15 === 0 ? "h-5 bg-lilac/70" : i % 5 === 0 ? "h-3" : "h-1.5")} />
          ))}
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-12 md:gap-x-6 md:gap-y-12">
          {OUTLINE.map((o, i) => (
            <Reveal key={o.t} delay={i * 0.06} className={o.span}>
              <li className={cn("group relative border-l border-foreground/15 pl-6", i === 0 && "md:border-l-0 md:pl-0")}>
                <span className="label-mono text-lilac">{o.t}</span>
                <h3 className={cn("mt-3 font-display leading-tight", i === 0 ? "text-4xl md:text-5xl" : "text-3xl")}>{o.title}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{o.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
