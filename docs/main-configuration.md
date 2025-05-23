# Main Configuration

Castanet uses a `hugo.toml` file for configuration. Below are the most important settings to get started.

## Top-level Items

- `pagination.pagerSize`: Number of episodes per page (default: 10)

## Build, Module, and Output Settings

```toml
[build]
  [build.buildStats]
    enable = true
  [[build.cachebusters]]
    source = 'assets/notwatching/hugo_stats.json'
    target = 'css'
  [[build.cachebusters]]
    source = '(postcss|tailwind).config.js'
    target = 'css'

[module]
  [module.hugoVersion]
  [[module.imports]]
    path = "github.com/mattstratton/castanet/v2"
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.mounts]]
    disableWatch = true
    source = 'hugo_stats.json'
    target = 'assets/notwatching/hugo_stats.json'

[outputs]
  home = ["HTML", "RSS", "JSON"]
  page = ["HTML", "RSS"]
```

## General Parameters

Set under `[params]`:

- `mainSections` (required): e.g. `"episode"`
- `colorScheme`: `slate` (default), `violet`, `stone`
- `site_layout`: `row` (default) or `grid`
- `description` (required): Show description
- `media_prefix` (required): URL prefix for podcast files
- `copyright_notice` (required)

See [REFERENCE.md](../REFERENCE.md) for a full list of parameters and examples.

## Social, Analytics, and More

- Social links: `[params.social]`
- Analytics: `[params.fathomAnalytics]`, `[params.giscus]`
- Menus, permalinks, taxonomies, and more are supported.

---

For advanced configuration, see the [Reference](../REFERENCE.md). 