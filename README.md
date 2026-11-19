# nicholasforeman.com

Personal portfolio: about me, skills, and experience timeline. A static SvelteKit site (Svelte 5, Tailwind CSS v4, adapter-static), fully prerendered to `build/`.

## Editing content

All content lives in `src/lib/data/`:

- `profile.ts`: name, about-me paragraphs, and social links.
- `skills.ts`: skill groups, mirroring the GitHub profile README.
- `experience.ts`: the timeline, newest first. Each entry is an organization with a role, optional period, and a list of items; each item's `kind` is `developed`, `tested`, or `other`.

## Scripts

```sh
bun install
bun run dev        # local dev server
bun run check      # svelte-check type check
bun run lint       # oxlint
bun run fmt        # oxfmt (fmt:check to verify)
bun run build      # static site in build/
```

## Deploying

Every push to `main` builds the site and deploys `build/` to GitHub Pages through `.github/workflows/deploy.yml`. The custom domain (nicholasforeman.com) is set in the repository's Pages settings, so no `CNAME` file is needed.
