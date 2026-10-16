import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { StepId } from "@/lib/site";
import { OpsMap } from "./OpsMap";
import { Annotation, useAudit } from "./primitives";

export function Hero() {
  const { open } = useAudit();
  const [active, setActive] = useState<StepId>("booking");
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const fade = (d: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36"
      style={{ background: "radial-gradient(500px circle at var(--mx, 70%) var(--my, 30%), color-mix(in oklab, var(--primary) 9%, transparent), transparent 60%)" }}
    >
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden />
      <div className="starfield absolute inset-0" aria-hidden />
      <div className="orbit pointer-events-none absolute -right-24 top-16 hidden h-[620px] w-[620px] lg:block" aria-hidden><span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lilac shadow-[var(--glow-primary)]" /></div>
      <div className="blob -right-40 top-10 h-[420px] w-[420px] bg-primary/20" aria-hidden />
      <div className="blob -left-40 bottom-0 h-[300px] w-[300px] bg-lilac/10" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-10">
        <div className="hero-copy">
          <p className="hero-fieldnote" aria-hidden="true">ByKira / fieldwork series &nbsp;—&nbsp; No. 001</p>
          <motion.p {...fade(0)} className="label-mono inline-flex items-center gap-2.5 rounded-full border border-foreground/12 bg-surface px-3.5 py-2 text-foreground">
            <span className="status-ring h-2 w-2 rounded-full bg-lilac" aria-hidden />
            Free operations audit
          </motion.p>
          <motion.h1 {...fade(0.08)} className="hero-display mt-7 font-display text-[2.7rem] leading-[0.98] tracking-tight sm:text-6xl lg:text-[5.4rem]">
            Before we build,
            <br />
            we trace how your
            <br />
            business <em className="relative text-lilac">actually runs.<svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full text-leak" aria-hidden><path d="M4 14 C 80 4, 200 4, 296 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg></em>
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            One call. One customer journey. We find the slow handoffs, the repetitive admin, and what could work better.
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="pill" size="xl" onClick={open}>
              Book a free audit <ArrowRight />
            </Button>
            <Button variant="line" size="xl" asChild>
              <a href="#work">Explore the sample map</a>
            </Button>
          </motion.div>
          <motion.ul {...fade(0.32)} className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["100% free", "No obligation", "A real operations map"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/25 text-lilac" aria-hidden><Check className="h-3 w-3" /></span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, rotate: 0, y: 30 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mr-6"
        >
          <OpsMap active={active} onSelect={setActive} />
          <Annotation className="absolute -left-4 -top-14 hidden rotate-[-6deg] lg:block">
            Find leaks. Get fixes.<br />Keep the map. ↘
          </Annotation>
          <Annotation className="absolute -bottom-10 right-2 hidden rotate-[-3deg] sm:block">
            ↖ tap a stop to see what we look for
          </Annotation>
        </motion.div>
      </div>
      <div className="hero-footer-rule relative mx-auto mt-20 max-w-7xl px-5 md:px-8" aria-hidden="true">
        <span>Observe what happens</span>
        <span className="hero-footer-track" />
        <span>Then make it better / BK—001</span>
      </div>
    </section>
  );
}
