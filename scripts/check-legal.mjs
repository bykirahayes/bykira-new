import { readFileSync, existsSync } from "node:fs";
const required = ["public/privacy.html", "public/cookies.html", "public/terms.html", "public/accessibility.html"];
for (const page of required) {
  if (!existsSync(page)) throw new Error("Missing legal page: " + page);
  const content = readFileSync(page, "utf8");
  if (!content.includes('lang="en-GB"') || !content.includes("not legal certification")) throw new Error("Review legal page: " + page);
}
const html = readFileSync("index.html", "utf8");
if (html.includes("fonts.googleapis.com") || html.includes("fonts.gstatic.com")) throw new Error("Externally hosted fonts unexpectedly enabled");
const footer = readFileSync("src/components/site/Closing.tsx", "utf8");
for (const name of ["privacy.html", "cookies.html", "terms.html", "accessibility.html"]) {
  if (!footer.includes(name)) throw new Error("Missing direct legal link: "+name);
}
const site = readFileSync("src/components/site/AuditDialog.tsx", "utf8");
if (!site.includes("nothing has been sent") || !site.includes("does not send")) throw new Error("Audit form must not claim it sends messages");
console.log("Legal content integrity checks passed. Human/legal review remains required.");
