# Maintainers' Playbook — uzairashraf.com

How to keep this portfolio current, fast, and honest. Written for Uzair + any
AI assistant maintaining the site.

## Golden rules

1. **`src/data/profile.ts` is the only place content lives.** Components render
   data; they never contain facts. If you're editing a component to change a
   fact, you're doing it wrong.
2. **Content derives from `resume/master.md`** (career-assets workspace).
   Update master first, then mirror here. Never invent metrics; `[VERIFY]`
   numbers stay approximate (`~20%`).
3. **Never touch `public/CNAME`** — it's the custom domain. CI fails the build
   if it goes missing.
4. **No new dependencies without cause.** The site's advantage is being a
   ~21 KB page. Every dependency must justify itself against that budget
   (CI enforces 50 KB on index.html).

## Routine updates

| Task | How |
|------|-----|
| New job / promotion | Add entry to `experience` array in `profile.ts` |
| New project | Add to `projects` array (name, badge, url?, descriptionHtml, tech) |
| New skill | Edit `skillGroups` |
| Updated resume PDF | Replace `public/assets/UzairCV.pdf` (keep the filename) |
| Change SEO copy | `seo` object in `profile.ts` |

Then: `npm run build` locally, sanity-check `dist/index.html`, push a branch,
let CI pass, merge to `master` (the default branch). The deploy workflow ships it.

## Quality bars (check before merging)

- Build passes + CI quality gates green
- Responsive at 375 / 768 / 1280 (mobile collapses to single column, no
  horizontal scroll)
- Raw HTML contains all content (`curl https://uzairashraf.com | grep "9+"`)
- Lighthouse ≥ 95 across categories (the architecture makes this the default;
  regressions mean something was added that shouldn't have been)

## Deploy & rollback

- **Deploy:** automatic on push to `master` (`deploy.yml`). Verify at
  https://uzairashraf.com after the workflow completes (hard refresh).
- **Rollback (bad content):** `git revert` the commit on `master`; the workflow
  redeploys the previous state.
- **Rollback (catastrophic):** repo Settings → Pages → set Source back to
  "Deploy from a branch" → `gh-pages`. That serves the pre-redesign Angular
  build. Source code for it lives at tag `v1-angular`.

## Periodic (quarterly)

- Re-run design R&D (the `portfolio-rnd` agent in the career-assets workspace)
  to check the site is still competitive.
- Run the `content-sync` agent to diff the site against `resume/master.md`,
  regional resumes, and the LinkedIn draft.
- `npm outdated` — bump Astro minor versions; majors only with a changelog read.
- Check the GitHub Pages HTTPS certificate status (repo Settings → Pages).

## Known context

- `master` is the default/deploy branch. The old `main` branch is locked
  (read-only) in branch protection and retired — the pre-redesign Angular
  source lives there and at tag `v1-angular`.
- The `rewamp` branch holds the old Angular 19 WIP (preserved, superseded).
- The `gh-pages` branch is dead weight after the workflow-deploy switch; keep
  it as rollback until confident, then delete.
- Open content questions: "Property Manuel" spelling (confirm with Uzair),
  MiCedulad award name, optional headshot.
