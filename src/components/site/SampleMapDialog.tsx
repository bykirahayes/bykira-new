import { useState } from "react";
import { Printer } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { JOURNEY, type StepId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Tag, Wordmark } from "./primitives";

const PRIORITY: Record<StepId, string> = { inquiry: "High", booking: "High", payment: "Medium", records: "Later" };

export function SampleMapDialog({ children }: { children: React.ReactNode }) {
  const [sel, setSel] = useState<StepId>("booking");
  const step = JOURNEY.find((s) => s.id === sel)!;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="print-area max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-4xl overflow-y-auto rounded-2xl border-line bg-popover p-0 sm:rounded-2xl">
        <div className="border-b border-line p-6 pr-14">
          <div className="flex flex-wrap items-center gap-3">
            <Wordmark className="text-xl" />
            <Tag>Illustrative example</Tag>
          </div>
          <DialogHeader className="mt-4">
            <DialogTitle className="font-display text-3xl font-normal md:text-4xl">Operations map — sample salon</DialogTitle>
            <DialogDescription>
              A made-up business used to show the format. Select a stop to see its notes.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Map stops">
            {JOURNEY.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => setSel(s.id)}
                  aria-pressed={sel === s.id}
                  className={cn(
                    "flex min-h-14 w-full flex-col items-start rounded-xl border px-3 py-2 text-left transition-colors duration-200",
                    sel === s.id ? "border-primary bg-primary/15" : "border-line hover:border-foreground/25",
                  )}
                >
                  <span className="label-mono text-muted-foreground">{s.n}</span>
                  <span className="font-medium">{s.label}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-line p-4">
              <p className="label-mono text-muted-foreground">Handoff</p>
              <p className="mt-2 text-sm">{step.reviewed[0]}</p>
            </div>
            <div className="rounded-xl border border-leak/30 bg-leak/5 p-4">
              <p className="label-mono text-leak">Bottleneck</p>
              <p className="mt-2 text-sm font-medium">{step.friction}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step.frictionDetail}</p>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <p className="label-mono text-lilac">Improvement · {PRIORITY[sel]} priority</p>
              <p className="mt-2 text-sm font-medium">{step.improvement}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step.improvementDetail}</p>
            </div>
          </div>

          <h3 className="mt-8 label-mono text-muted-foreground">Priorities, in order</h3>
          <table className="mt-3 w-full text-left text-sm">
            <thead className="text-muted-foreground">
              <tr className="border-b border-line">
                <th className="py-2 font-normal">Stop</th>
                <th className="py-2 font-normal">Change</th>
                <th className="py-2 font-normal">Priority</th>
              </tr>
            </thead>
            <tbody>
              {JOURNEY.map((s) => (
                <tr key={s.id} className="border-b border-line">
                  <td className="py-2.5 pr-3">{s.label}</td>
                  <td className="py-2.5 pr-3">{s.improvement}</td>
                  <td className="py-2.5">{PRIORITY[s.id]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-muted-foreground">Illustrative example only. Not a real client or real findings.</p>

          <div className="no-print mt-6 flex justify-end">
            <Button variant="line" size="xl" onClick={() => window.print()}>
              <Printer /> Print or save as PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
