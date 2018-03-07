# Contributing to castanet

The technical details on how to set up your local development environment for making changes to the `castanet` [Hugo](https://gohugo.io/) theme for podcasts.

# Table of contents
<!-- TOC depthFrom:2 -->

- [Set up your environment](#set-up-your-environment)
    - [Git remote setup](#git-remote-setup)
    - [Installing dependencies](#installing-dependencies)
        - [Install Node.js and npm](#install-nodejs-and-npm)
        - [Install gulp](#install-gulp)
        - [Install bower](#install-bower)
        - [Install node modules](#install-node-modules)
- [How can I help?](#how-can-i-help)
- [Making changes](#making-changes)
    - [Testing changes](#testing-changes)
    - [Create a commit](#create-a-commit)
    - [Branching and Pull Requests](#branching-and-pull-requests)
- [Design Principles](#design-principles)
    - [Frameworks](#frameworks)
    - [Blocks](#blocks)
    - [CSS and SCSS](#css-and-scss)
        - [`site.scss`](#sitescss)
        - [`custom-variables.scss`](#custom-variablesscss)
        - [`custom.scss`](#customscss)
    - [Javascript](#javascript)
- [Local build and testing](#local-build-and-testing)
- [Continuous Integration](#continuous-integration)
    - [Issues](#issues)
    - [GitHub Labels](#github-labels)
    - [Pull Requests](#pull-requests)
- [Documentation](#documentation)
- [Releasing](#releasing)
- [Creating a new color theme](#creating-a-new-color-theme)
- [Developer Certification of Origin (DCO)](#developer-certification-of-origin-dco)
    - [DCO Sign-Off Methods](#dco-sign-off-methods)

<!-- /TOC -->

## Set up your environment

Prerequisites:

* `make` (note - this is not needed yet)
* `gulp` v3.9.1+ (not needed yet)
* `bower`
* `nodejs` and `npm`
* [hugo v0.36.1+](https://gohugo.io)

Clone `castanet` from source into your working directory of choice:

```sh
$ mkdir -p ~/src/github.com/mattstratton/castanet
$ cd $_
$ git clone git@github.com:mattstratton/castanet.git .
```

Working with a Hugo theme outside of a content-based repo has a few challenges. The `castanet` repo contains a directory called `exampleSite`, which is what is used for testing theme development. The `config.toml` for the `exampleSite` contains the following value:

```
themesdir = "../.."
```

This tells Hugo where to look for its theme directories. This requires Hugo 0.18 or later.

You will need to run your watch command from the `exampleSite` directory; use something like this:

```
hugo server -w --baseUrl="http://localhost:1313"
```

### Git remote setup

Change our remote to be named `upstream`:

```sh
$ git remote rename origin upstream
```

Add your fork as `origin`:

```sh
$ git remote add fork git@github.com:you/castanet.git
```

### Installing dependencies

#### Install Node.js and npm

https://docs.npmjs.com/getting-started/installing-node
#### Install gulp

`npm install --global gulp`
#### Install bower
`npm install --global bower`

#### Install node modules

`npm install`

## How can I help?

Sort the existing GitHub issues for the tag of `help-wanted`. These are issues that we need help with! If you are going to tackle one, please comment on the issue so folks know you are on it.

## Making changes

### Testing changes

TODO: Write the test instructions

### Create a commit

Commit messages should be well formatted.
Start your commit message with a title in the imperative, i.e., "Updates function foo" vs "Updated function foo". Capitalize it.

The title must be followed with a newline, then a more detailed description.

Please reference any GitHub issues on the last line of the commit message (e.g. `See #123`, `Closes #123`, `Fixes #123`).

An example:

```
Add parameter for new social network to guests

I created a new parameter for the fancy new social network that
everyone is using now.

Fixes #284
```

### Branching and Pull Requests

(inspired by [Katrina Owen](kytrinyx)'s [excellent blog post](https://splice.com/blog/contributing-open-source-git-repositories-go/))

Assuming that the `you/castanet` repo is at `origin`, and `mattstratton/castanet` is at `upstream`, here's how to create a pull request:

```sh

$ git checkout -b make-thing-awesome
$ git commit -a myfile.go
$ git commit -s -m "Make thing more awesome"
$ git push origin make-thing-awesome

```

Don't forget to keep up to date with `upstream`:

```sh
$ git fetch upstream
$ git reset --hard upstream/master
```
## Design Principles

### Frameworks

We use [Boostrap v4 Alpha](http://v4-alpha.getbootstrap.com/) as our basic framework.

### Blocks
All page templates should make use of the `layouts/_default/baseof.html` file. This file contains all wrappers for the content. Anything within the `{{- block "main" . }} {{- end -}}` section is what will be displayed on a sub-template. Include a `{{ define "main" }}` block in your template to include what should be rendered.

### CSS and SCSS
All CSS must be generated with SCSS. The SCSS files are located in `static/scss`.

#### `site.scss`
This is the file that imports all the other SCSS files, including Bootstrap, font-awesome, jssocials, and the jquery oembed. It also imports our custom variables and any other customizations.

#### `custom-variables.scss`
Use this to set any SCSS variables, or to over-ride any variables used by Bootstrap.

#### `custom.scss`
This is the only place you should declare custom SCSS or CSS code.

### Javascript
All Javascript files are combined using CodeKit. The source Javascript files can be located either in `bower-components` or `static/js`. They are comibined and minified into `static/castanet-min.js`.

## Local build and testing

TODO - add gulp information and make scripts

## Continuous Integration
The `castanet` repo has hooks into Travis, Appveyor, and Netlify. Currently, the Travis build doesn’t do very much (the intent is to add some testing using Casper.js for web testing, but no tests have been written). The Appveyor tests ensure that the site can build with Windows.

All changes are built by Netlify to http://sample-castanet.netlify.com/ once merged to master.

### Issues

All changes should be driven by issues (this is because our changelog generator is issue-driven). So before you implement a bugfix or an enhancement, you should make sure an issue has been created and properly tagged. These are the issue labels that really matter:

**Bug:** Something is broken in the theme and needs fixing. These issues should be set with a label of `bug`, and will be tagged with `ready` when they are ready to be worked on.

**Enhancement:** Adding new functionality to the theme. These issues should be set with a label of `enhancement`, and will be tagged with `ready` when they are ready to be worked on.

Only repository contributors can add tags to issues; if you do not have permission to tag an issue, please prepend the title with `[BUG]` or `[ENHANCEMENT]` as appropriate.

### GitHub Labels

These are the labels we use, and what they mean:

- `bug`: Something is broken in the theme and needs fixing.
- `enhancement`: Add new functionality to the site/theme.
- `do-not-merge`: Only used by pull requests; means that this PR is a work in progress and not ready for merging.
- `duplicate`: This issue is handled by another issue. When marking an issue "duplicate", please link to the tracked issue.
- `help wanted`: This is a label for issues where the main contributors are actively seeking outside help.
- `needs-review`: Only used by pull requests; indicates that a review is required prior to merging.
- `ready`: This issue can/should be worked on. Issues not marked as "ready" means they haven't been prioritized.
- `no-changelog`: This issue/PR should be excluded from the changelog.
- `question`: Issues that are for discussion, not an actual bug or enhancement.

### Pull Requests

Please submit your proposed changes as a Pull Request against this repository. If the PR will resolve an issue, please add `Fixes #123` to the PR. We also will label issues as `bug` or `enhancement` for proper CHANGELOG generation.

## Documentation

If you add a new feature, please do the following:

1. Update the README to reflect how this field/feature is used (to assist with adding rows to our tables, we recommend the excellent [Tables Generator](http://www.tablesgenerator.com/markdown_tables) tool).
2. If possible, add this feature to the `exampleSite`, for testing and display purposes.

## Releasing

See [utils/README](https://github.com/mattstratton/castanet/blob/master/utils/README.md) for instructions.

## Creating a new color theme

Adding a color theme is quite simple - you will need to generate two new files for the theme:

- `static/scss/<MYCOLOR>_varibles.scss`
- `static/scss/<MYCOLOR.scss`

The `_variables.scss` file contains the Sass varibles uses to build the stylesheet. `<MYCOLOR>` should refer to the name of the style as you will set it in the `config.toml`.

## Developer Certification of Origin (DCO)

Licensing is very important to open source projects. It helps ensure the software continues to be available under the terms that the author desired.

This project uses [the MIT license](https://github.com/mattstratton/castanet/blob/master/LICENSE).

The license tells you what rights you have that are provided by the copyright holder. It is important that the contributor fully understands what rights they are licensing and agrees to them. Sometimes the copyright holder isn't the contributor, such as when the contributor is doing work on behalf of a company.

To make a good faith effort to ensure these criteria are met, we requires the Developer Certificate of Origin (DCO) process to be followed.

The DCO is an attestation attached to every contribution made by every developer. In the commit message of the contribution, the developer simply adds a Signed-off-by statement and thereby agrees to the DCO, which you can find below or at <http://developercertificate.org/>.

```
Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the
    best of my knowledge, is covered under an appropriate open
    source license and I have the right under that license to   
    submit that work with modifications, whether created in whole
    or in part by me, under the same open source license (unless
    I am permitted to submit under a different license), as
    Indicated in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including
    all personal information I submit with it, including my
    sign-off) is maintained indefinitely and may be redistributed
    consistent with this project or the open source license(s)
    involved.
```

### DCO Sign-Off Methods

The DCO requires a sign-off message in the following format appear on each commit in the pull request:

```
Signed-off-by: George Bluth <george.bluth@bluthcompany.com>
```

The DCO text can either be manually added to your commit body, or you can add either **-s** or **--signoff** to your usual git commit commands. If you forget to add the sign-off you can also amend a previous commit with the sign-off by running **git commit --amend -s**. If you've pushed your changes to Github already you'll need to force push your branch after this with **git push -f**.
