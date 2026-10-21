import { useState } from "react";
import { z } from "zod";
import { Copy, Info, Mail } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("That email doesn't look right").max(255),
  business: z.string().trim().min(1, "What's the business called?").max(120),
  description: z.string().trim().min(10, "A sentence or two helps us prepare").max(1500),
});
type Form = z.infer<typeof schema>;
const EMPTY: Form = { name: "", email: "", business: "", description: "" };

export function AuditDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [ready, setReady] = useState<string | null>(null);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Form] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = r.data;
    setReady(`Free operations audit request\n\nName: ${d.name}\nEmail: ${d.email}\nBusiness: ${d.business}\n\n${d.description}`);
  };

  const copy = async () => {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(ready);
      toast.success("Enquiry copied to your clipboard");
    } catch {
      toast.error("Couldn't copy automatically. Select the text and copy it instead.");
    }
  };

  const field = (k: keyof Form, label: string, el: React.ReactNode) => (
    <div className="space-y-1.5">
      <Label htmlFor={`f-${k}`}>{label}</Label>
      {el}
      {errors[k] && <p id={`e-${k}`} className="text-sm text-leak">{errors[k]}</p>}
    </div>
  );
  const aria = (k: keyof Form) => ({ id: `f-${k}`, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined, className: "min-h-11 bg-surface" });

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setReady(null); }}>
      <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-lg overflow-y-auto rounded-2xl border-line bg-popover sm:rounded-2xl">
        <DialogHeader>
          <p className="label-mono text-lilac">Free operations audit</p>
          <DialogTitle className="font-display text-4xl font-normal">Request your audit</DialogTitle>
          <DialogDescription>Prepare a request to copy or open in your email app. This form does not send or book an audit automatically.</DialogDescription>
        </DialogHeader>

        {!ready ? (
          <form onSubmit={submit} noValidate className="space-y-4">
            {field("name", "Name", <Input {...aria("name")} value={form.name} onChange={set("name")} autoComplete="name" />)}
            {field("email", "Email", <Input {...aria("email")} type="email" value={form.email} onChange={set("email")} autoComplete="email" />)}
            {field("business", "Business", <Input {...aria("business")} value={form.business} onChange={set("business")} autoComplete="organization" />)}
            {field("description", "What feels slow or repetitive?", <Textarea {...aria("description")} rows={4} value={form.description} onChange={set("description")} />)}
            <p className="text-xs leading-relaxed text-muted-foreground">Your details stay in this page until you choose to copy or email them. Nothing is submitted to ByKira when you press the button below. Read our <a className="underline text-lilac underline-offset-4" href={`${import.meta.env.BASE_URL}privacy.html`} target="_blank" rel="noopener noreferrer">privacy information (opens in new tab)</a> before copying or sharing personal details. Do not include sensitive personal information.</p>
            <Button type="submit" variant="pill" size="xl" className="w-full">Prepare my request</Button>
          </form>
        ) : (
          <div className="space-y-4">
            {CONTACT_EMAIL ? (
              <p role="status" className="text-sm text-muted-foreground">No enquiry has been sent. Your message is ready for <strong className="text-foreground">{CONTACT_EMAIL}</strong>. Select <strong className="text-foreground">Open email</strong>, review the draft, then press Send in your email app. Email delivery has not been independently verified.</p>
            ) : (
              <div role="status" className="flex gap-3 rounded-xl border border-leak/30 bg-leak/10 p-4 text-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-leak" />
                <p>Online sending isn't connected yet, so nothing has been sent. Copy your enquiry below and keep it handy.</p>
              </div>
            )}
            <pre tabIndex={0} className="max-h-48 overflow-auto whitespace-pre-wrap rounded-xl border border-line bg-surface p-4 font-mono text-xs">{ready}</pre>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button variant="line" size="xl" className="flex-1" onClick={copy}><Copy /> Copy enquiry</Button>
              {CONTACT_EMAIL && (
                <Button variant="pill" size="xl" className="flex-1" asChild>
                  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free operations audit")}&body=${encodeURIComponent(ready)}`}><Mail /> Open email to send</a>
                </Button>
              )}
            </div>
            <button className="min-h-11 text-sm text-muted-foreground underline-offset-4 hover:underline" onClick={() => setReady(null)}>Edit details</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
