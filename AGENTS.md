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
- All portfolio copy (systems map, experience, toolkit, projects) and contact constants live in src/lib/site.ts so content edits stay out of components.
- Contact never fakes details: links render only when their constant is set; otherwise show a 'coming soon' state plus copy/share.