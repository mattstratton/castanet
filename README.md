[![Build Status](https://travis-ci.org/mattstratton/castanet.svg?branch=master)](https://travis-ci.org/mattstratton/castanet)
[![GitHub release](https://img.shields.io/github/release/mattstratton/castanet.svg)](https://github.com/mattstratton/castanet/releases)
[![Github All Releases](https://img.shields.io/github/downloads/mattstratton/castanet/total.svg)]()
[![license](https://img.shields.io/github/license/mattstratton/castanet.svg)]()

If you would like to receive emails when new versions of this theme are released, [subscribe to the announcement email list](http://eepurl.com/cMAJcL).

# Castanet

Castanet is a a Hugo theme for sites that are primarily podcasts. It is heavily influenced by [ado-hugo](//github.com/arresteddevops/ado-hugo) by [Matt Stratton](//github.com/mattstratton).

An example site can be found at http://sample-castanet.netlify.com/

![Castanet screenshot](https://github.com/mattstratton/castanet/raw/master/images/screenshot.png)

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
  - `site_layout` - the layout to use. The optiions are `grid` or `row`. Optional. Example `"grid"`.
  - `custom_css` - array of custom CSS files for over-riding theme settings or adding your own classes. Example: `["custom.css", "other_custom.css"]`. These files should be put into your `static` directory (not the `static` directory of the theme).
  - `about_logo` - the logo (250px x 250px) you would like to appear on your About page. Optional. If not set, this will default to your iTunes image.
  - `copyright_notice` - Your copyright information for the footer of the page. Can contain Markdown. Example: `"Copyright 2016 [Matt Stratton](https://www.mattstrattion.io)"`
  - `itunes_subscribe` - The URL of your podcast in the iTunes store. Optional. Example: `"http://itunes.apple.com/us/podcast/arrested-devops/id773888088?mt=2&uo=4&at=11lsCi"`
  - `android_subscribe` - The URL for your podcast for Android users. You can generate this URL at [Subscribe on Android](https://subscribeonandroid.com). Optional. Example: ``"http://subscribeonandroid.com/feeds.podtrac.com/VGAulpN7MY1U"``
  - `google_play_subscribe` The URL to your podcast in the Google Play store. Optional. Example: `"https://goo.gl/app/playmusic?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Ihj4yege3lfmp3vs5yoopgxijpi?t%3DArrested_DevOps"`
  - `mailchimp_subscribe` - The URL for your MailChimp signup form. This can be acquired from creating a "Super Slim" Embedded form on MailChimp. Additional instructions may be provided later. Do NOT include the entire form HTML; you just need the path for the `form action`. Optional. Example: `"//arresteddevops.us3.list-manage.com/subscribe/post?u=5e4cbcac996bb9df25f970a89&amp;id=154fa76bcc"`
  - `rss_subscribe` - Optional parameter to over-ride the RSS feed URL, in case you use something like Feedburner. You likely do NOT need to set this parameter unless you have a very good reason to do so.
  - `description` - Description of your show. Can use Markdown. Example: `"The HugoCast is the best podcast you've ever seen. You will learn everything you ever needed to know about [podcasting](https://en.wikipedia.org/wiki/Podcast) from the most inspiring experts to ever show up on the whole internet."`
  - `media_prefix` - The URL to pre-pend to your podcast files. Must end in a slash. Example: `"https://media.blubrry.com/arresteddevops/content.blubrry.com/arresteddevops/"`
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

Every episode requires a page in the `content/episode` on your site. The command `hugo new episode/myepisod.md` should populate it properly.

An episode file takes the following structure:

```
+++
Description = "Bootstrapping alpha seed money scrum project. Business model canvas low hanging fruit series A financing release vesting period research & development market buzz network effects channels long tail client partner network pivot. Innovator market android buyer gamification. User experience gamification interaction design sales. Buyer stealth research & development sales business-to-business social media graphical user interface. Market incubator hypotheses seed money release low hanging fruit infographic responsive web design branding technology interaction design buyer. Ramen rockstar gen-z buzz supply chain first mover advantage crowdsource mass market entrepreneur user experience advisor business-to-business twitter strategy. Termsheet low hanging fruit lean startup crowdfunding customer. Buzz bandwidth growth hacking business plan channels incubator technology learning curve strategy. Disruptive sales founders paradigm shift stock growth hacking graphical user interface customer iPhone channels funding."
aliases = ["/12"]
author = "Matt"
date = "2016-09-25T04:10:01-05:00"
episode = "12"
episode_image = "img/episode/default.jpg"
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
| `episode_image`    | Yes      | The square thumbnail to represent the episode. A default image is provided, and the archetype will pre-populate it. This image needs to be relative to your baseURL.    | "img/episode/default.jpg"                                                                                                                                                                                                             |
| `explicit`         | Yes      | Whether or not the episode contains explicit content. Default value from the archetype is "no". Valid values are "yes" or "no"                                          | "yes"                                                                                                                                                                                                                                 |
| `guests`           | No       | If your episode has guests, populate the `guests[]` array with a comma-separated list of their names. If there is only one guest, no comma is needed.                   | ["jdoe", "msmith", "gbluth"] or ["jsmith]"                                                                                                                                                                                            |
| `images`           | No       | The social sharing image used by Facebook, Twitter, etc. The archetype will populate this with a default sharing image. This image needs to be relative to your baseURL | ["img/episode/default-social.jpg"]                                                                                                                                                                                                    |
| `podcast_duration` | Yes      | The duration of the podcast, up to the amount of seconds.                                                                                                               |  "1:08:22" or "59:32"                                                                                                                                                                                                                 |
| `podcast_file`     | Yes      | The filename of your episode, relative to the `media_prefix` of your config.toml.                                                                                       | `"arrested-devops-podcast-episode053.mp3"`                                                                                                                                                                                            |
| `podcast_bytes`    | No       | The length of the podcast file in bytes. This is optional, but iTunes and many other podcast players prefer this to be set.                                             | "23907533"                                                                                                                                                                                                                            |
| `Title`            | Yes      | The title of the episode.                                                                                                                                               | "Back to School"                                                                                                                                                                                                                      |
| `youtube`          | No       | The ID of the YouTube video (not the full URL). Currently unusued.                                                                                                      | "8ClZXJsgpHY"                                                                                                                                      

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
| `LinkedIn`  | No       | LinkedIn profile name. Optional. This is the part that comes after the `https://www.linkedin.com/in/` in your profile URL.                                                                                                                                                                                                                                                                                                                                                                  | "mattstratton"                 |                                                                                   |
