/**
 * Verified contact details. Leave as null until Kian confirms them —
 * the Contact section then shows "Contact details coming soon" instead
 * of a pretend form or broken link. Example: "name@example.co.uk"
 */
export const CONTACT_EMAIL: string | null = null;
export const LINKEDIN_URL: string | null = null;
export const GITHUB_URL: string | null = null;

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "toolkit", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type NodeId = "support" | "identity" | "network" | "security";

export interface SystemNode {
  id: NodeId;
  n: string;
  label: string;
  short: string;
  focus: string[];
  example: string;
}

export const SYSTEMS: SystemNode[] = [
  {
    id: "support",
    n: "01",
    label: "IT Support",
    short: "Support",
    focus: ["Listening first, then reproducing the issue", "Clear, calm updates for the person affected", "Working tickets through to a proper close"],
    example: "Walking a user through a Windows voice typing fault: checking language packs, microphone access and privacy settings step by step.",
  },
  {
    id: "identity",
    n: "02",
    label: "Microsoft 365 & Identity",
    short: "M365",
    focus: ["Sign-in and MFA behaviour in Entra ID", "OneDrive sync and file access", "How security defaults affect real users"],
    example: "Tracing a sign-in loop back to Entra security defaults, then explaining the MFA prompt to the user so it stuck.",
  },
  {
    id: "network",
    n: "03",
    label: "Networks & Infrastructure",
    short: "Infra",
    focus: ["DNS records and domain renewals", "IIS sites and SSL certificate bindings", "Understanding what depends on what"],
    example: "Renewing an SSL certificate on IIS and checking the binding, so the site stayed trusted with no warning for visitors.",
  },
  {
    id: "security",
    n: "04",
    label: "Security & Documentation",
    short: "SecDocs",
    focus: ["Endpoint security fundamentals", "Least privilege and good habits", "Notes someone else can actually follow"],
    example: "Endpoint security training with Heimdal, then writing up what I learned as a short reference for later.",
  },
];

export interface Experience {
  area: string;
  title: string;
  detail: string;
  tools: string[];
}

export const EXPERIENCE: Experience[] = [
  { area: "Microsoft 365", title: "Sign-in & OneDrive troubleshooting", detail: "Helped users get back into their accounts and restore OneDrive sync: checking licences, credentials, sync status and cached sign-ins.", tools: ["Microsoft 365", "OneDrive", "Windows"] },
  { area: "Identity", title: "Entra ID security defaults & sign-in issues", detail: "Investigated sign-in problems linked to Azure / Microsoft Entra security defaults and MFA registration, and explained the change to users.", tools: ["Entra ID", "MFA"] },
  { area: "Web servers", title: "IIS SSL certificate renewals", detail: "Took part in renewing SSL certificates on IIS, importing the new certificate and updating site bindings, then confirming HTTPS was healthy.", tools: ["IIS", "SSL/TLS"] },
  { area: "Domains", title: "DNS & domain renewal administration", detail: "Handled domain renewals and DNS checks in 123 Reg, tracking each step and its status through HaloPSA tickets.", tools: ["123 Reg", "HaloPSA", "DNS"] },
  { area: "Windows", title: "Voice typing troubleshooting", detail: "Worked through a Windows voice typing fault methodically: speech settings, microphone permissions, language packs and updates.", tools: ["Windows 11", "Settings"] },
  { area: "Security", title: "Endpoint security training", detail: "Completed hands-on training with Heimdal, covering how endpoint protection, patching and privilege controls fit together.", tools: ["Heimdal", "Endpoint security"] },
];

export const TOOLKIT: { group: string; items: { name: string; note: string }[] }[] = [
  { group: "Productivity & identity", items: [
    { name: "Microsoft 365", note: "Accounts, licences and everyday user support" },
    { name: "Entra ID", note: "Sign-in, MFA and security defaults" },
    { name: "OneDrive", note: "Sync, sharing and file access" },
  ] },
  { group: "Systems & web", items: [
    { name: "Windows", note: "Settings, troubleshooting and user issues" },
    { name: "IIS / SSL", note: "Site bindings and certificate renewals" },
    { name: "DNS & Domains", note: "Records, renewals and registrar admin" },
  ] },
  { group: "Process & practice", items: [
    { name: "HaloPSA", note: "Ticket workflow and tracking" },
    { name: "Security Fundamentals", note: "Endpoint protection and good habits" },
    { name: "Documentation & Support", note: "Clear write-ups and user communication" },
  ] },
];

export interface Project {
  n: string;
  title: string;
  status: "Case study" | "In progress";
  situation: string;
  approach: string;
  learning: string;
}

export const PROJECTS: Project[] = [
  { n: "01", title: "Microsoft 365 / OneDrive access", status: "Case study", situation: "A user couldn't reach their files and OneDrive had stopped syncing.", approach: "Confirmed the account and licence, checked sign-in status, cleared cached credentials and re-linked the OneDrive client.", learning: "Start with the identity layer — many 'file' problems are really sign-in problems." },
  { n: "02", title: "Domain renewal workflow", status: "Case study", situation: "Domains needed renewing on time without anything slipping through.", approach: "Checked expiry and DNS in 123 Reg, renewed, then logged each step against a HaloPSA ticket.", learning: "A simple, written process beats memory. The ticket trail made handovers easy." },
  { n: "03", title: "Windows voice typing investigation", status: "Case study", situation: "Voice typing stopped responding for a user on Windows.", approach: "Ruled out causes one at a time: microphone permissions, speech language, language packs, then updates.", learning: "Changing one thing at a time keeps troubleshooting honest and repeatable." },
  { n: "04", title: "Home lab", status: "In progress", situation: "I want a safe place to try things I can't practise on live systems.", approach: "Exploring virtual machines, a small test domain and basic networking to rehearse admin tasks.", learning: "Still building — I'll write up what works, and what breaks, as I go." },
];

export const INTRO_MESSAGE = `Hi Kian,

I came across your portfolio and wanted to get in touch about `;