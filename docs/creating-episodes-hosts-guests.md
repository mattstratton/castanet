# Creating Episodes, Hosts, and Guests

## Episodes

Episodes are stored in `content/episode/`. To create a new episode:

```sh
hugo new episode/my-episode.md
```

A typical episode front matter:

```toml
+++
Description = "Episode description."
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
```

## Hosts

Hosts are stored in `content/host/`. To create a new host:

```sh
hugo new host/your-hostname.md
```

A typical host front matter:

```toml
+++
name = "Matt Stratton"
pronouns = "he/him"
thumbnail = "img/hosts/matt.png"
bio = "Matt Stratton is a solutions architect..."
+++
```

## Guests

Guests are stored in `content/guest/`. To create a new guest:

```sh
hugo new guest/jane-smith.md
```

A typical guest front matter:

```toml
+++
name = "Jane Smith"
thumbnail = "img/guests/jane.png"
bio = "Jane is a DevOps engineer..."
+++
```

---

For more details, see the [Reference](../REFERENCE.md). 