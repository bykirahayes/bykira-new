import { useState } from "react";
import { ArrowUpRight, Check, Copy, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, EXPERIENCE, GITHUB_URL, INTRO_MESSAGE, LINKEDIN_URL, NAV, PROJECTS, TOOLKIT } from "@/lib/site";
import { Monogram, Reveal, SectionHead, Tag } from "./primitives";

const wrap = "relative mx-auto max-w-7xl px-5 md:px-8";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className={cn(wrap, "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]")}>
        <SectionHead n="01" eyebrow="About" title={<>Learning on the job, <em className="text-lilac">properly.</em></>} />
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:pt-12">
          <p className="font-display text-3xl leading-snug text-foreground sm:text-4xl">
            I like knowing <em className="text-lilac">why</em> something broke — not just that it works again.
          </p>
          <p>I'm currently an IT apprentice, working across everyday support, Microsoft 365, identity, domains and web servers. Each ticket is a chance to understand a system a little better.</p>
          <p>I'm drawn towards systems administration, infrastructure and cloud. I'm early in that path and honest about it: I ask questions, test carefully, and write up what I find so it's useful later.</p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {["Methodical troubleshooting", "Clear communication", "Good documentation", "Always learning"].map((t) => <li key={t}><Tag>{t}</Tag></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-t border-line py-24 md:py-36">
      <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className={wrap}>
        <SectionHead n="02" eyebrow="Experience" title={<>Hands-on <em className="text-lilac">learning.</em></>} intro="Real support work I've taken part in during my apprenticeship. These are areas of exposure and examples of tasks undertaken — not certifications." />
        <ol className="relative mt-16 grid gap-5 md:grid-cols-6">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.06} className={cn(i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2", i % 2 === 1 && "md:translate-y-6")}>
              <li className="card-tactile group h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-lilac">{String(i + 1).padStart(2, "0")} / {e.area}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lilac" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">{e.tools.map((t) => <li key={t}><Tag>{t}</Tag></li>)}</ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Toolkit() {
  return (
    <section id="toolkit" className="relative border-t border-line py-24 md:py-36">
      <div className={wrap}>
        <SectionHead n="03" eyebrow="Toolkit" title={<>The tools I <em className="text-lilac">work with.</em></>} intro="Grouped by where they sit. No percentages — just what I've used each one for." />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {TOOLKIT.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.08} className="bg-background p-6 sm:p-8">
              <p className="label-mono text-muted-foreground">{String(gi + 1).padStart(2, "0")} — {g.group}</p>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it.name} tabIndex={0} className="skill group rounded-xl border border-line p-4 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 focus-visible:border-primary/60">
                    <p className="flex items-center gap-2 font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-lilac shadow-[0_0_10px_var(--lilac)]" aria-hidden />{it.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-line py-24 md:py-36">
      <div className="blob right-0 top-40 h-[380px] w-[380px] bg-primary/15" aria-hidden />
      <div className={wrap}>
        <SectionHead n="04" eyebrow="Projects" title={<>Case studies, <em className="text-lilac">written up.</em></>} intro="Each one follows the same shape: the situation, how I approached it, and what I took away." />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.08} className={cn(i % 2 === 1 && "md:mt-16")}>
              <article className="frame glass relative h-full rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-6xl leading-none text-primary/70">{p.n}</span>
                  <Tag tone={p.status === "In progress" ? "accent" : "neutral"}>{p.status === "In progress" && <span className="status-ring h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden />}{p.status === "In progress" ? "Exploring · In progress" : p.status}</Tag>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight">{p.title}</h3>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  {([["Situation", p.situation], ["Approach", p.approach], [p.status === "In progress" ? "So far" : "Learning", p.learning]] as const).map(([k, v]) => (
                    <div key={k} className="grid gap-1 border-t border-line pt-4 sm:grid-cols-[6.5rem_1fr]">
                      <dt className="label-mono text-lilac">{k}</dt>
                      <dd className="text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const canShare = typeof navigator !== "undefined" && "share" in navigator;
  const links = [
    CONTACT_EMAIL && { label: "Email", href: `mailto:${CONTACT_EMAIL}` },
    LINKEDIN_URL && { label: "LinkedIn", href: LINKEDIN_URL },
    GITHUB_URL && { label: "GitHub", href: GITHUB_URL },
  ].filter(Boolean) as { label: string; href: string }[];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INTRO_MESSAGE);
      setCopied(true);
      toast.success("Introduction message copied");
      setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error("Couldn't copy — please select the text manually");
    }
  };
  const share = async () => {
    try {
      await navigator.share({ title: "Kian Price | Portfolio", url: window.location.href });
    } catch { /* user cancelled */ }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-36">
      <div className="blob left-1/3 top-10 h-[420px] w-[420px] bg-primary/20" aria-hidden />
      <div className={cn(wrap, "grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end")}>
        <SectionHead n="05" eyebrow="Contact" title={<>Have a project, an opportunity, or an <em className="text-lilac">interesting problem?</em></>} intro="I'm always happy to talk about IT support, systems and what I'm learning next." />
        <Reveal delay={0.1} className="frame glass rounded-2xl p-6 sm:p-8">
          {links.length ? (
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}><a href={l.href} className="flex min-h-11 items-center justify-between border-b border-line py-2 hover:text-lilac">{l.label}<ArrowUpRight className="h-4 w-4" /></a></li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center gap-3">
              <span className="status-ring h-2 w-2 rounded-full bg-lilac" aria-hidden />
              <p className="label-mono text-foreground">Contact details coming soon</p>
            </div>
          )}
          <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-line bg-background/60 p-4 font-mono text-xs leading-relaxed text-muted-foreground">{INTRO_MESSAGE}…</pre>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button variant="pill" size="lg" onClick={copy}>{copied ? <Check /> : <Copy />}{copied ? "Copied" : "Copy introduction message"}</Button>
            {canShare && <Button variant="line" size="lg" onClick={share}><Share2 /> Share portfolio</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className={cn(wrap, "flex flex-col gap-8 md:flex-row md:items-center md:justify-between")}>
        <Monogram />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="inline-flex min-h-11 items-center hover:text-foreground">{n.label}</a></li>)}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">© 2026 Kian Price. Built with curiosity.</p>
      </div>
    </footer>
  );
}