<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Single-page site: sections live in src/components/site/*, composed in src/routes/index.tsx with in-page anchors (user asked for anchor nav).
- Journey copy and the contact address constant live in src/lib/site.ts so content edits stay out of components.
- Audit form never claims to send: it only offers copy/mailto until a real inbox or backend is configured.
