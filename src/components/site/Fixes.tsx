import { useState } from "react";
import { Check, CircleCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, Reveal, Tag } from "./primitives";

function Panel({ tone, title, children, className }: { tone: "leak" | "fix"; title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("glass studio-case flex flex-col rounded-3xl p-5 md:p-6", tone === "leak" ? "studio-case--leak" : "studio-case--fix", className)}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <Tag tone={tone}>{tone === "leak" ? "● Before" : "→ Better"}</Tag>
        <span className="label-mono !text-[0.6rem] text-muted-foreground">Illustrative UI</span>
      </div>
      <h3 className="font-display text-3xl leading-tight">{title}</h3>
      <div className="mt-6 flex-1">{children}</div>
    </div>
  );
}

function Thread() {
  const msgs = [
    { me: false, t: "Hi! Do you have anything next week?" },
    { me: true, t: "Should do, what day suits?" },
    { me: false, t: "Tuesday or Wed afternoon?" },
    { me: true, t: "Tues is full, Wed 2pm?" },
    { me: false, t: "Ah could you do 3?" },
  ];
  return (
    <div className="space-y-2" aria-label="Example message thread">
      {msgs.map((m, i) => (
        <p key={i} className={cn("max-w-[80%] rounded-2xl px-3.5 py-2 text-sm", m.me ? "ml-auto bg-foreground/10" : "bg-foreground/5 text-muted-foreground")}>{m.t}</p>
      ))}
      <p className="label-mono flex items-center gap-1.5 pt-2 text-leak"><Clock className="h-3 w-3" /> Unread · 2 days</p>
    </div>
  );
}

const DAYS = ["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16"];
const SLOTS = ["09:30", "11:00", "13:30", "15:00", "16:30"];

function Booking() {
  const [day, setDay] = useState(2);
  const [slot, setSlot] = useState<string | null>(null);
  return (
    <div>
      <div role="radiogroup" aria-label="Choose a day" className="grid grid-cols-5 gap-1.5">
        {DAYS.map((d, i) => {
          const [w, n] = d.split(" ");
          return (
            <button
              key={d}
              role="radio"
              aria-checked={day === i}
              onClick={() => { setDay(i); setSlot(null); }}
              className={cn("flex min-h-14 flex-col items-center justify-center rounded-xl border text-xs transition-all duration-200", day === i ? "border-primary bg-primary text-primary-foreground" : "border-line hover:border-lilac/50")}
            >
              <span className="opacity-70">{w}</span>
              <span className="text-base font-semibold">{n}</span>
            </button>
          );
        })}
      </div>
      <div role="radiogroup" aria-label="Choose a time" className="mt-3 grid grid-cols-3 gap-1.5 sm:grid-cols-5">
        {SLOTS.map((s, i) => {
          const taken = (i + day) % 4 === 0;
          return (
            <button
              key={s}
              role="radio"
              aria-checked={slot === s}
              disabled={taken}
              onClick={() => setSlot(s)}
              className={cn("min-h-11 rounded-lg border text-sm transition-all duration-200", slot === s ? "border-lilac bg-lilac/20 text-foreground" : "border-line hover:border-lilac/50", taken && "line-through")}
            >
              {s}
            </button>
          );
        })}
      </div>
      <p className="mt-4 min-h-6 text-sm text-lilac" aria-live="polite">
        {slot ? `✓ ${DAYS[day]} at ${slot} held — confirmation sent (simulated)` : "Pick a time to see the confirmation."}
      </p>
    </div>
  );
}

const ITEMS = ["Check bank app for transfer", "Match reference to invoice", "Update spreadsheet", "Message customer"];

function Checklist() {
  const [done, setDone] = useState<boolean[]>([true, false, false, false]);
  return (
    <ul className="space-y-1.5">
      {ITEMS.map((it, i) => (
        <li key={it}>
          <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 hover:bg-foreground/5">
            <input type="checkbox" className="peer sr-only" checked={done[i]} onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))} />
            <span className="flex h-5 w-5 items-center justify-center rounded border border-foreground/30 peer-checked:border-leak peer-checked:bg-leak/20 peer-focus-visible:outline-2 peer-focus-visible:outline-lilac">
              {done[i] && <Check className="h-3.5 w-3.5 text-leak" />}
            </span>
            <span className={cn("text-sm", done[i] && "text-muted-foreground line-through")}>{it}</span>
          </label>
        </li>
      ))}
      <li className="label-mono pt-2 text-leak">{done.filter(Boolean).length}/4 steps · done by hand</li>
    </ul>
  );
}

function Confirmed() {
  return (
    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5">
      <CircleCheck className="h-8 w-8 text-lilac" />
      <p className="mt-3 font-display text-2xl">Payment confirmed</p>
      <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
        <div className="flex justify-between"><dt>Booking</dt><dd>Sample customer</dd></div>
        <div className="flex justify-between"><dt>Receipt</dt><dd>Sent automatically</dd></div>
        <div className="flex justify-between"><dt>Record</dt><dd>Updated</dd></div>
      </dl>
    </div>
  );
}

export function Fixes() {
  return (
    <section className="relative border-t border-line py-24 md:py-36" aria-labelledby="fixes-h">
      <span className="studio-index" aria-hidden="true">04 / Prototype</span>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow n="04">Examples</Eyebrow>
          <h2 id="fixes-h" className="studio-section-heading mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
            Small fixes. <em className="text-lilac">Less friction.</em>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">Most improvements aren't dramatic. They're the kind of thing you stop noticing because it just works. Have a play.</p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
          <Reveal className="md:col-span-2"><Panel tone="leak" title="The endless thread" className="h-full"><Thread /></Panel></Reveal>
          <Reveal delay={0.08} className="md:col-span-4"><Panel tone="fix" title="Pick a slot, done." className="h-full"><Booking /></Panel></Reveal>
          <Reveal className="md:col-span-3 md:col-start-2"><Panel tone="leak" title="The Friday payment check" className="h-full"><Checklist /></Panel></Reveal>
          <Reveal delay={0.08} className="md:col-span-2"><Panel tone="fix" title="Already handled" className="h-full"><Confirmed /></Panel></Reveal>
        </div>
      </div>
    </section>
  );
}
