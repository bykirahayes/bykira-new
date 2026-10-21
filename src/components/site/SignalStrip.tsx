import { ArrowUpRight, Sparkles } from "lucide-react";

const MESSAGES = ["Human-first design", "Sharper systems", "Less admin", "More momentum"];

export function SignalStrip() {
  return (
    <section className="signal-shell" aria-label="ByKira's focus">
      <p className="sr-only">Human-first design. Sharper systems. Less administration. More momentum.</p>
      <div className="signal-viewport" aria-hidden="true">
        <div className="signal-track">
          {[0, 1].map((repeat) => (
            <div className="signal-sequence" key={repeat}>
              {MESSAGES.map((message, index) => (
                <span className="signal-item" key={message}>
                  {index % 2 === 0 ? <Sparkles className="h-4 w-4 text-lilac" /> : <ArrowUpRight className="h-4 w-4 text-lilac" />}
                  {message}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
