<!-- vscode-markdown-toc -->
* [Set up your environment](#Setupyourenvironment)
	* [Git remote setup](#Gitremotesetup)
	* [Installing dependencies](#Installingdependencies)
		* [Install Node.js and npm](#InstallNode.jsandnpm)
		* [Install node modules](#Installnodemodules)
* [How can I help?](#HowcanIhelp)
* [Making changes](#Makingchanges)
	* [Testing changes](#Testingchanges)
	* [Create a commit](#Createacommit)
	* [Branching and Pull Requests](#BranchingandPullRequests)
* [Design Principles](#DesignPrinciples)
	* [Frameworks](#Frameworks)
	* [Blocks](#Blocks)
		* [`site.scss`](#site.scss)
		* [`color-variables.scss`](#color-variables.scss)
		* [`custom.scss`](#custom.scss)
	* [Javascript](#Javascript)
* [Local build and testing](#Localbuildandtesting)
* [Continuous Integration](#ContinuousIntegration)
	* [Issues](#Issues)
	* [GitHub Labels](#GitHubLabels)
	* [Pull Requests](#PullRequests)
* [Documentation](#Documentation)
* [Releasing](#Releasing)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Contributing to castanet

The technical details on how to set up your local development environment for making changes to the `castanet` [Hugo](https://gohugo.io/) theme for podcasts.


## <a name='Setupyourenvironment'></a>Set up your environment

Prerequisites:


* `nodejs` and `npm`
* [hugo v0.147.3+](https://gohugo.io)

Clone `castanet` from source into your working directory of choice:

```sh
$ mkdir -p ~/src/github.com/mattstratton/castanet
$ cd $_
$ git clone git@github.com:mattstratton/castanet.git .
```

Working with a Hugo theme outside of a content-based repo has a few challenges. The `castanet` repo contains a directory called `exampleSite`, which is what is used for testing theme development. The `go.mod` for the `exampleSite` contains the following value:

```
require github.com/mattstratton/castanet/v2 v2.0.0 // indirect

replace github.com/mattstratton/castanet/v2 => ../
```

This tells Hugo to get the module from the parent directory.

To run the Hugo server, use the following command:

```
npm run dev
```

This will start the Hugo server and watch for changes to the Tailwind CSS.
### <a name='Gitremotesetup'></a>Git remote setup

Change our remote to be named `upstream`:

```sh
$ git remote rename origin upstream
```

Add your fork as `origin`:

```sh
$ git remote add fork git@github.com:you/castanet.git
```

### <a name='Installingdependencies'></a>Installing dependencies

#### <a name='InstallNode.jsandnpm'></a>Install Node.js and npm

https://docs.npmjs.com/getting-started/installing-node

#### <a name='Installnodemodules'></a>Install node modules

`npm install`

## <a name='HowcanIhelp'></a>How can I help?

Sort the existing GitHub issues for the tag of `help-wanted`. These are issues that we need help with! If you are going to tackle one, please comment on the issue so folks know you are on it.

## <a name='Makingchanges'></a>Making changes

### <a name='Testingchanges'></a>Testing changes

There are no automated tests, but it is recommended that you test manually by testing both `row` and `grid` configurations in the `config.toml` inside `exampleSite`.

### <a name='Createacommit'></a>Create a commit

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

### <a name='BranchingandPullRequests'></a>Branching and Pull Requests

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
## <a name='DesignPrinciples'></a>Design Principles

### <a name='Frameworks'></a>Frameworks

We use [Tailwind CSS](https://tailwindcss.com/) for all styling. We prefer using utility classes over custom CSS.

### <a name='Blocks'></a>Blocks
All page templates should make use of the `layouts/baseof.html` file. This file contains all wrappers for the content. Anything within the `{{- block "main" . }} {{- end -}}` section is what will be displayed on a sub-template. Include a `{{ define "main" }}` block in your template to include what should be rendered.

<!-- ###  4.3. <a name='CSSandSCSS'></a>CSS and SCSS
All CSS must be generated with SCSS. The SCSS files are located in `static/scss`.

#### <a name='site.scss'></a>`site.scss`
This is the file that imports all the other SCSS files, including Bootstrap, font-awesome, jssocials, and the jquery oembed. It also imports our custom variables and any other customizations.

#### <a name='color-variables.scss'></a>`color-variables.scss`
Note that this refers to files like `blue-variables.scss` or `orange-variables.scss`. There is no actual file named `color-variables.scss`

Use this to set any SCSS variables, or to over-ride any variables used by Bootstrap. You need one for each color theme created.

#### <a name='custom.scss'></a>`custom.scss`
This is the only place you should declare custom SCSS or CSS code. -->

### <a name='Javascript'></a>Javascript
All Javascript files are combined using Hugo Pipes. The source Javascript files can be located either in `node_modules` or `static/js`. They are combined and minified into `static/castanet-min.js`.

## <a name='Localbuildandtesting'></a>Local build and testing

Inside the theme directory, run `npm install` if you haven't already.

Run `npm run dev` to run Tailwind CSS and Hugo in watch mode.

## <a name='ContinuousIntegration'></a>Continuous Integration
The `castanet` repo has hooks into GitHub Actions and Netlify. GitHub Actions builds the site according the various configurations (row vs grid) and runs Lighthouse checks. If you're curious, you can check out the GitHub actions configuration in [.github/workflows/ci.yml](https://github.com/mattstratton/castanet/blob/master/.github/workflows/ci.yml).

We use the Deploy Previews feature of Netlify. The config for this is at [netlify.toml](https://github.com/mattstratton/castanet/blob/master/netlify.toml).

All changes are built by Netlify to http://sample-castanet.netlify.app/ once merged to master.

### <a name='Issues'></a>Issues

All changes should be driven by issues (this is because our changelog generator is issue-driven). So before you implement a bugfix or an enhancement, you should make sure an issue has been created and properly tagged. These are the issue labels that really matter:

**Bug:** Something is broken in the theme and needs fixing. These issues should be set with a label of `bug`, and will be tagged with `ready` when they are ready to be worked on.

**Enhancement:** Adding new functionality to the theme. These issues should be set with a label of `enhancement`, and will be tagged with `ready` when they are ready to be worked on.

Only repository contributors can add tags to issues; if you do not have permission to tag an issue, please prepend the title with `[BUG]` or `[ENHANCEMENT]` as appropriate.

If you use the issue templates when opening your issues, the proper titles and tags should be added for you!

### <a name='GitHubLabels'></a>GitHub Labels

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

### <a name='PullRequests'></a>Pull Requests

Please submit your proposed changes as a Pull Request against this repository. If the PR will resolve an issue, please add `Fixes #123` to the PR. We also will label issues as `bug` or `enhancement` for proper CHANGELOG generation. For more details, see [Linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

## <a name='Documentation'></a>Documentation

If you add a new feature, please do the following:

1. Update the README to reflect how this field/feature is used (to assist with adding rows to our tables, we recommend the excellent [Tables Generator](http://www.tablesgenerator.com/markdown_tables) tool).
2. If possible, add this feature to the `exampleSite`, for testing and display purposes.

## <a name='Releasing'></a>Releasing

See [.github/workflows/prepare-release.yml](https://github.com/mattstratton/castanet/blob/master/.github/workflows/prepare-release.yml) for details on the release process.

<!-- ## Creating a new color theme

Adding a color theme is quite simple - you will need to generate two new files for the theme:

- `static/scss/<MYCOLOR>_variables.scss`
- `static/scss/<MYCOLOR.scss`

The `<MYCOLOR>_variables.scss` file contains the Sass variables uses to build the stylesheet. `<MYCOLOR>` should refer to the name of the style as you will set it in the `config.toml`. -->

