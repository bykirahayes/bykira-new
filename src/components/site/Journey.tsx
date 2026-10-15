import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JOURNEY, type StepId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Eyebrow, Reveal, Tag, Annotation } from "./primitives";

export function Journey() {
  const [active, setActive] = useState<StepId>("inquiry");
  const idx = JOURNEY.findIndex((s) => s.id === active);
  const step = JOURNEY[idx];

  const onKey = (e: KeyboardEvent) => {
    const k = e.key;
    let n = idx;
    if (k === "ArrowDown" || k === "ArrowRight") n = (idx + 1) % 4;
    else if (k === "ArrowUp" || k === "ArrowLeft") n = (idx + 3) % 4;
    else return;
    e.preventDefault();
    setActive(JOURNEY[n].id);
    document.getElementById(`jtab-${JOURNEY[n].id}`)?.focus();
  };

  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <Eyebrow n="01">The journey</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
              Follow one customer.
              <br />
              <em className="text-muted-foreground">Find the friction.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-muted-foreground">
              We pick one real customer and walk their route from first message to filed record. Each stop gets the same three questions.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* winding step list */}
          <div role="tablist" aria-orientation="vertical" aria-label="Journey steps" onKeyDown={onKey} className="relative lg:col-span-5">
            <svg className="absolute left-[27px] top-6 h-[calc(100%-3rem)] w-10" viewBox="0 0 40 400" preserveAspectRatio="none" aria-hidden>
              <path d="M2 0 C 40 60, -30 140, 2 200 S 40 330, 2 400" fill="none" stroke="var(--lilac)" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
            </svg>
            {JOURNEY.map((s, i) => {
              const on = s.id === active;
              return (
                <button
                  key={s.id}
                  id={`jtab-${s.id}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="journey-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "relative flex w-full items-center gap-5 rounded-2xl py-5 pl-3 pr-4 text-left transition-colors duration-200",
                    on ? "bg-surface" : "hover:bg-surface/60",
                    i % 2 === 1 && "lg:ml-10 lg:w-[calc(100%-2.5rem)]",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-all duration-200",
                      on ? "border-primary bg-primary text-primary-foreground shadow-[var(--glow-primary)]" : "border-foreground/20 bg-background text-muted-foreground",
                    )}
                  >
                    {s.n}
                  </span>
                  <span className="min-w-0">
                    <span className={cn("block font-display text-3xl md:text-4xl", on ? "text-foreground" : "text-muted-foreground")}>
                      {on ? <em>{s.label}</em> : s.label}
                    </span>
                    <span className="block truncate text-sm text-muted-foreground">{s.friction}</span>
                  </span>
                  {on && <motion.span layoutId="jmark" className="absolute inset-y-4 right-3 w-0.5 rounded bg-lilac" />}
                </button>
              );
            })}
            <Annotation className="mt-6 pl-3 text-base">use ↑ ↓ to step through</Annotation>
          </div>

          {/* diagnostic panel */}
          <div id="journey-panel" role="tabpanel" aria-labelledby={`jtab-${active}`} className="lg:col-span-7">
            <div className="glass relative overflow-hidden rounded-3xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-6 py-4">
                <span className="label-mono text-muted-foreground">Diagnostic / stop {step.n} of 04</span>
                <Tag>Example audit</Tag>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="grid md:grid-cols-5"
                >
                  <div className="border-line p-6 md:col-span-2 md:border-r">
                    <p className="label-mono text-lilac">A · What we review</p>
                    <ul className="mt-4 space-y-3">
                      {step.reviewed.map((r) => (
                        <li key={r} className="flex gap-3 text-sm">
                          <span className="mt-2 h-px w-3 shrink-0 bg-foreground/40" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3">
                    <div className="border-b border-line p-6">
                      <p className="label-mono text-leak">B · Typical friction</p>
                      <p className="mt-3 font-display text-3xl leading-tight">{step.friction}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{step.frictionDetail}</p>
                    </div>
                    <div className="relative p-6">
                      <div className="blob -bottom-20 -right-10 h-40 w-40 bg-primary/25" aria-hidden />
                      <p className="label-mono text-lilac">C · A sensible improvement</p>
                      <p className="relative mt-3 font-display text-3xl italic leading-tight">{step.improvement}</p>
                      <p className="relative mt-2 text-sm text-muted-foreground">{step.improvementDetail}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Common patterns we look for, not findings about your business. Your map is based on your call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
