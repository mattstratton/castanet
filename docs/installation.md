# Installation

Castanet is a Hugo theme for podcast websites. To install and use Castanet, follow these steps:

## Prerequisites
- [Hugo](https://gohugo.io/getting-started/installing/) (version 0.147.3 or later)
- [Node.js](https://nodejs.org/) and npm (for building assets)
- [Go](https://go.dev/doc/install) (for building the theme with Hugo Modules)

## 1. Add Castanet as a Hugo Module

Initialize Hugo modules in your site root:

```sh
hugo mod init
```

Add Castanet as a module:

```toml
# hugo.toml
[module]
  [[module.imports]]
    path = "github.com/mattstratton/castanet/v2"
```

## 2. Install Node.js Dependencies

From your site root, run:

```sh
hugo mod npm pack
npm install
```

## 3. Configure Your Site

See the [Main Configuration](./main-configuration.md) for required and optional settings.

## 4. Build the Site

To build your site:

```sh
npm run build
```

The generated site will be in `exampleSite/public`.

## 5. Run Locally

To serve your site locally:

```sh
hugo server -s exampleSite
```

---

For more details, see the [Reference](../REFERENCE.md). 