import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="monogram flex h-10 w-10 items-center justify-center rounded-xl font-display text-xl leading-none">
        KP<span className="text-lilac">.</span>
      </span>
      <span className="label-mono hidden !text-[0.7rem] text-foreground sm:inline">Kian Price</span>
    </span>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ n, children, className }: { n: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("label-mono flex items-center gap-3 text-muted-foreground", className)}>
      <span className="text-lilac">{n}</span>
      <span className="h-px w-8 bg-foreground/20" aria-hidden />
      {children}
    </p>
  );
}

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "accent" }) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 !text-[0.6rem]",
        tone === "neutral" ? "border-foreground/15 text-muted-foreground" : "border-primary/50 bg-primary/15 text-lilac",
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({ n, eyebrow, title, intro }: { n: string; eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow n={n}>{eyebrow}</Eyebrow>
      <h2 className="section-heading mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}