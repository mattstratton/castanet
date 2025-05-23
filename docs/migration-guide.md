# Migration Guide

This guide helps you migrate your podcast site to Castanet.

## From Previous Castanet Versions

- Review your `hugo.toml` and update to use the new `[module]` and `[params]` structure as shown in the [Main Configuration](./main-configuration.md).
- Move any custom layouts or assets to the appropriate folders as per Hugo module conventions.
- Update your episode, host, and guest content to match the latest front matter fields (see [Creating Episodes, Hosts, and Guests](./creating-episodes-hosts-guests.md)).
- If you used custom taxonomies, menus, or permalinks, review the new recommended settings in [REFERENCE.md](../REFERENCE.md).

## From Other Podcast Themes

- Copy your content (episodes, guests, hosts) into the appropriate `content/` folders.
- Update front matter fields to match Castanet's expected structure (see [Creating Episodes, Hosts, and Guests](./creating-episodes-hosts-guests.md)).
- Add and configure `hugo.toml` as described in [Main Configuration](./main-configuration.md).
- Install Node.js dependencies and run `npm run build` to generate assets.

## General Tips

- Always back up your site before migrating.
- Test your site locally with `hugo server -s exampleSite`.
- Refer to [REFERENCE.md](../REFERENCE.md) for detailed field descriptions and examples.

---

If you encounter issues, check the [Castanet GitHub Issues](https://github.com/mattstratton/castanet/issues) or open a new one for help. 