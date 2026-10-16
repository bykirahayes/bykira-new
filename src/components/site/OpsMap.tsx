import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CalendarCheck, CreditCard, FileText, AlertCircle, Settings2, ArrowRight } from "lucide-react";
import { JOURNEY, type StepId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Tag } from "./primitives";
import type { KeyboardEvent } from "react";

const ICONS: Record<StepId, typeof MessageCircle> = {
  inquiry: MessageCircle,
  booking: CalendarCheck,
  payment: CreditCard,
  records: FileText,
};
// tile vertical offsets (staggered, like a 3D board)
const OFFSET = ["mt-10", "mt-14", "mt-12", "mt-16"];

export function OpsMap({ active, onSelect }: { active: StepId; onSelect: (id: StepId) => void }) {
  const step = JOURNEY.find((s) => s.id === active)!;
  const idx = JOURNEY.findIndex((s) => s.id === active);

  const onKey = (e: KeyboardEvent) => {
    if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      onSelect(JOURNEY[(idx + 1) % 4].id);
    } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      onSelect(JOURNEY[(idx + 3) % 4].id);
    }
  };

  return (
    <div className="glass relative overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="font-display text-lg leading-none">ByKira<span className="text-lilac">✦</span></span>
        <span className="label-mono hidden text-muted-foreground sm:inline">operations-map / sample</span>
        <Tag>Example</Tag>
      </div>

      <div className="dot-grid relative px-3 pb-6 pt-4 sm:px-5">
        {/* journey line */}
        <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-3 top-6 h-16 w-[calc(100%-1.5rem)]" aria-hidden>
          <path d="M20 45 C 70 10, 110 10, 150 30 S 230 55, 260 25 S 340 10, 385 40" fill="none" stroke="var(--primary)" strokeOpacity=".35" strokeWidth="6" strokeLinecap="round" />
          <path d="M20 45 C 70 10, 110 10, 150 30 S 230 55, 260 25 S 340 10, 385 40" fill="none" stroke="var(--leak)" strokeWidth="1.6" className="dash-flow" strokeLinecap="round" />
        </svg>

        {/* floating leak callout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-2 z-10 hidden items-start gap-2 rounded-lg border border-leak/50 bg-background/80 px-2.5 py-1.5 shadow-[0_0_24px_-6px_var(--leak)] backdrop-blur sm:flex"
            style={{ left: `${8 + idx * 22}%` }}
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-leak" />
            <div>
              <p className="label-mono !text-[0.55rem] text-leak">Leak</p>
              <p className="text-xs text-foreground">{step.friction}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div role="tablist" aria-label="Journey milestones" className="relative grid grid-cols-4 gap-2 sm:gap-3" onKeyDown={onKey}>
          {JOURNEY.map((s, i) => {
            const Icon = ICONS[s.id];
            const on = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={on}
                aria-controls="hero-map-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => onSelect(s.id)}
                className={cn(
                  "group flex flex-col items-center gap-2 rounded-xl border px-1 py-4 transition-all duration-300 sm:py-5",
                  OFFSET[i],
                  on
                    ? "-translate-y-1 border-primary/70 bg-primary/15 shadow-[var(--glow-primary)]"
                    : "border-foreground/12 bg-card/70 hover:border-lilac/50",
                )}
              >
                <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", on ? "text-lilac" : "text-muted-foreground group-hover:text-foreground")}>
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <span className={cn("text-[0.7rem] font-semibold sm:text-sm", on ? "text-foreground" : "text-muted-foreground")}>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="hero-map-panel" role="tabpanel" aria-live="polite" className="border-t border-line p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 p-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[var(--glow-primary)]">
              <Settings2 className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="label-mono !text-[0.58rem] text-lilac">Suggested fix</p>
              <p className="text-sm text-foreground">{step.improvement}</p>
              <p className="mt-0.5 text-xs text-muted-foreground sm:hidden">Leak: {step.friction}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
