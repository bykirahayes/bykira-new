import { motion, AnimatePresence } from "framer-motion";
import { JOURNEY, type StepId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Tag } from "./primitives";
import type { KeyboardEvent } from "react";

// Positions in a 400x320 viewBox
const POS: Record<StepId, { x: number; y: number }> = {
  inquiry: { x: 60, y: 70 },
  booking: { x: 300, y: 95 },
  payment: { x: 110, y: 215 },
  records: { x: 330, y: 255 },
};
const PATH = "M60 70 C 160 20, 220 140, 300 95 S 380 160, 250 170 S 40 160, 110 215 S 260 300, 330 255";

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
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="label-mono text-muted-foreground">operations-map / sample</span>
        <Tag>Example</Tag>
      </div>

      <div className="dot-grid relative">
        <svg viewBox="0 0 400 320" className="block w-full" role="img" aria-label="Customer journey line from Inquiry through Booking and Payment to Records">
          <path d={PATH} fill="none" stroke="var(--line)" strokeWidth="10" strokeLinecap="round" />
          <path d={PATH} fill="none" stroke="var(--lilac)" strokeWidth="1.5" className="dash-flow" strokeLinecap="round" />
          {/* orbital rings */}
          <circle cx={POS[active].x} cy={POS[active].y} r="26" fill="none" stroke="var(--primary)" strokeOpacity=".5" strokeDasharray="1 4" />
          <circle cx={POS[active].x} cy={POS[active].y} r="40" fill="none" stroke="var(--primary)" strokeOpacity=".2" />
        </svg>

        <div role="tablist" aria-label="Journey milestones" className="absolute inset-0" onKeyDown={onKey}>
          {JOURNEY.map((s) => {
            const p = POS[s.id];
            const on = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={on}
                aria-controls="hero-map-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => onSelect(s.id)}
                className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 p-1"
                style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 320) * 100}%` }}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border font-mono text-[0.65rem] transition-all duration-200",
                    on ? "border-primary bg-primary text-primary-foreground shadow-[var(--glow-primary)]" : "border-foreground/25 bg-background text-muted-foreground group-hover:border-lilac",
                  )}
                >
                  {s.n}
                </span>
                <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium backdrop-blur", on ? "bg-foreground/10 text-foreground" : "text-muted-foreground")}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="hero-map-panel" role="tabpanel" aria-live="polite" className="grid gap-3 border-t border-line p-4 sm:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "l"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="rounded-xl border border-leak/25 bg-leak/5 p-3"
          >
            <Tag tone="leak">● Leak</Tag>
            <p className="mt-2 text-sm text-foreground">{step.friction}</p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "r"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, delay: 0.05 }}
            className="rounded-xl border border-primary/30 bg-primary/10 p-3"
          >
            <Tag tone="fix">→ Better</Tag>
            <p className="mt-2 text-sm text-foreground">{step.improvement}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
