# Reference for castanet

# Table of contents
<!-- TOC depthFrom:2 updateOnSave:false-->

- [The config file](#the-config-file)
    - [Top-level items](#top-level-items)
    - [General Parameters](#general-parameters)
    - [Feed Parameters](#feed-parameters)
    - [Favicon parameters](#favicon-parameters)
    - [Social Parameters](#social-parameters)
    - [Giscus Parameters](#giscus-parameters)
    - [Host/Author Parameters](#hostauthor-parameters)
        - [Host Social Parameters](#host-social-parameters)
    - [Link Parameters](#link-parameters)
    - [A note about `BaseURL`](#a-note-about-baseurl)
    - [Pagination setting with grid layout](#pagination-setting-with-grid-layout)
    - [Permalinks](#permalinks)
    - [Taxonomies](#taxonomies)
    - [Menus](#menus)
    - [Podlove Subscribe Button](#podlove-subscribe-button)
- [Blogs](#blogs)
- [Episodes](#episodes)
    - [Upcoming Episodes](#upcoming-episodes)
- [Guests](#guests)
    - [Guest Pages](#guest-pages)
- [Hosts](#hosts)
    - [Host Pages](#host-pages)
- [Sponsors](#sponsors)

## The config file

You will need to add a handful of configuration items to your `config.toml` file. You can take a look at the [example site](https://github.com/mattstratton/castanet/blob/master/exampleSite/config.toml) to see them in action. They are described below:

### Top-level items

- `googleAnalytics` - the Google Analytics tracking ID. We use the async method. Example: `"UA-123-45"`
- `paginate` - The number of episodes to show per-page on the homepage (note, this also controls pagination for Guest and Host list pages). If this is not set, the default is 10.
### General Parameters

These should be set under the `[params]` section:

| Field Name              | Required | Description                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                   |
|-------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mainSections`          | Yes      | Sets the page type for what shows up on the homepage. This must be set.                              | "episode"
| `site_theme`            | No       | The color scheme for the overall site. Currently the options are `orange` (default), `grey`, and `blue`.                                                                                                                                                            | "blue"                                                                                                                                                                                                                                    |
| `episode_number_style`            | No       | The format used for episode numbers in the episode's RSS feed. The choices are either parens, dash or brackets. If not set, the episode title in the RSS feed will just default to the title of the episode, without any episode number included.                                                                                                                                                            | "brackets"                                                                                                                                                                                                                                    |
| `episode_number_prefix`            | No       | A prefix used in the episode's RSS feed before the episode number. For example, if episode_number_prefix was set to CWC for episode 1, then the output might be Title of the Episode - CWC1.                                                                                                                                                            | "CWC"                                                                                                                                                                                                                                    |
| `site_layout`           | No       | The layout for the home page. The options are `row` (default) or `grid`.                                                                                                                                                                                            | "grid"                                                                                                                                                                                                                                    |
| `enable_jumbo`          | No       | When using the `row` layout, will set a jumbotron at the top instead of the sidebar.                                                                                                                                                                                | "true"                                                                                                                                                                                                                                    |
| `disable_title_caps`          | No       | When generating the RSS XML file do not convert the episode title to Title Case (using Title Case is the default)                                                                                                                                                                               | "false"                                                                                                                                                                                                                                    |
| `show_next_upcoming`          | No       | If there are episodes with the upcoming frontmatter set to true, then it will display the next episode on homepage. This halves the screen real estate of the latest episode section, which will then be displayed side by side.                              | "true"                                                                                                                                                                                                                                    |
| `truncate`              | No       | The number of characters to truncate the summary on the row layout. This can be overridden per-episode as well. The default value (if not set) is 600 characters.                                                                                                   | "700"                                                                                                                                                                                                                                     |
| `custom_css`            | No       | Array of custom CSS files for over-riding theme settings or adding your own classes. These files should be put into your `static` directory (not the `static` directory of the theme).                                                                              | ["custom.css", "other_custom.css"]                                                                                                                                                                                                        |
| `about_logo`            | No       | The logo (250px x 250px) you would like to appear on your About page. If not set, this will default to your Apple Podcasts image. This path should be relative to your main URL, for example, a file put in your `static` directory. This path should not start with a `/`. | "img/my_logo.png"                                                                                                                                                                                                                         |
| `favicon`               | No       | The favicon file you would like to use for your site. If not set, this will default to the file `icons/favicon.ico`. This file should be put into your static directory (not the `static` directory of the theme).                                                  | "icon/favicon_x32.png"                                                                                                                                                                                                                    |
| `copyright_notice`      | Yes      | Your copyright information for the footer of the page. Can contain Markdown.                                                                                                                                                                                        | `"Copyright 2016 [Matt Stratton](https://www.mattstrattion.io)"`                                                                                                                                                                          |
| `itunes_subscribe`      | No       | The URL of your podcast in the Apple Podcasts store.                                                                                                                                                                                                                        | "http://podcasts.apple.com/us/podcast/arrested-devops/id773888088?mt=2&uo=4&at=11lsCi"                                                                                                                                                      |
| `android_subscribe`     | No       | The URL for your podcast for Android users. You can generate this URL at [Subscribe on Android](https://subscribeonandroid.com).                                                                                                                                    | "http://subscribeonandroid.com/feeds.podtrac.com/VGAulpN7MY1U"                                                                                                                                                                            |
| `google_play_subscribe` | No       | The URL to your podcast in Google Podcasts                                                                                                                                                                                                                   | "https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuYXJyZXN0ZWRkZXZvcHMuY29tL2VwaXNvZGUvaW5kZXgueG1s"                                                            |
| `stitcher_subscribe`     | No       | The URL to your podcast on Stitcher.                                                                                                                                                                                                                                | "http://www.stitcher.com/podcast/arrested-devops-2/arrested-devops"                                                                                                                                                                       |
| `soundcloud_subscribe`  | No       | The URL to your podcast's feed on Soundcloud                                                                                                                                                                                                                        | "http://feeds.soundcloud.com/users/soundcloud:users:203144248/sounds.rss"                                                                                                                                                                 |
| `pocketcasts_subscribe` | No       | The URL to your podcast's feed on Pocketcasts                                                                                                                                                                                                                       | "http://pcasts.in/feed/feeds.soundcloud.com/users/soundcloud:users:203144248/sounds.rss"                                                                                                                                                  |
| `spotify_subscribe` | No       | The URL to your podcast's page on Spotify                                                                                                                                                                                                                       | "https://open.spotify.com/show/7hHA2ZlfOmbwv96wEBaMR2?si=UeVjoWIVSqqLluJd4TlEUg"                                                                                                                                                  |
| `youtube_subscribe` | No       | The URL to subscribe your podcast's channel on Spotify                                                                                                                                                                                                                       | "https://www.youtube.com/arresteddevops?sub_confirmation=1"                                                                                                                                                  |
| `mailchimp_subscribe`   | No       | The URL for your MailChimp signup form. This can be acquired from creating a "Super Slim" Embedded form on MailChimp. Do NOT include the entire form HTML; you just need the path for the `form action`.                                                            | "//arresteddevops.us3.list-manage.com/subscribe/post?u=5e4cbcac996bb9df25f970a89&id=154fa76bcc"                                                                                                                                           |
| `rss_subscribe`         | No       | Optional parameter to over-ride the RSS feed URL, in case you use something like Feedburner. You likely do NOT need to set this parameter unless you have a very good reason to do so.                                                                              | "http://feeds.podtrac.com/VGAulpN7MY1U"                                                                                                                                                                                                   |
| `description`           | Yes      | Description of your show. Can use Markdown.                                                                                                                                                                                                                         | `"The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about [podcasting](https://en.wikipedia.org/wiki/Podcast) from the most inspiring experts to ever show up on the whole internet."` |
| `media_prefix`          | Yes      | The URL to pre-pend to your podcast files. Must end in a slash.                                                                                                                                                                                                     | "https://media.blubrry.com/arresteddevops/content.blubrry.com/arresteddevops/"                                                                                                                                                            |
| `disqusShortname`       | No       | The shortname for use in Disqus comments. Example: `"arresteddevops"`. Note: The Disqus comments will not appear if you are running on `localhost`.                                                                                                                 | "arresteddevops"                                                                                                                                                                                                                          |

### Feed Parameters

These should be set under `[params.feed]`

| Field Name                   | Required | Description                                                                                                                                                                         | Example                                                                                                                                                                                        |
|------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `copyright`                  | Yes      | The copyright information for your feed. Do not use Markdown.                                                                                                                       | "Copyright 2017 Matt Stratton"                                                                                                                                                                 |
| `itunes_subtitle`            | No       | No Markdown or HTML.                                                                                                                                                                | "The best podcast ever"                                                                                                                                                                        |
| `itunes_author`              | Yes      | The author name for your show. No Markdown or HTML.                                                                                                                                 | "Matt Stratton"                                                                                                                                                                                |
| `itunes_summary`             | Yes      | Limited to 4000 characters or less, plain text, no HTML.                                                                                                                            | "The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about podcasting from the most inspiring experts to ever show up on the whole internet." |
| `itunes_owner_name`          | Yes      | The name associated with the owner of the podcast on Apple Podcasts. Will not be displayed publicly on Apple Podcasts.                                                                              | "Matt Stratton"                                                                                                                                                                                |
| `itunes_owner_email`         | Yes      | The e-mail address that will be used to contact the owner of the podcast for communication specifically about their podcast on Apple Podcasts. It will not be publicly displayed on Apple Podcasts. | "your.name@gmail.com"                                                                                                                                                                          |
| `itunes_image`               | Yes      | Fully qualified path to your podcast's artwork for Apple Podcasts. Must conform to the [Apple Podcasts image requirements](https://help.apple.com/itc/podcasts_connect/#/itc1723472cb), and be a JPG or PNG with a minimum of 1400 x 1400 pixels and a maximum of 3000 x 3000 pixesls                                                                                                                        | "https://www.arresteddevops.com/img/ado-podcast-logo.png"                                                                                                                                      |
| `itunes_top_category`        | Yes      | The main category for your podcast in Apple Podcasts                                                                                                                                        | "Technology"                                                                                                                                                                                   |
| `itunes_first_sub_category`  | No       | The first sub-category for your podcast in Apple Podcasts                                                                                                                                   | "Software How-To"                                                                                                                                                                              |
| `itunes_second_sub_category` | No       | The second sub-category for your podcast in Apple Podcasts. Do not set this if you didn't set the first one.                                                                                | "Tech News"                                                                                                                                                                                    |
| `explicit`                   | No      | Whether or not the podcast itself contains explicit content (can also be set on a per-episode basis, see below). Default value from the archetype is "no". Valid values are "yes", "no", or "clean"                                                                                                                                    | "yes"                                                                                                                                                                                                                                 |

### Favicon parameters

These are the favicon parameters for your overall site. They should be set under `[params.realfavicongenerator]`

Refer to https://realfavicongenerator.net/ for more details.

| Field Name                | Required | Description                                                                                    | Example              |
|---------------------------|----------|------------------------------------------------------------------------------------------------|----------------------|
| `mask_icon_color`         | No       | Mac OS X El Capitan Safari                                                                     | "#5bbad5"            |
| `msapplication_tilecolor` | No       | Windows 8 and 10                                                                               | "#2b5797"            |
| `theme_color`             | No       | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color                | "#ffffff"            |


### Social Parameters

These are the social network parameters for your overall site. They should be set under `[params.social]` and all of them allow either the short form (e.g. just your twitter handle) where the theme will construct the URL or the full URL beginning with https:// (with the exception of Mastodon, as that does not have a common url scheme)

| Field Name       | Required | Description                                                                                                      | Example              |
|------------------|----------|------------------------------------------------------------------------------------------------------------------|----------------------|
| `github`         | No       | GitHub username only.                                                                                            | "mattstratton"       |
| `gitlab`         | No       | GitLab username only.                                                                                            | "mattstratton"       |
| `facebook`       | No       | Name of the Facebook page (not the URL).                                                                         | "Arresteddevops"     |
| `facebook_admin` | No       | This needs to be one or more page admins to get domain insights.                                                 | ["500557137","1234"] |
| `twitter`        | No       | Twitter name without the `@` sign.                                                                               | "arresteddevops"     |
| `twitter_domain` | Yes      | This domain shows in twitter cards as "View on `twitter_domain`".                                                | "arresteddevops.com" |
| `googleplus`     | No       | Google Plus page name, without the `+`.                                                                          | "ArrestedDevOps"     |
| `pinterest`      | No       | Pinterest username.                                                                                              | "nozzleio"           |
| `instagram`      | No       | Instagram username.                                                                                              | "nozzleio"           |
| `youtube`        | No       | Name of the YouTube channel.                                                                                     | "arresteddevops"     |
| `linkedin`       | No       | LinkedIn profile name. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL. | "mattstratton"       |
| `twitch`         | No       | Twitch channel/profile for your site. This is the part that comes after `https://twitch.tv/`                     | "mattstratton"       |
| `mastodon`         | No       | Mastodon account for your site. This needs to be the fully qualified URL including `https`                     | "https://hachyderm.io/@mattstratton"       |

### Giscus Parameters

As an alternative to Disqus for comments, you can leverage GitHub discussions, right below the episodes, thanks to [Giscus](https://giscus.vercel.app/). Giscus is driven by parameters under the `[params.giscus]` section.

Follow the instructions at [giscus.vercel.app](https://giscus.vercel.app/) to set it up and get the value of the parameters.

Example:

```toml
  [params.giscus]
    data_repo="github-org/repo"
    data_repo_id="MDAaBbClcG9zaXRvcnkzNTAyOTk3OTc="
    data_category_id="MDE8Pazekd2N1c3Npb25DYXRlZ29yeTMyOTE4MDUx"
    data_mapping="pathname"
    data_theme="light"
    crossorigin="anonymous"
```

### Host/Author Parameters

We use the "authors" from the configuration to list hosts in the jumbotron or sidebar. All hosts should have an entry in here. These settings should be set under `[params.authors]` and then `[params.authors.USERNAME]` for each host, for example:

```
[params.authors]
  [params.authors.Matt]
    name	= "Matt Stratton"
```

| Field Name  | Required | Description                                                                                   | Example                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------|----------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`      | Yes      | The full name of the author/host.                                                             | "Matt Stratton"                                                                                                                                                                                                                                                                                                                                                                                               |
| `Pronouns`      | no      | The preferred pronoun of the author/host.                                                             | "She/Her", "He/him", "They/Them"                                                                                                                                                                                                                                                                                                                                                                                               |
| `thumbnail` | Yes      | The image for the user. This can either be a fully qualifed URL, or relative to the baseURL.  | "http://www.arresteddevops.com/matt.png" or "img/hosts/matt.png"                                                                                                                                                                                                                                                                                                                                              |
| `bio`       | Yes      | The author/host bio. Supports Markdown.                                                       | "Matt Stratton is a solutions architect at Chef, where he demonstrates how Chef’s automation platform provides speed and flexibility to clients’ infrastructure. He is devoted to concepts like Continuous Delivery and Infrastructure as Code, and his license plate actually says “DevOps”. He lives in Chicago and has an unhealthy obsession with Doctor Who, Firefly, and Game of Thrones. And whiskey." |

#### Host Social Parameters

TODO: Remove these parameters from exampleSite, but also add one for the the shortname of the host for linking to host page (optional)

You also will set the social parameters (all are optional) under `[params.authors.USERNAME.social]` and all of them allow either the short form (e.g. just your twitter handle) where the theme will construct the URL or the full URL beginning with https://

| Field Name  | Required | Description                                                                                                      | Example                        |
|-------------|----------|------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `github`    | No       | GitHub username only.                                                                                            | "mattstratton"                 |
| `facebook`  | No       | Name of the user's Facebook page (not the URL).                                                                  | "matt.stratton"                |
| `twitter`   | No       | Twitter name without the `@` sign.                                                                               | "mattstratton                  |
| `pinterest` | No       | Pinterest username.                                                                                              | "nozzleio"                     |
| `instagram` | No       | Instagram username.                                                                                              | "nozzleio"                     |
| `youtube`   | No       | Name of the user's YouTube profile.                                                                              | mattstratton                   |
| `twitch`    | No       | Name of the user's Twitch profile.                                                                               | mattstratton                   |
| `linkedin`  | No       | LinkedIn profile name. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL. | "mattstratton"                 |
| `homepage`  | No       | The user's website, including the `http` at the beginning.                                                       | "https://www.mattstratton.com" |
| `mastodon`  | No       | The user's Mastodon URL, including the `https` at the beginning.                                                       | "https://hachyderm.io/@mattstratton" |

### Link Parameters

To generate the list of links in the sidebar, you will set them in the `config.toml` similar to this:

```
[params.links]
  [params.links.ado]
    name = "Arrested DevOps"
    url = "https://www.arresteddevops.com"
  [params.links.ffs]
    name = "Food Fight Show"
    url = "https://foodfightshow.org"
  [params.links.sdt]
    name = "Software Defined Talk"
    url = "https://cote.io/podcasts/sdt/"
```

The identifier for the link simply needs to be unique; it's not used anywhere else.

### A note about `BaseURL`

This theme is fairly dependent upon a proper `BaseURL` being set in the `config.toml`. This has to do with how the feed is generated as well as some of the social metadata (these things cannot be relative URL's). I'm fully aware that this can cause issues with some build systems, and I'm trying to work on a good solution for this. This must end in a slash. Example: `https://www.arresteddevops.com/`

### Pagination setting with grid layout

If you are using the grid layout, you need to ensure that your pagination is set to a multiple of 3. For example, in your config file:

```
paginate = "9"
```

### Permalinks

I recommend the following permalink settings, although the theme will work just fine without them:

```
[permalinks]
	page = "/:filename/"
	about = "/:filename/"
	episode = "/:filename/"
```

### Taxonomies

If you want to use the Categories, Series, or Tags features, you will need to set the appropriate taxonomies. Example:

```
[taxonomies]
  category = "categories"
  series = "series"
  tag = "tags"
```
### Menus

Castanet supports menus with up to one submenu per menu item. The menu name must be "Main", and the menus are sorted based upon their identifier. At this time, you must have at least one menu item, or the theme will error out.

Example:
```
[[Menu.Main]]
    name = "About"
    identifier = "about"
    url = "about"

[[Menu.Main]]
    name = "Contact"
    identifier = "contact"
    url = "contact"

[[Menu.Main]]
    name = "Hosts"
    identifier = "hosts"
    url = "host"

[[Menu.Main]]
    name = "Guests"
    identifier = "guests"
    url = "guest"

[[Menu.Main]]
    name = "Resources"
    identifier = "resources"
    url = "#!"

[[Menu.Main]]
    name = "Books"
    identifier = "books"
    url = "books"
    parent = "resources"
[[Menu.Main]]
    name = "Podcasts"
    identifier = "podcasts"
    url = "books"
    parent = "resources"

```

### Podlove Subscribe Button

[Podlove Subscribe Button](https://subscribe-button.podlove.org/) is a universal and easy-to-use button, to subscribe to podcasts with player clients or website players.
To customize your button please add the following section to your `config.toml`, which covers all features which are provided by the generator on [subscribe-button.podlove.org](https://subscribe-button.podlove.org/).

```
[params.podlove]
  subscribe_title = ""              # fallback: site title from above
  subscribe_subtitle = ""           # fallback: ""
  subscribe_description = ""        # fallback: ""
  subscribe_cover = "img/logo.jpg"  # fallback: ""
  subscribe_color = "#585e6c"       # fallback: ""
  subscribe_size = "medium"         # options: small, medium, big
  subscribe_format = "rectangle"    # options: rectangle, square, cover
  subscribe_style = "filled"        # options: filled, outline, frameless
  subscribe_language = "de"         # options: nl (dutch), en (english), eo (esperanto), de (german), fi (finnish), fr (french), ja (french)
  subscribe_feed_type = "audio"     # options: audio, video
  subscribe_feed_format = "mp3"     # options: mp3, aac, ogg, opus
```

## Blogs

Every blogs requires a page in the `content/blog` on your site. The command `hugo new blog/myblog.md` should populate it properly.

A blog file takes the following structure:

```
+++
Description = "Another blog post!"
Date = 2020-11-12T13:33:18-06:00
PublishDate = 2020-11-12T13:33:18-06:00 # this is the datetime for the when the epsiode was published. This will default to Date if it is not set. Example is "2016-04-25T04:09:45-05:00"
title = "My second blog"
images = ["img/episode/default-social.jpg"]
blog_image = "img/episode/default.jpg"
Author = "Chris Reddington"
categories = ["DevOps", "Release"]
tags = ["Ring Deployment", "Phased Rollout"]
series = ["The Nirvana of DevOps"]
#aliases = ["/##"]
+++
YOLO keytar scenester, williamsburg etsy mlkshk neutra hexagon photo booth church-key messenger bag. Lyft small batch enamel pin, bicycle rights la croix migas chartreuse ramps microdosing authentic pickled gochujang kombucha. Wolf vaporware stumptown, glossier vinyl everyday carry organic. Subway tile af tumblr listicle photo booth meh trust fund tote bag. Post-ironic gentrify direct trade blue bottle, fingerstache master cleanse butcher. Succulents ethical leggings hexagon vexillologist migas you probably haven't heard of them keytar sustainable church-key viral salvia hell of kinfolk. Lumbersexual taiyaki la croix literally man bun, truffaut mustache godard edison bulb artisan keytar jianbing air plant swag polaroid.

Actually vinyl fingerstache kickstarter +1 roof party, XOXO swag tousled cold-pressed authentic affogato selvage taiyaki schlitz. Stumptown tumeric lumbersexual, pok pok pabst butcher helvetica coloring book keytar williamsburg. Fam cloud bread meditation, post-ironic waistcoat narwhal chicharrones live-edge authentic try-hard cornhole bespoke kickstarter echo park portland. Cold-pressed lo-fi cornhole kinfolk. Sustainable scenester seitan, vape fanny pack put a bird on it succulents. 90's dreamcatcher messenger bag flannel +1 taxidermy occupy single-origin coffee four dollar toast master cleanse VHS. Small batch williamsburg tumeric meggings fanny pack pok pok paleo cardigan.

Leggings photo booth beard tumeric heirloom 90's flexitarian locavore unicorn, salvia humblebrag biodiesel lomo. Bushwick chillwave distillery kombucha tbh cray roof party tacos. Wayfarers fingerstache irony, celiac schlitz microdosing austin keytar echo park. Flannel drinking vinegar austin sustainable banjo bicycle rights keytar subway tile intelligentsia williamsburg humblebrag vinyl. Prism keffiyeh mlkshk, venmo glossier distillery +1 raw denim edison bulb pinterest crucifix. Freegan iceland chartreuse leggings hella single-origin coffee tilde. Swag neutra chia before they sold out.

Cred tilde flannel shaman helvetica cronut bitters mlkshk. Selvage lyft chartreuse shaman man braid gastropub tattooed post-ironic organic freegan austin forage. Enamel pin unicorn +1 schlitz lomo man bun wayfarers. Readymade bespoke polaroid iceland sriracha schlitz tousled flannel. Raw denim enamel pin fanny pack sustainable, butcher deep v thundercats try-hard forage woke fam keffiyeh. Cronut kitsch cray shoreditch pabst paleo normcore DIY bespoke cardigan pug. Crucifix bitters knausgaard neutra, viral distillery selvage banh mi activated charcoal cray.

Tofu taiyaki sriracha unicorn try-hard cornhole cloud bread keytar wayfarers kinfolk pour-over art party small batch. Tousled DIY coloring book wolf, small batch master cleanse austin letterpress af. Humblebrag pop-up vaporware, readymade organic woke af la croix succulents. Yr hoodie mlkshk woke whatever portland cornhole, brunch raw denim shaman YOLO prism bicycle rights. Helvetica la croix fingerstache chambray tumblr ramps blog waistcoat 8-bit. Dreamcatcher stumptown distillery mixtape sriracha blog la croix. Pabst copper mug street art, kinfolk letterpress chambray swag occupy shoreditch echo park migas post-ironic.

Dummy text? More like dummy thicc text, amirite?
```

| Field Name   | Required | Description                                                                                                                                                                      | Example                               |
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Description  | Yes      | The description of the blog, which is used on summary pages as well as the feed. Markdown is allowed, but only links.                                                            | Another blog post!                    |
| Date         | Yes      | The release date of the blog. The hugo new blog will pre-populate this, but you may want to adjust it.                                                                           | 2020-11-12T13:33:18-06:00             |
| PublishDate  | No       | The datetime used by hugo when the blog should be published. This is only required if you want to set the blog post to be released on a different date from when it was written. | 2020-11-12T13:33:18-06:00             |
| title        | Yes      | The title of the blog.                                                                                                                                                           | "My second blog"                      |
| images       | No       | The social sharing image used by Facebook, Twitter, etc. The archetype will populate this with a default sharing image. This image needs to be relative to your baseURL          | "img/episode/default-social.jpg"      |
| blog_image   | Yes      | The square thumbnail to represent the blog. A default image is provided, and the archetype will pre-populate it. This image needs to be relative to your baseURL.                | "img/episode/default.jpg"             |
| Author       | Yes      | The text representation of the Author of the post.                                                                                                                               | "Chris Reddington"                    |
| categories[] | No       | If you are using taxonomies, this is the array of categories for the blog.                                                                                                       | ["DevOps", "Release"]                 |
| series[]     | No       | If you are using taxonomies, this is the array of series for the blog.                                                                                                           | ["The Nirvana of DevOps"]             |
| tags[]       | No       | If you are using taxonomies, this is the array of tags for the                                                                                                                   | ["Ring Deployment", "Phased Rollout"] |
| aliases      | No       | Other aliases for this blog.                                                                                                                                                     | ["/##"]                               |

## Episodes

Every episode requires a page in the `content/episode` on your site. The command `hugo new episode/myepisode.md` should populate it properly.

An episode file takes the following structure:

```
+++
Description = "Bootstrapping alpha seed money scrum project. Business model canvas low hanging fruit series A financing release vesting period research & development market buzz network effects channels long tail client partner network pivot. Innovator market android buyer gamification. User experience gamification interaction design sales. Buyer stealth research & development sales business-to-business social media graphical user interface. Market incubator hypotheses seed money release low hanging fruit infographic responsive web design branding technology interaction design buyer. Ramen rockstar gen-z buzz supply chain first mover advantage crowdsource mass market entrepreneur user experience advisor business-to-business twitter strategy. Termsheet low hanging fruit lean startup crowdfunding customer. Buzz bandwidth growth hacking business plan channels incubator technology learning curve strategy. Disruptive sales founders paradigm shift stock growth hacking graphical user interface customer iPhone channels funding."
aliases = ["/12"]
author = "Matt"
date = "2016-09-25T04:10:01-05:00"
episode = "12"
episode_image = "img/episode/default.jpg"
episode_banner = "img/episode/default-banner.jpg"
explicit = "no"
guests = ["jsmith"]
sponsors = ["bluthcompany"]
images = ["img/episode/default-social.jpg"]
podcast_duration = "1:08:22"
podcast_file = "arrested-devops-podcast-episode053.mp3"
podcast_bytes = "123456789"
title = "Back to School"
youtube = ""
truncate = ""
upcoming = false

+++

Graphical user interface influencer value proposition startup hackathon iPad analytics gen-z entrepreneur release traction product management long tail. Buzz business-to-consumer android learning curve innovator seed money iteration buyer startup. Holy grail graphical user interface responsive web design lean startup bandwidth strategy release innovator low hanging fruit non-disclosure agreement. Strategy handshake iPhone interaction design early adopters. Low hanging fruit crowdfunding vesting period. Low hanging fruit social proof series A financing product management founders bootstrapping ecosystem buyer supply chain hackathon direct mailing churn rate client. Scrum project direct mailing ecosystem monetization innovator. Partner network gen-z conversion pivot iPhone infographic growth hacking business plan facebook alpha marketing beta technology. Focus crowdsource venture strategy user experience. Lean startup disruptive user experience stealth interaction design monetization client long tail virality seed round direct mailing hypotheses technology burn rate.
```

| Field Name         | Required | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                               |
|--------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Description`      | Yes      | The description of the episode, which is used on summary pages as well as the feed. Markdown is allowed, but only links.                                                                                                                                                                              | "Bootstrapping alpha seed money scrum project. Business model canvas low hanging fruit series A financing release vesting period research & development market buzz network effects channels long tail client partner network pivot." |
| `aliases`          | No       | Other aliases for this episode. You may wish to create an alias to the episode number, etc.                                                                                                                                                                       | ["/12"]                                                                                                                                                                                                                               |
| `hosts`           | No       | The hosts of the episode, based upon the base filename                                                                                                                                                                                                                  | "[mstratton, thess]"                                                                                                                                                                                                                                |
| `date`             | Yes      | The release date of the episode. The `hugo new` episode will pre-populate this, but you may want to adjust it.                                                                                                                                                    | "2016-09-25T04:10:01-05:00"                                                                                                                                                                                                           |
| `episode`          | No       | The episode number. This is used in the Apple Podcasts tags of the feed.                                                                                                                                                                                                                             | "12"                                                                                                                                                                                                                                  |
| `episode_image`    | Yes      | The square thumbnail to represent the episode. A default image is provided, and the archetype will pre-populate it. This image needs to be relative to your baseURL.                                                                                              | "img/episode/default.jpg"                                                                                                                                                                                                             |
| `episode_banner`   | No       | The banner to represent the episode. This image needs to be relative to your baseURL. This image will be display at the top of the episode page, as well as the top of the home page for the most recent episode. Recommend that it is at least 1024 pixels wide. | "img/episode/default-banner.jpg"                                                                                                                                                                                                      |
| `explicit`         | Yes      | Whether or not the episode contains explicit content. Default value from the archetype is "no". Valid values are "yes", "no", "true" or "false".                                                                                                                                    | "yes"                                                                                                                                                                                                                                 |
| `guests`           | No       | If your episode has guests, populate the `guests[]` array with a comma-separated list of their names. If there is only one guest, no comma is needed.                                                                                                             | ["jdoe", "msmith", "gbluth"] or ["jsmith]"                                                                                                                                                                                            |
| `sponsors`         | No       | If your episode has sponsors, populate the `sponsors[]` array with a comma-separates list of their identifiers. If there is only one sponsor, no comma is needed.                                                                                                 | ["bluthcompany", "sitwell"] or ["suddenvalley"]                                                                                                                                                                                       |
| `images`           | No       | The social sharing image used by Facebook, Twitter, etc. The archetype will populate this with a default sharing image. This image needs to be relative to your baseURL                                                                                           | ["img/episode/default-social.jpg"]                                                                                                                                                                                                    |
| `podcast_duration` | Yes      | The duration of the podcast, up to the amount of seconds.                                                                                                                                                                                                         | "1:08:22" or "59:32"                                                                                                                                                                                                                  |
| `podcast_file`     | Yes      | The filename of your episode, relative to the `media_prefix` of your config.toml.                                                                                                                                                                                 | `"arrested-devops-podcast-episode053.mp3"`                                                                                                                                                                                            |
| `podcast_bytes`    | No       | The length of the podcast file in bytes. This is optional, but Apple Podcasts and many other podcast players prefer this to be set.                                                                                                                                       | "23907533"                                                                                                                                                                                                                            |
| `Title`            | Yes      | The title of the episode.                                                                                                                                                                                                                                         | "Back to School"                                                                                                                                                                                                                      |
| `subtitle`         | No       | The subtitle of the episode. Only used in the RSS feed in the `itunes:subtitle` tag. If this value is empty/nil, the value from Description will be used. Truncated at 243 characters.                                                                            | "Back to School"                                                                                                                                                                                                                      |
| `youtube`          | No       | The ID of the YouTube video (not the full URL). This will display the video on the episode page, and if you are using the row layout, it will display for the latest episode.                                                                                     | "8ClZXJsgpHY"                                                                                                                                                                                                                         |
| `truncate`         | No       | The number of characters to truncate the summary on the row layout.. The default value (if not set) is 600 characters.                                                                                                                                            | "700"                                                                                                                                                                                                                                 |
| `guid`             | No       | A fixed, globally unique identifier for the episode which should never change. If one is not specified the URL of the `podcast_file` will be used instead.                                                                                                        | "aae20190418"                                                                                                                                                                                                                         |
| `transcript`       | No       | The path to the transcript file. The file can have Markdown or be in HTML. It must be relative to the root of your site (this is a file path, not a URL). It is recommended to put them in your `static` directory so that Hugo doesn't try to process them.      | "/static/transcripts/chatops.txt" |
| `upcoming`       | No       | Boolean value if the episode should be considered "upcoming" and not published. Values include `true` or `false`. If set to `true`, the episode will not show up in episode lists (including guest and host pages) and will not be part of the feed. Upcoming episodes will be listed on the "Upcoming" page if created.      | true |
| `categories[]`       | No       | If you are using taxonomies, this is the array of categories for the epsiode.     | ["Virtual Reality"] |
| `series[]`       | No       | If you are using taxonomies, this is the array of series for the epsiode.     | ["Modern Tech Trends"] |
| `tags[]`       | No       | If you are using taxonomies, this is the array of tags for the epsiode.     | ["VR", "Technology"] |
### Upcoming Episodes

If you would like to display upcoming episodes, you need to do a couple things. First, you will need to create a page where the upcoming episodes will be listed. You can check out `exampleSite` for an example, but basically, you want to create `content/upcoming/_index.md`.

Any episodes that have `upcoming` in their frontmatter set to `true` will be listed here, but not listed on any other pages (feed, home page, guest pages, etc). Additionally, episodes that are marked as "upcoming" will not display a YouTube video or audio player, even if those parameters are set.

Note: you will need to set `buildFuture = true` in your `config.toml` to allow Hugo to build upcoming episodes that are dated in the future.

## Guests

If you don't have guests on your episodes, feel free to ignore this section.

### Guest Pages

Every guest on your show needs a corresponding page  in the `content/guest` directory of your site. Generally speaking, you should be able to name these however you like, but I have only tested it with the format `firstinitiallastname.md`, i.e., for "John Doe" the file would be `jdoe.md`.

A guest file takes the following structure:

```
+++
Title = "John Doe"
Pronouns = "They/Them"
Twitter = "johndoe"
Website = "http://www.google.com"
Type = "guest"
Facebook = "johndoe"
Linkedin = "johndoe"
GitHub = "johndoe"
Thumbnail = "img/guest/jdoe.jpg"
Twitch = "johndoe"
YouTube = "johndoe"
Aka = ["jsmith", "jsmith2"]
+++
Spoon fresh pie ingredients groceries oranges luncheon farm. Broth chick peas Chinese food indie foods. Cream heating cheese food locally grown first class caramelize restaurant grocery shopping savory chick peas. Recommendations lovely starter soda herbes fridge chocolate eat better quinoa sausage java chef locally grown wholesome. Broil sweet sushi lasagna cream indian. Desert sour vegetarian sous-chef soda oven tasty eat better rice recommendations relish salt butter grape. Grocery shopping delicious Chinese food beets conserve ginger. Authentic blend drink sausage. Groceries sour desert. Take away lasagna consumer luncheon scent cookie beer groceries meals restaurants java cheese vegan chick peas.

```

| Field Name  | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Example                        |
|-------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `Title`     | Yes      | The full name of the guest. This is what is displayed on the episode page, etc.                                                                                                                                                                                                                                                                                                                                                                                                             | "Jane Smith"                   |
| `Pronouns`      | no      | The preferred pronoun of the author/host.                                                             | "She/Her", "He/him", "They/Them"                                                                                                                                                                                                                                                                                                                                                                                               |
| `Thumbnail` | No       | The image for the guest. This image must be 500 px x 500 px. You can either enter a value relative to your `BaseURL`, or a fully qualified URL. If you want to use the default, set this to `""`. Optional. If left blank, or not existent, a default image will be provided. You can replace this default image by putting a new 500 px x 500 px PNG image at `/static/img/guest/default-guest.png` in your site (not in the theme!). Please ensure that this path does NOT start with `/` | "img/guest/jane-smith.png"     |
| `Website`   | No       | The guest's website. Be use to includ http(s) at the beginning.                                                                                                                                                                                                                                                                                                                                                                                                                             | "https://www.mattstratton.com" |
| `GitHub`    | No       | Guest's GitHub username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | "mattstratton"                 |
| `Facebook`  | No       | Guest's Facebook username. Do not use the full URL.                                                                                                                                                                                                                                                                                                                                                                                                                                         | "matt.stratton"                |
| `Twitter`   | No       | Guest's Twitter username, without the `@`.                                                                                                                                                                                                                                                                                                                                                                                                                                                  | "mattstratton"                 |
| `LinkedIn`  | No       | LinkedIn profile name. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL.                                                                                                                                                                                                                                                                                                                                                                            | "mattstratton"                 |
| `Pinterest` | No       | Pinterest profile name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "mattstratton"                 |
| `Instagram` | No       | Instagram profile name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "mattstratton"                 |
| `YouTube`   | No       | YouTube profile/channel name                                                                                                                                                                                                                                                                                                                                                                                                                                                                | "mattstratton"                 |
| `Twitch`   | No       | Twitch profile/channel name                                                                                                                                                                                                                                                                                                                                                                                                                                                                | "mattstratton"                 |
| `mastodon`  | No       | The user's Mastodon URL, including the `https` at the beginning.                                                       | "https://hachyderm.io/@mattstratton" |
| `Aka`       | No       | **DEPRECATED - use `guest_group` instead.** The name(s) of another guest file which is an alternate identity for this guest (for example, if the bio changes, name changes, etc). This should be set in both directions (i.e., the `Aka` field should be set on `mstratton.md` and `mstratton2.md` pointing to each other).                                                                                                                                                                                                                | Aka = ["jsmith", "jsmith2"]                   |
| `guest_group`       | No       | Set to an identifier to mark guests as being different versions of the same person. Only the most recent file in a guest group will appear on the Guests page. Additionally, all members of a guest group will display the same "other episodes" on guest pages.                                                                                                                                                                                                               | "mattstratton"                   |

## Hosts

Host information comes from host pages. You can use the shortcode TODO: add shortcode

### Host Pages

Every host  needs a corresponding page  in the `content/host` directory of your site. Generally speaking, you should be able to name these however you like, but I have only tested it with the format `firstinitiallastname.md`, i.e., for "John Doe" the file would be `jdoe.md`.

A host file takes the following structure:


```
+++
Title = "John Doe"
Twitter = "johndoe"
Website = "http://www.google.com/"
Type = "host"
Facebook = "johndoe"
Linkedin = "johndoe"
GitHub = "johndoe"
Thumbnail = "img/host/johndoe.png"
Pinterest = "johndoe"
Instagram = "johndoe"
YouTube = "johndoe"
Twitch = "johndoe"
+++
Spoon fresh pie ingredients groceries oranges luncheon farm. Broth chick peas Chinese food indie foods. Cream heating cheese food locally grown first class caramelize restaurant grocery shopping savory chick peas. Recommendations lovely starter soda herbes fridge chocolate eat better quinoa sausage java chef locally grown wholesome. Broil sweet sushi lasagna cream indian. Desert sour vegetarian sous-chef soda oven tasty eat better rice recommendations relish salt butter grape. Grocery shopping delicious Chinese food beets conserve ginger. Authentic blend drink sausage. Groceries sour desert. Take away lasagna consumer luncheon scent cookie beer groceries meals restaurants java cheese vegan chick peas.
```

| Field Name  | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Example                        |
|-------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `Title`     | Yes      | The full name of the guest. This is what is displayed on the episode page, etc.                                                                                                                                                                                                                                                                                                                                                                                                             | "Jane Smith"                   |
| `Thumbnail` | No       | The image for the guest. This image must be 500 px x 500 px. You can either enter a value relative to your `BaseURL`, or a fully qualified URL. If you want to use the default, set this to `""`. Optional. If left blank, or not existent, a default image will be provided. You can replace this default image by putting a new 500 px x 500 px PNG image at `/static/img/guest/default-guest.png` in your site (not in the theme!). Please ensure that this path does NOT start with `/` | "img/guest/jane-smith.png"     |
| `Website`   | No       | The guest's website. Be use to includ http(s) at the beginning.                                                                                                                                                                                                                                                                                                                                                                                                                             | "https://www.mattstratton.com" |
| `GitHub`    | No       | Guest's GitHub username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | "mattstratton"                 |
| `Facebook`  | No       | Guest's Facebook username. Do not use the full URL.                                                                                                                                                                                                                                                                                                                                                                                                                                         | "matt.stratton"                |
| `Twitter`   | No       | Guest's Twitter username, without the `@`.                                                                                                                                                                                                                                                                                                                                                                                                                                                  | "mattstratton"                 |
| `LinkedIn`  | No       | LinkedIn profile name. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL.                                                                                                                                                                                                                                                                                                                                                                            | "mattstratton"                 |
| `Pinterest` | No       | Pinterest profile name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "mattstratton"                 |
| `Instagram` | No       | Instagram profile name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "mattstratton"                 |
| `YouTube`   | No       | YouTube profile/channel name                                                                                                                                                                                                                                                                                                                                                                                                                                                                | "mattstratton"                 |
| `Twitch`    | No       | Twitch profile/channel name                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | "mattstratton"                 |
| `Hide`      | No       | Optional flag to hide this host from the Hosts page. Must be set to "true" if you want the host to not show up. Case-sensitive.                                                                                                                                                                                                                                                                                                                                                             | "true"                         |

## Sponsors

If your podcast doesn't have sponsors, feel free to disregard this section.

Sponsors are made up of two portions - a data file that describes the sponsor, and the banner image for the sponsor. The sponsor data files are stored in `data/sponsors`, and each file needs to be named after the identifier for the sponsor. There are three fields for each sponsor, and they are all required. An example sponsorfile would look like this:

`data/sponsors/bluthcompany.yml`

```
name: bluthcompany
url: "https://www.google.com"
ad: "img/sponsors/bluthcompany.jpg"
```

The ad can either be a fully qualified URL (such as `https://www.google.com/images/bluth.jpg`) or a path relative to your `static` directory.
