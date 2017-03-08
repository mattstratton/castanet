[![Build Status](https://travis-ci.org/mattstratton/castanet.svg?branch=master)](https://travis-ci.org/devopsdays/devopsdays-theme)
[![GitHub release](https://img.shields.io/github/release/mattstratton/castanet.svg)](https://github.com/qubyte/rubidium/releases)
[![license](https://img.shields.io/github/license/mattstratton/castanet.svg)]()

[![Stories in Ready](https://badge.waffle.io/mattstratton/castanet.svg?label=ready&title=Ready)](http://waffle.io/mattstratton/devopsdays-web) [![Stories in Progress](https://badge.waffle.io/mattstratton/castanetb.svg?label=ready&title=In%20Progress)](http://waffle.io/mattstratton/devopsdays-web)

You can see progress on tasks at http://waffle.io/mattstratton/castanet

[![Throughput Graph](https://graphs.waffle.io/mattstratton/castanet/throughput.svg)](https://waffle.io/devopsdays/devopsdays-web/metrics)

# Castanet

Castanet is a a Hugo theme for sites that are primarily podcasts. It is heavily influenced by [ado-hugo](//github.com/arresteddevops/ado-hugo) by [Matt Stratton](//github.com/mattstratton).

An example site can be found at http://sample-castanet.netlify.com/

![Castanet screenshot](https://github.com/mattstratton/castanet/blob/master/images/screenshot-v01.png)

## Installation

Download the latest version (zip file, not source code) from the [Releases](https://github.com/mattstratton/castanet/releases) page.


For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing Castanet successfully it requires a just a few more steps to get your site running.


### The config file

You will need to add a handful of configuration items to your `config.toml` file. You can take a look at the [example site](https://github.com/mattstratton/castanet/blob/master/exampleSite/config.toml) to see them in action. They are described below:

- `googleAnalytics` - the Google Analytics tracking ID. We use the async method. Example: `"UA-123-45"`
- `disqusShortname` - the shortname for use in Disqus comments. Example: `"arresteddevops"`. Note: The Disqus comments will not appear if you are running on `localhost`.

- `[params]`
  - `site_theme` - the color scheme for the overall site. Currently the two options are `orange` and `blue`. Optional. Example: `"blue"`. Defaults to the `orange` theme if not set.
  - `custom_css` - array of custom CSS files for over-riding theme settings or adding your own classes. Example: `["custom.css", "other_custom.css"]
  - `about_logo` - the logo (250px x 250px) you would like to appear on your About page. Optional. If not set, this will default to your iTunes image.
  - `copyright_notice` - Your copyright information for the footer of the page. Can contain Markdown. Example: `"Copyright 2016 [Matt Stratton](https://www.mattstrattion.io)"`
  - `itunes_subscribe` - The URL of your podcast in the iTunes store. Optional. Example: `"http://itunes.apple.com/us/podcast/arrested-devops/id773888088?mt=2&uo=4&at=11lsCi"`
  - `android_subscribe` - The URL for your podcast for Android users. You can generate this URL at [Subscribe on Android](https://subscribeonandroid.com). Optional. Example: ``"http://subscribeonandroid.com/feeds.podtrac.com/VGAulpN7MY1U"``
  - `google_play_subscribe` The URL to your podcast in the Google Play store. Optional. Example: `"https://goo.gl/app/playmusic?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Ihj4yege3lfmp3vs5yoopgxijpi?t%3DArrested_DevOps"``
  - `mailchimp_subscribe` - The URL for your MailChimp signup form. This can be acquired from creating a "Super Slim" Embedded form on MailChimp. Additional instructions may be provided later. Do NOT include the entire form HTML; you just need the path for the `form action`. Optional. Example: `"//arresteddevops.us3.list-manage.com/subscribe/post?u=5e4cbcac996bb9df25f970a89&amp;id=154fa76bcc"`
  - `rss_subscribe` - Optional parameter to over-ride the RSS feed URL, in case you use something like Feedburner. You likely do NOT need to set this parameter unless you have a very good reason to do so.
  - `description` - Description of your show. Can use Markdown. Example: `"The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about [podcasting](https://en.wikipedia.org/wiki/Podcast) from the most inspiring experts to ever show up on the whole internet."`
    - ``[params.feed]`` - these are items used to configure your podcast feed.
      - `feed_copyright` - The copyright information for your feed. Do not use Markdown. Example: `"Copyright 2016 Matt Stratton"`
      - `itunes_subtitle` - No Markdown or HTML. Example: `"The best podcast ever"`
      - `itunes_author` - The author name for your show. No Markdown or HTML. Example: `"Matt Stratton"`
      - `itunes_summary` Limited to 4000 characters or less, plain text, no HTML. Example: `"The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about podcasting from the most inspiring experts to ever show up on the whole internet."`
      - `itunes_owner_name` = The name associated with the owner of the podcast on iTunes. Will not be displayed publiclly on iTunes. Example: `"Matt Stratton"`
      - `itunes_owner_email` - The e-mail address that will be used to contact the owner of the Podcast for communication specifically about their podcast on iTunes. It will not be publicly displayed on iTunes. Example: `"your.name@gmail.com"`
      - `itunes_image` - Fully qualified path to your podcast's artwork for iTunes.  `"https://www.arresteddevops.com/img/ado-podcast-logo.png"`
      - `itunes_top_category` = `"Technology"`
      - `itunes_first_sub_category` = `"Software How-To`"
      - `itunes_second_sub_categor`y = `"Tech News"`

  - `[params.social]`
    - `github` - GitHub username only. Optional. Example: `"mattstratton"`
    - `facebook` - Name of the Facebook page (not the URL). Optional. Example: `"Arresteddevops"`
    - `facebook_admin` - Optional. This needs to be a page admin to get domain insights. Example: `"500557137"`
    - `twitter` - Twitter name without the `@` sign. Optional. Example: `"mattstratton"`
    - `twitter_domain` - This domain shows in twitter cards as "View on `twitter_domain`" Example: `"arresteddevops.com"`
    - `googleplus` - Google Plus page name, without the `+`. Optional. Example: `"ArrestedDevOps"`
    - `pinterest` - Optional. Example: `"nozzleio"`
    - `instagram` - Optional. Example: `"nozzleio"`
    - `youtube` - Name of the YouTube channel. Optional. Example: `"arresteddevops"`
    - `linkedin` - LinkedIn profile name. Optional. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL. Example: `"mattstratton"`

  - `[params.authors]` - you can have multiple authors avaialable; just make more of each
    - `[params.authors.USERNAME]` - replace `USERNAME` with an author name. Example: `[params.authors.matt]`
      - `name` - Example: `"Matt Stratton"`
      - `thumbnail` - URL to user's image. Example: `"https://www.arresteddevops.com/img/matt.png"`
      - `bio` - Author's bio. Example: `"Matt Stratton is a solutions architect at Chef, where he demonstrates how Chef’s automation platform provides speed and flexibility to clients’ infrastructure. He is devoted to concepts like Continuous Delivery and Infrastructure as Code, and his license plate actually says “DevOps”. He lives in Chicago and has an unhealthy obsession with Doctor Who, Firefly, and Game of Thrones. And whiskey."`
      - `[params.authors.USERNAME.social]` - social networking parameters for the author
        - `github` - Example: `"mattstratton"`
        - `facebook` - Example: `"matt.stratton"`
        - `twitter` - Example: `mattstratton`
        - `linkedin` - Example: `"mattstratton"`

#### A note about `BaseURL`

This theme is fairly dependent upon a proper `BaseURL` being set in the `config.toml`. This has to do with how the feed is generated as well as some of the social metadata (these things cannot be relative URL's). I'm fully aware that this can cause issues with some build systems, and I'm trying to work on a good solution for this.


#### Permalinks

I recommend the following permalink settings, although the theme will work just fine without them:

```
[permalinks]
	page = "/:filename/"
	about = "/:filename/"
	episode = "/:filename/"
```

### Guests

If you don't have guests on your episodes, feel free to ignore this section.

#### Guest data files

Every guest on your show needs a corresponding data file in the `data/guests` directory of your site. Generally speaking, you should be able to name these however you like, but I have only tested it with the format `firstinitiallastname.yml`, i.e., for "John Doe" the file would be `jdoe.yml`.

A guest file takes the following structure:

```
name: jdoe
full_name: "John Doe"
thumbnail: "/img/guest/jdoe.jpg"
bio: "Spoon fresh pie ingredients groceries oranges luncheon farm. Broth chick peas Chinese food indie foods. Cream heating cheese food locally grown first class caramelize restaurant grocery shopping savory chick peas. Recommendations lovely starter soda herbes fridge chocolate eat better quinoa sausage java chef locally grown wholesome. Broil sweet sushi lasagna cream indian. Desert sour vegetarian sous-chef soda oven tasty eat better rice recommendations relish salt butter grape. Grocery shopping delicious Chinese food beets conserve ginger. Authentic blend drink sausage. Groceries sour desert. Take away lasagna consumer luncheon scent cookie beer groceries meals restaurants java cheese vegan chick peas."
homepage: "http://www.google.com"
github: "johndoe"
facebook: "johndoe"
twitter: "johndoe"
linkedin: "johndoe"
```

(See the example site for, well, examples)

- `name` - This MUST match the name you will refer to the guest as in your frontmatter. Ideally it is the same name as the file. Again, I prefer first initial lastname format. Required.
- `full_name` - The full name of the guest. This is what is displayed on the episode page, etc. Required.
- `thumbnail` - The image for the guest. This image must be 500 px x 500 px. You can either enter a value relative to your `BaseURL`, or a fully qualified URL. If you want to use the default, set this to `""`. Optional. If left blank, or not existent, a default image will be provided. You can replace this default image by putting a new 500 px x 500 px PNG image at `/static/img/guest/default-guest.png` in your site (not in the theme!)
- `bio` - The bio of your guest. You can use Markdown in here. If you use quotes, make sure to escape them. Required.
- `homepage` - Optional.
- `github` - Guest's GitHub username. Optional.
- `facebook` - Guest's Facebook username. Example: `matt.stratton`. Do not use the full URL. Optional.
- `twitter` - Guest's Twitter username, without the `@`. Optional.
- `linkedin` - LinkedIn profile name. Optional. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL. Example: `"mattstratton"`


#### Frontmatter

If your episode has guests, populate the `guests[]` array with a comma-separated list of their names. For example, `["jdoe", "msmith", "gbluth"]`. If there is only one guest, no comma is needed.
