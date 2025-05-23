# Installation

Castanet is a Hugo theme for podcast websites. To install and use Castanet, follow these steps:

## Prerequisites
- [Hugo](https://gohugo.io/getting-started/installing/) (version 0.110.0 or later recommended)
- [Node.js](https://nodejs.org/) and npm (for building assets)

## 1. Add Castanet as a Hugo Module

In your site root, add Castanet as a module:

```toml
# hugo.toml
[module]
  [[module.imports]]
    path = "github.com/mattstratton/castanet/v2"
```

## 2. Install Node.js Dependencies

From your site root, run:

```sh
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