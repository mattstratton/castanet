# Migration Guide

This guide helps you migrate your podcast site to Castanet.

## From Previous Castanet Versions

- Review your `hugo.toml` and update to use the new `[module]` and `[params]` structure as shown in the [Main Configuration](./main-configuration.md).
- Move any custom layouts or assets to the appropriate folders as per Hugo module conventions.
- Update your episode, host, and guest content to match the latest front matter fields (see [Creating Episodes, Hosts, and Guests](./creating-episodes-hosts-guests.md)).
- If you used custom taxonomies, menus, or permalinks, review the new recommended settings in [REFERENCE.md](../REFERENCE.md).
- Guests must now be created at pages in the `content/guest/` folder. Support for datafiles for guests has been removed.
- If you used a custom color template (i.e. `static/scss/COLOR-variables.scss`), this is no longer supported. Instead, copy [slate.scss](../assets/css/slate.scss) to `css/COLOR.css` in your site's `assets` folder and customize that. You can use https://uicolors.app/ to generate a color palette.
- For optimal performance, copy all images from `static/img` to your site's `assets/img` folder.
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

## Migrating Guest Data Files to Markdown

If you have guest data in YAML files (in `data/guests/`), you can convert them to Markdown files (in `content/guest/`) using the provided script:

**Script:** [`docs/utils/guest-yml-to-md.sh`](utils/guest-yml-to-md.sh)

**Usage:**

```sh
sh docs/utils/guest-yml-to-md.sh
```

- This script requires only standard Unix tools (POSIX shell, grep, sed, awk, mkdir, etc). No extra dependencies are needed.
- It will create a Markdown file for each guest YAML file, using the YAML fields as front matter and the `bio` as the main content.
- Existing files in `content/guest/` with the same name will be overwritten.
- You may need to adjust the script if your YAML files use custom fields or formats.

If you encounter issues or have custom requirements, please review or modify the script as needed.

**Requirements:**

- This script requires [`yq`](https://github.com/mikefarah/yq) version 4 or higher.
- You can install yq with one of the following methods:
  - **Homebrew (macOS/Linux):**
    ```sh
    brew install yq
    ```
  - **Linux (binary):**
    ```sh
    sudo wget -O /usr/local/bin/yq "https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64"
    sudo chmod +x /usr/local/bin/yq
    ```
  - **Other platforms and options:** See the [official yq installation guide](https://github.com/mikefarah/yq#install) for more details. 