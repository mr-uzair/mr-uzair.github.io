# uzairashraf.com

Personal portfolio of **Hafiz Uzair Ashraf** — Senior Full-Stack Software Engineer, AI Engineer & Team Lead.

Live at **[uzairashraf.com](https://uzairashraf.com)** · deployed automatically to GitHub Pages on every push to `master` (default branch).

## Stack

- [Astro 5](https://astro.build) — static output, zero framework JS shipped
- Hand-rolled CSS design system (dual dark/light theme via CSS custom properties)
- GitHub Actions → GitHub Pages (workflow deploy, no committed build output)

The whole page ships as a single ~21 KB HTML file (styles and interactions inlined).

## Architecture

```
src/
  data/profile.ts     ← ALL site content lives here (single source of truth)
  layouts/Layout.astro  ← head/SEO/JSON-LD, theme init, global interactions
  components/           ← Sidebar, About, Experience, Projects, Skills, Contact, Footer
  pages/index.astro     ← composition only
  pages/404.astro
  styles/global.css     ← design tokens + all styling
public/               ← CNAME, favicon, robots.txt, sitemap.xml, resume PDF
```

**Content rule:** `src/data/profile.ts` derives from the master resume
(career-assets workspace, `resume/master.md`). Never add a metric or claim here
that the master resume does not contain.

## Development

```bash
npm install
npm run dev       # dev server on :4321
npm run build     # static build → dist/
npm run preview   # serve the built site
```

## Deployment

Push to `master` → `.github/workflows/deploy.yml` builds, runs quality gates
(CNAME present, resume PDF present, core content and SEO tags in HTML), and
deploys to GitHub Pages. The custom domain is configured via `public/CNAME`.

**Rollback:** the pre-redesign Angular site is preserved at tag `v1-angular`
(source) and on the `gh-pages` branch history (built output).

See [MAINTAINERS-PLAYBOOK.md](MAINTAINERS-PLAYBOOK.md) for the full update workflow.
