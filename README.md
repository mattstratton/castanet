[![Build Status](https://travis-ci.org/mattstratton/castanet.svg?branch=master)](https://travis-ci.org/mattstratton/castanet)
[![GitHub release](https://img.shields.io/github/release/mattstratton/castanet.svg)](https://github.com/mattstratton/castanet/releases)
[![Github All Releases](https://img.shields.io/github/downloads/mattstratton/castanet/total.svg)]()
[![license](https://img.shields.io/github/license/mattstratton/castanet.svg)]()

If you would like to receive emails when new versions of this theme are released, [subscribe to the announcement email list](http://eepurl.com/cMAJcL).

# Castanet

Castanet is a a Hugo theme for sites that are primarily podcasts. It is heavily influenced by [ado-hugo](//github.com/arresteddevops/ado-hugo) by [Matt Stratton](//github.com/mattstratton).

An example site can be found at http://sample-castanet.netlify.com/

![Castanet screenshot](https://github.com/mattstratton/castanet/raw/master/images/screenshot.png)

Previews of different configurations:

- [Orange Row](https://www.castanet-theme.com/orange-row)
- [Orange Grid](https://www.castanet-theme.com/orange-grid)
- [Blue Row](https://www.castanet-theme.com/blue-row)
- [Blue Grid](https://www.castanet-theme.com/blue-grid)
- [Grey Row](https://www.castanet-theme.com/grey-row)
- [Grey Grid](https://www.castanet-theme.com/grey-grid)

## Installation

Download the latest version (zip file, not source code) from the [Releases](https://github.com/mattstratton/castanet/releases) page.


For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing Castanet successfully it requires a just a few more steps to get your site running.


### The config file

You will need to add a handful of configuration items to your `config.toml` file. You can take a look at the [example site](https://github.com/mattstratton/castanet/blob/master/exampleSite/config.toml) to see them in action. They are described below:

#### Top-level items



- `googleAnalytics` - the Google Analytics tracking ID. We use the async method. Example: `"UA-123-45"`
- `disqusShortname` - the shortname for use in Disqus comments. Example: `"arresteddevops"`. Note: The Disqus comments will not appear if you are running on `localhost`.

#### General Parameters

These should be set under the `[params]` section:

| Field Name              | Required | Description                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                   |
|-------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                         |          |                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                           |
| `site_theme`            | No       | The color scheme for the overall site. Currently the options are `orange` (default), `grey`, and `blue`.                                                                                                                                                            | "blue"                                                                                                                                                                                                                                    |
| `site_layout`           | No       | The layout for the home page. The options are `row` (default) or `grid`.                                                                                                                                                                                            | "grid"                                                                                                                                                                                                                                    |
| `enable_jumbo`          | No       | When using the `row` layout, will set a jumbotron at the top instead of the sidebar.                                                                                                                                                                                | "true"                                                                                                                                                                                                                                    |
| `custom_css`            | No       | Array of custom CSS files for over-riding theme settings or adding your own classes. These files should be put into your `static` directory (not the `static` directory of the theme).                                                                              | ["custom.css", "other_custom.css"]                                                                                                                                                                                                        |
| `about_logo`            | No       | The logo (250px x 250px) you would like to appear on your About page. If not set, this will default to your iTunes image. This path should be relative to your main URL, for example, a file put in your `static` directory. This path should not start with a `/`. | "img/my_logo.png"                                                                                                                                                                                                                         |
| `copyright_notice`      | Yes      | Your copyright information for the footer of the page. Can contain Markdown.                                                                                                                                                                                        | `"Copyright 2016 [Matt Stratton](https://www.mattstrattion.io)"`                                                                                                                                                                          |
| `itunes_subscribe`      | No       | The URL of your podcast in the iTunes store.                                                                                                                                                                                                                        | "http://itunes.apple.com/us/podcast/arrested-devops/id773888088?mt=2&uo=4&at=11lsCi"                                                                                                                                                      |
| `android_subscribe`     | No       | The URL for your podcast for Android users. You can generate this URL at [Subscribe on Android](https://subscribeonandroid.com).                                                                                                                                    | "http://subscribeonandroid.com/feeds.podtrac.com/VGAulpN7MY1U"                                                                                                                                                                            |
| `google_play_subscribe` | No       | The URL to your podcast in the Google Play store.                                                                                                                                                                                                                   | "https://goo.gl/app/playmusic?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Ihj4yege3lfmp3vs5yoopgxijpi?t%3DArrested_DevOps"                                                            |
| `sticher_subscribe`     | No       | The URL to your podcast on Stitcher.                                                                                                                                                                                                                                | "http://www.stitcher.com/podcast/arrested-devops-2/arrested-devops"                                                                                                                                                                       |
| `soundcloud_subscribe`  | No       | The URL to your podcast's feed on Soundcloud                                                                                                                                                                                                                        | "http://feeds.soundcloud.com/users/soundcloud:users:203144248/sounds.rss"                                                                                                                                                                 |
| `pocketcasts_subscribe` | No       | The URL to your podcast's feed on Pocketcasts                                                                                                                                                                                                                       | "http://pcasts.in/feed/feeds.soundcloud.com/users/soundcloud:users:203144248/sounds.rss"                                                                                                                                                  |
| `mailchimp_subscribe`   | No       | The URL for your MailChimp signup form. This can be acquired from creating a "Super Slim" Embedded form on MailChimp. Do NOT include the entire form HTML; you just need the path for the `form action`.                                                            | "//arresteddevops.us3.list-manage.com/subscribe/post?u=5e4cbcac996bb9df25f970a89&id=154fa76bcc"                                                                                                                                           |
| `rss_subscribe`         | No       | Optional parameter to over-ride the RSS feed URL, in case you use something like Feedburner. You likely do NOT need to set this parameter unless you have a very good reason to do so.                                                                              | "http://feeds.podtrac.com/VGAulpN7MY1U"                                                                                                                                                                                                   |
| `description`           | Yes      | Description of your show. Can use Markdown.                                                                                                                                                                                                                         | `"The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about [podcasting](https://en.wikipedia.org/wiki/Podcast) from the most inspiring experts to ever show up on the whole internet."` |
| `media_prefix`          | Yes      | The URL to pre-pend to your podcast files. Must end in a slash.                                                                                                                                                                                                     | "https://media.blubrry.com/arresteddevops/content.blubrry.com/arresteddevops/"                                                                                                                                                            |

#### Feed Parameters

These should be set under `[params.feed]`

| Field Name                   | Required | Description                                                                                                                                                                         | Example                                                                                                                                                                                        |
|------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `feed_copyright`             | Yes      | The copyright information for your feed. Do not use Markdown.                                                                                                                       | "Copyright 2017 Matt Stratton"                                                                                                                                                                 |
| `itunes_subtitle`            | No       | No Markdown or HTML.                                                                                                                                                                | "The best podcast ever"                                                                                                                                                                        |
| `itunes_author`              | Yes      | The author name for your show. No Markdown or HTML.                                                                                                                                 | "Matt Stratton"                                                                                                                                                                                |
| `itunes_summary`             | Yes      | Limited to 4000 characters or less, plain text, no HTML.                                                                                                                            | "The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about podcasting from the most inspiring experts to ever show up on the whole internet." |
| `itunes_owner_name`          | Yes      | The name associated with the owner of the podcast on iTunes. Will not be displayed publicly on iTunes.                                                                              | "Matt Stratton"                                                                                                                                                                                |
| `itunes_owner_email`         | Yes      | The e-mail address that will be used to contact the owner of the podcast for communication specifically about their podcast on iTunes. It will not be publicly displayed on iTunes. | "your.name@gmail.com"                                                                                                                                                                          |
| `itunes_image`               | Yes      | Fully qualified path to your podcast's artwork for iTunes.                                                                                                                          | "https://www.arresteddevops.com/img/ado-podcast-logo.png"                                                                                                                                      |
| `itunes_top_category`        | Yes      | The main category for your podcast in iTunes                                                                                                                                        | "Technology"                                                                                                                                                                                   |
| `itunes_first_sub_category`  | No       | The first sub-category for your podcast in iTunes                                                                                                                                   | "Software How-To"                                                                                                                                                                              |
| `itunes_second_sub_category` | No       | The second sub-category for your podcast in iTunes. Do not set this if you didn't set the first one.                                                                                | "Tech News"                                                                                                                                                                                    |

#### Social Parameters

These are the social network parameters for your overall site. They should be set under `[params.social]`

| Field Name       | Required | Description                                                                                                      | Example              |
|------------------|----------|------------------------------------------------------------------------------------------------------------------|----------------------|
| `github`         | No       | GitHub username only.                                                                                            | "mattstratton"       |
| `gitlab`         | No       | GitLab username only.                                                                                            | "mattstratton"       |
| `facebook`       | No       | Name of the Facebook page (not the URL).                                                                         | "Arresteddevops"      |
| `facebook_admin` | No       | This needs to be a page admin to get domain insights.                                                            | "500557137"          |
| `twitter`        | No       | Twitter name without the `@` sign.                                                                               | "arresteddevops"     |
| `twitter_domain` | Yes      | This domain shows in twitter cards as "View on `twitter_domain`".                                                | "arresteddevops.com" |
| `googleplus`     | No       | Google Plus page name, without the `+`.                                                                          | "ArrestedDevOps"     |
| `pinterest`      | No       | Pinterest username.                                                                                              | "nozzleio"           |
| `instagram`      | No       | Instagram username.                                                                                              | "nozzleio"           |
| `youtube`        | No       | Name of the YouTube channel.                                                                                     | "arresteddevops"     |
| `linkedin`       | No       | LinkedIn profile name. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL. | "mattstratton"       |

#### Host/Author Parameters

We use the "authors" from the configuration to list hosts as well. All hosts should have an entry in here. These settings should be set under `[params.authors]` and then `[params.authors.USERNAME]` for each host, for example:

```
[params.authors]
  [params.authors.Matt]
    name	= "Matt Stratton"
```

| Field Name  | Required | Description                                                                                   | Example                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------|----------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`      | Yes      | The full name of the author/host.                                                             | "Matt Stratton"                                                                                                                                                                                                                                                                                                                                                                                               |
| `thumbnail` | Yes      | The image for the user. This can either be a fully qualifed URL, or relative to the baseURL.  | "http://www.arresteddevops.com/matt.png" or "img/hosts/matt.png"                                                                                                                                                                                                                                                                                                                                              |
| `bio`       | Yes      | The author/host bio. Supports Markdown.                                                       | "Matt Stratton is a solutions architect at Chef, where he demonstrates how Chef’s automation platform provides speed and flexibility to clients’ infrastructure. He is devoted to concepts like Continuous Delivery and Infrastructure as Code, and his license plate actually says “DevOps”. He lives in Chicago and has an unhealthy obsession with Doctor Who, Firefly, and Game of Thrones. And whiskey." |

##### Host Social Parameters

You also will set the social parameters (all are optional) under `[params.authors.USERNAME.social]`

| Field Name  | Required | Description                                                                                                      | Example                        |
|-------------|----------|------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `github`    | No       | GitHub username only.                                                                                            | "mattstratton"                 |
| `facebook`  | No       | Name of the user's Facebook page (not the URL).                                                                  | "matt.stratton"                |
| `twitter`   | No       | Twitter name without the `@` sign.                                                                               | "mattstratton                  |
| `pinterest` | No       | Pinterest username.                                                                                              | "nozzleio"                     |
| `instagram` | No       | Instagram username.                                                                                              | "nozzleio"                     |
| `youtube`   | No       | Name of the user's YouTube profile.                                                                              | mattstratton                   |
| `linkedin`  | No       | LinkedIn profile name. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL. | "mattstratton"                 |
| `homepage`  | No       | The user's website, including the `http` at the beginning.                                                       | "https://www.mattstratton.com" |


#### A note about `BaseURL`

This theme is fairly dependent upon a proper `BaseURL` being set in the `config.toml`. This has to do with how the feed is generated as well as some of the social metadata (these things cannot be relative URL's). I'm fully aware that this can cause issues with some build systems, and I'm trying to work on a good solution for this. This must end in a slash. Example: `https://www.arresteddevops.com/`


#### Permalinks

I recommend the following permalink settings, although the theme will work just fine without them:

```
[permalinks]
	page = "/:filename/"
	about = "/:filename/"
	episode = "/:filename/"
```

### Episodes

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
images = ["img/episode/default-social.jpg"]
podcast_duration = "1:08:22"
podcast_file = "arrested-devops-podcast-episode053.mp3"
podcast_bytes = "123456789"
title = "Back to School"
youtube = ""

+++

Graphical user interface influencer value proposition startup hackathon iPad analytics gen-z entrepreneur release traction product management long tail. Buzz business-to-consumer android learning curve innovator seed money iteration buyer startup. Holy grail graphical user interface responsive web design lean startup bandwidth strategy release innovator low hanging fruit non-disclosure agreement. Strategy handshake iPhone interaction design early adopters. Low hanging fruit crowdfunding vesting period. Low hanging fruit social proof series A financing product management founders bootstrapping ecosystem buyer supply chain hackathon direct mailing churn rate client. Scrum project direct mailing ecosystem monetization innovator. Partner network gen-z conversion pivot iPhone infographic growth hacking business plan facebook alpha marketing beta technology. Focus crowdsource venture strategy user experience. Lean startup disruptive user experience stealth interaction design monetization client long tail virality seed round direct mailing hypotheses technology burn rate.
```

| Field Name         | Required | Description                                                                                                                                                             | Example                                                                                                                                                                                                                               |
|--------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Description`      | Yes      | The description of the episode, which is used on summary pages as well as the feed.                                                                                     | "Bootstrapping alpha seed money scrum project. Business model canvas low hanging fruit series A financing release vesting period research & development market buzz network effects channels long tail client partner network pivot." |
| `aliases`          | No       | Other aliases for this episode. You may wish to create an alias to the episode number, etc.                                                                             | ["/12"]                                                                                                                                                                                                                               |
| `author`           | No       | The name of an author from your config.toml file                                                                                                                        | "Matt"                                                                                                                                                                                                                                |
| `date`             | Yes      | The release date of the episode. The `hugo new` episode will pre-populate this, but you may want to adjust it.                                                          | "2016-09-25T04:10:01-05:00"                                                                                                                                                                                                           |
| `episode`          | No       | The episode number. Currently unused.                                                                                                                                   | "12"                                                                                                                                                                                                                                  |
| `episode_image`    | Yes      | The square thumbnail to represent the episode. A default image is provided, and the archetype will pre-populate it. This image needs to be relative to your baseURL.    | "img/episode/default.jpg"
| `episode_banner`    | No      | The banner to represent the episode. This image needs to be relative to your baseURL. This image will be display at the top of the episode page, as well as the top of the home page for the most recent episode. Recommend that it is at least 1024 pixels wide.  | "img/episode/default-banner.jpg"    |
| `explicit`         | Yes      | Whether or not the episode contains explicit content. Default value from the archetype is "no". Valid values are "yes" or "no"                                          | "yes"                                                                                                                                                                                                                                 |
| `guests`           | No       | If your episode has guests, populate the `guests[]` array with a comma-separated list of their names. If there is only one guest, no comma is needed.                   | ["jdoe", "msmith", "gbluth"] or ["jsmith]"                                                                                                                                                                                            |
| `images`           | No       | The social sharing image used by Facebook, Twitter, etc. The archetype will populate this with a default sharing image. This image needs to be relative to your baseURL | ["img/episode/default-social.jpg"]                                                                                                                                                                                                    |
| `podcast_duration` | Yes      | The duration of the podcast, up to the amount of seconds.                                                                                                               |  "1:08:22" or "59:32"                                                                                                                                                                                                                 |
| `podcast_file`     | Yes      | The filename of your episode, relative to the `media_prefix` of your config.toml.                                                                                       | `"arrested-devops-podcast-episode053.mp3"`                                                                                                                                                                                            |
| `podcast_bytes`    | No       | The length of the podcast file in bytes. This is optional, but iTunes and many other podcast players prefer this to be set.                                             | "23907533"                                                                                                                                                                                                                            |
| `Title`            | Yes      | The title of the episode.                                                                                                                                               | "Back to School"                                                                                                                                                                                                                      |
| `youtube`          | No       | The ID of the YouTube video (not the full URL). This will display the video on the episode page, and if you are using the row layout, it will display for the latest episode.                                                                                                      | "8ClZXJsgpHY"

### Guests

If you don't have guests on your episodes, feel free to ignore this section.

#### Guest Pages

Every guest on your show needs a corresponding page  in the `content/guest` directory of your site. Generally speaking, you should be able to name these however you like, but I have only tested it with the format `firstinitiallastname.md`, i.e., for "John Doe" the file would be `jdoe.md`.

A guest file takes the following structure:

```
+++
Title = "John Doe"
Twitter = "johndoe"
Website = "http://www.google.com"
Type = "guest"
Facebook = "johndoe"
Linkedin = "johndoe"
GitHub = "johndoe"
Thumbnail = "img/guest/jdoe.jpg"
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
