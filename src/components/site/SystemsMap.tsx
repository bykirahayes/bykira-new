import type { KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Headset, KeyRound, Network, ShieldCheck } from "lucide-react";
import { SYSTEMS, type NodeId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Tag } from "./primitives";

const ICONS: Record<NodeId, typeof Headset> = { support: Headset, identity: KeyRound, network: Network, security: ShieldCheck };
// node positions in a 400x300 viewBox, as percentages for the buttons
const POS: Record<NodeId, { x: number; y: number }> = {
  support: { x: 70, y: 70 },
  identity: { x: 330, y: 60 },
  network: { x: 85, y: 235 },
  security: { x: 320, y: 240 },
};
const HUB = { x: 200, y: 150 };

export function SystemsMap({ active, onSelect }: { active: NodeId; onSelect: (id: NodeId) => void }) {
  const node = SYSTEMS.find((s) => s.id === active)!;
  const idx = SYSTEMS.findIndex((s) => s.id === active);

  const onKey = (e: KeyboardEvent) => {
    if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      const next = SYSTEMS[(idx + 1) % 4]!.id;
      onSelect(next);
      document.getElementById(`node-${next}`)?.focus();
    } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      const prev = SYSTEMS[(idx + 3) % 4]!.id;
      onSelect(prev);
      document.getElementById(`node-${prev}`)?.focus();
    }
  };

  return (
    <div className="glass frame relative overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="font-display text-lg leading-none">systems<span className="text-lilac">.map</span></span>
        <span className="label-mono hidden text-muted-foreground sm:inline">what I work across</span>
        <Tag tone="accent">Interactive</Tag>
      </div>

      <div className="blueprint relative aspect-[4/3]">
        <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx={HUB.x} cy={HUB.y} r="58" fill="none" stroke="var(--lilac)" strokeOpacity=".18" strokeDasharray="2 5" />
          <circle cx={HUB.x} cy={HUB.y} r="100" fill="none" stroke="var(--lilac)" strokeOpacity=".08" />
          {SYSTEMS.map((s) => {
            const p = POS[s.id];
            const on = s.id === active;
            const d = `M${HUB.x} ${HUB.y} Q ${(HUB.x + p.x) / 2 + (p.y < 150 ? -30 : 30)} ${(HUB.y + p.y) / 2}, ${p.x} ${p.y}`;
            return (
              <g key={s.id}>
                <path d={d} fill="none" stroke="var(--primary)" strokeOpacity={on ? 0.5 : 0.18} strokeWidth={on ? 5 : 3} strokeLinecap="round" />
                <path d={d} fill="none" stroke={on ? "var(--lilac)" : "var(--muted-foreground)"} strokeOpacity={on ? 1 : 0.4} strokeWidth="1.3" className={on ? "dash-flow" : undefined} strokeDasharray={on ? undefined : "2 6"} />
              </g>
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/50 bg-background/80 text-center shadow-[var(--glow-primary)] backdrop-blur">
          <span className="font-display text-2xl leading-none">KP<span className="text-lilac">.</span></span>
          <span className="label-mono mt-1 !text-[0.5rem] text-muted-foreground">learning</span>
        </div>

        <div role="tablist" aria-label="Systems focus areas" onKeyDown={onKey}>
          {SYSTEMS.map((s) => {
            const Icon = ICONS[s.id];
            const on = s.id === active;
            const p = POS[s.id];
            return (
              <button
                key={s.id}
                id={`node-${s.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="systems-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => onSelect(s.id)}
                style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 300) * 100}%` }}
                className={cn(
                  "group absolute flex min-h-11 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border px-2.5 py-2 transition-all duration-300 sm:px-3",
                  on ? "border-primary/80 bg-primary/20 shadow-[var(--glow-primary)]" : "border-foreground/12 bg-card/85 hover:border-lilac/60",
                )}
              >
                <Icon className={cn("h-4 w-4 shrink-0", on ? "text-lilac" : "text-muted-foreground group-hover:text-foreground")} strokeWidth={1.7} />
                <span className={cn("text-xs font-semibold", on ? "text-foreground" : "text-muted-foreground")}>
                  <span className="sm:hidden">{s.short}</span>
                  <span className="hidden sm:inline">{s.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="systems-panel" role="tabpanel" aria-live="polite" className="border-t border-line p-4 sm:p-5">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
            <p className="label-mono text-lilac">{node.n} / {node.label}</p>
            <ul className="mt-3 grid gap-1.5 text-sm text-foreground sm:grid-cols-3 sm:gap-3">
              {node.focus.map((f) => (
                <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lilac" aria-hidden />{f}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm leading-relaxed text-muted-foreground">
              <span className="label-mono mr-2 text-lilac">e.g.</span>{node.example}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}