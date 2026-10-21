import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NodeId } from "@/lib/site";
import { SystemsMap } from "./SystemsMap";

export function Hero() {
  const [active, setActive] = useState<NodeId>("identity");
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
      style={{ background: "radial-gradient(520px circle at var(--mx, 70%) var(--my, 30%), color-mix(in oklab, var(--primary) 11%, transparent), transparent 60%)" }}
    >
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden />
      <div className="starfield absolute inset-0" aria-hidden />
      <div className="orbit pointer-events-none absolute -right-24 top-16 hidden h-[620px] w-[620px] lg:block" aria-hidden><span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lilac shadow-[var(--glow-primary)]" /></div>
      <div className="blob -right-40 top-10 h-[420px] w-[420px] bg-primary/25" aria-hidden />
      <div className="blob -left-40 bottom-0 h-[300px] w-[300px] bg-lilac/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.p {...fade(0)} className="label-mono inline-flex items-center gap-2.5 rounded-full border border-foreground/12 bg-surface px-3.5 py-2 text-foreground">
          <span className="status-ring h-2 w-2 rounded-full bg-lilac" aria-hidden />
          IT Apprentice / Support &amp; Systems
        </motion.p>
        <motion.h1 {...fade(0.08)} className="hero-display mt-6 font-display text-[4.2rem] leading-[0.85] tracking-[-0.03em] sm:text-[8rem] lg:text-[12rem]">
          Kian Price<span className="text-primary">.</span>
        </motion.h1>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-12">
          <div>
            <motion.p {...fade(0.16)} className="font-display text-3xl leading-tight sm:text-4xl">
              Curious by nature.<br /><em className="text-lilac">Technical by design.</em>
            </motion.p>
            <motion.p {...fade(0.22)} className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              I'm a UK-based IT apprentice building real skills through hands-on troubleshooting, cloud administration, networks and solutions that are written down properly — so the next person isn't starting from scratch.
            </motion.p>
            <motion.div {...fade(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="pill" size="xl" asChild>
                <a href="#projects">Explore my work <ArrowDownRight /></a>
              </Button>
              <Button variant="line" size="xl" asChild>
                <a href="#contact">Get in touch <ArrowRight /></a>
              </Button>
            </motion.div>
            <motion.p {...fade(0.34)} className="label-mono mt-10 text-muted-foreground">
              ↳ Tap a node on the map to see what I focus on
            </motion.p>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, rotate: 0, y: 30 }}
            animate={{ opacity: 1, rotate: -1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SystemsMap active={active} onSelect={setActive} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}