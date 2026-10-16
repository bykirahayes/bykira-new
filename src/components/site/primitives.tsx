import { createContext, useContext, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AuditContext = createContext<{ open: () => void }>({ open: () => {} });
export const useAudit = () => useContext(AuditContext);

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("inline-block", className)} fill="currentColor">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("studio-wordmark inline-flex items-start font-display text-2xl leading-none tracking-tight", className)}>
      ByKira
      <Star className="ml-0.5 mt-0.5 h-2.5 w-2.5 text-lilac" />
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

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "leak" | "fix" }) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 !text-[0.6rem]",
        tone === "neutral" && "border-foreground/15 text-muted-foreground",
        tone === "leak" && "border-leak/40 bg-leak/10 text-leak",
        tone === "fix" && "border-primary/50 bg-primary/15 text-lilac",
      )}
    >
      {children}
    </span>
  );
}

/** Handwritten-ish marginal note */
export function Annotation({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-script text-xl leading-tight text-lilac/90", className)}>
      {children}
    </p>
  );
}
