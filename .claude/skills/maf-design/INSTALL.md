# Install instructions

This folder is a Claude Code Agent Skill.

## To install

Drop this folder into your Claude Code skills directory:

```bash
# Global skill — available everywhere
mv maf-design ~/.claude/skills/

# OR — project-scoped, available only in one repo
mv maf-design /path/to/your/repo/.claude/skills/
```

Claude Code auto-discovers any `SKILL.md` with `user-invocable: true`.

## To use

In any Claude Code session:

```
> use maf-design and build a landing page for the new pilot recruitment campaign
```

Claude will read `SKILL.md`, then `README.md`, then explore `assets/`, `colors_and_type.css`, and `ui_kits/website/` as needed.

## Drop in a font

If you have a Tisa Sans Pro webfont license, drop the WOFF2 files into `fonts/` and uncomment the `@font-face` block in `colors_and_type.css`. Otherwise Mulish (Google Fonts) loads as the substitute.

## What's inside

| Path | Purpose |
|---|---|
| `SKILL.md` | Frontmatter that Claude Code reads |
| `README.md` | Brand context, content + visual foundations, iconography |
| `colors_and_type.css` | Design tokens — colors, type, spacing, radius, shadow |
| `assets/` | Official MAF logo files + variants |
| `preview/` | Self-contained card-sized HTML examples |
| `ui_kits/website/` | React UI kit for the maf.nl website surface |
