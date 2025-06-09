[![mattstratton](https://circleci.com/gh/mattstratton/castanet.svg?style=shield)](https://circleci.com/gh/mattstratton/castanet)
[![GitHub release](https://img.shields.io/github/release/mattstratton/castanet.svg)](https://github.com/mattstratton/castanet/releases)
[![Github All Releases](https://img.shields.io/github/downloads/mattstratton/castanet/total.svg)](https://github.com/mattstratton/castanet/releases)
[![license](https://img.shields.io/github/license/mattstratton/castanet.svg)](https://github.com/mattstratton/castanet/blob/main/LICENSE)
[![contributing](https://img.shields.io/badge/contributing-info-informational)](https://github.com/mattstratton/castanet/blob/main/CONTRIBUTING.md)

If you would like to receive emails when new versions of this theme are released, [subscribe to the announcement email list](http://eepurl.com/cMAJcL).

# Castanet

A podcast-oriented theme for Hugo.

## Quick Start

##### 1. Initialize Hugo modules on your repo

First, initialize [Hugo modules](https://gohugo.io/hugo-modules/) in your repo. This will create a `go.mod` file.

```bash
hugo mod init github.com/<your username>/<your repo name>
```

##### 2. Add this theme as your module dependency

In your `hugo.toml` file, add a `module` section. (exampleSite uses `config/_default/module.toml`)

```toml
[module]
  [[module.imports]]
    path = "github.com/mattstratton/castanet/v2"
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.mounts]]
    disableWatch = true
    source = 'hugo_stats.json'
    target = 'assets/notwatching/hugo_stats.json'
```

##### 3. Update config.toml

In your `hugo.toml` file, add the following lines: (exampleSite uses `config/_default/build.toml`)

```toml
[build]
  [build.buildStats]
    enable = true
  [[build.cachebusters]]
    source = 'assets/notwatching/hugo_stats\.json'
    target = 'css'
  [[build.cachebusters]]
    source = '(postcss|tailwind)\.config\.js'
    target = 'css'
```

Also add the following line to your `hugo.toml` file:

```toml
theme = "castanet"
```

##### 4. Update your module

Now, run this command to load this theme as your module.

```bash
hugo mod tidy
```

#### Running Locally

Now, you can run your hugo site locally with the following steps:

##### 1. Generate node dependency configuration

Now run the following command to generate node dependency configuration. This will create the a `package.json` file in you repo.

```bash
hugo mod npm pack
```

##### 2. Install dependencies

Install the node dependencies using following command:
```bash
npm install
```

##### 3. Run your site

Now, run you site locally using following command.

```bash
hugo server -w
```

## Development


## Theme Features

Castanet is a Hugo theme for sites that are primarily podcasts. It is heavily influenced by [ado-hugo](//github.com/arresteddevops/ado-hugo) by [Matt Stratton](//github.com/mattstratton).

An example site can be found at https://sample-castanet.netlify.com/

![Castanet screenshot](https://github.com/mattstratton/castanet/raw/main/images/screenshot.png)

## Installation

Download the latest version (zip file, not source code) from the [Releases](https://github.com/mattstratton/castanet/releases) page.


For more information read the official [quick start](//gohugo.io/getting-started/quick-start/) of Hugo.


## Getting started

After installing Castanet successfully it requires a just a few more steps to get your site running.

See [REFERENCE.md](https://github.com/mattstratton/castanet/blob/main/REFERENCE.md) for all configuration file settings as well as instructions on episodes, guests, hosts, and sponsors

## Contributing to castanet
If you would like to help make improvements or fixes to this theme, please see [CONTRIBUTING.md](https://github.com/mattstratton/castanet/blob/master/CONTRIBUTING.md) for detailed instructions.

## Sites using the Castanet theme
This is a completely non-comprehensive list of podcasts that use this theme. Want to add your site? Submit a pull request against the README file!
- [Arrested DevOps](https://www.arresteddevops.com)
- [Page It to the Limit](https://www.pageittothelimit.com/)
- [Quiche-Anon](https://quiche-anon.com)
- [Tech Debt Burndown Podcast](https://techdebtburndown.com/)
- [The Linux Lemming](https://linuxlemming.com)
- [The R-Podcast](https://r-podcast.org)

## Sites inspired by / building upon the Castanet theme
- [Cloud with Chris](https://www.cloudwithchris.com)

TEST COMMENT TO KICK OFF PR
