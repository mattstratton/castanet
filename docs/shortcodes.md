# Shortcodes

This page documents the available shortcodes in Castanet. Shortcodes are reusable snippets you can use in your content files to add features or dynamic content.

---

## Search Shortcode

The `staticsearch` shortcode adds a search box to your site, allowing users to search across episodes and guests.

### Usage

To add a search page, create a new content file (e.g., `content/search.md`) and include the shortcode:

```markdown
+++
title = "Search"
aliases = ["/search"]
+++

{{<staticsearch>}}
```

- The shortcode does not take any parameters.
- The search will index episodes and guests.

### Example
See `exampleSite/content/search.md` for a working example.

---

## Other Shortcodes

More shortcodes may be added in the future. This page will be updated as new shortcodes become available. 