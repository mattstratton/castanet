[![Stories in Ready](https://badge.waffle.io/mattstratton/castanet.svg?label=ready&title=Ready)](http://waffle.io/mattstratton/devopsdays-web) [![Stories in Progress](https://badge.waffle.io/mattstratton/castanetb.svg?label=ready&title=In%20Progress)](http://waffle.io/mattstratton/devopsdays-web)

You can see progress on tasks at http://waffle.io/mattstratton/castanet

[![Throughput Graph](https://graphs.waffle.io/mattstratton/castanet/throughput.svg)](https://waffle.io/devopsdays/devopsdays-web/metrics)

# Castanet

Castanet is a a Hugo theme for sites that are primarily podcasts. It is heavily influenced by [ado-hugo](//github.com/arresteddevops/ado-hugo) by [Matt Stratton](//github.com/mattstratton).
This Hugo theme features
**TODO add stuff**

**TODO Add screenshot**


## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/mattstratton/castanet

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing Castanet successfully it requires a just a few more steps to get your site running.


### The config file

#### Permalinks

I recommend the following permalink settings, although the theme will work just fine without them:

```
[permalinks]
	page = "/:filename/"
	about = "/:filename/"
	episode = "/:filename/"
```
