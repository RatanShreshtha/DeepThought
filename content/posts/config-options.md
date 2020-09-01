+++
title = "Config Options"
description = "Few config options provides by DeepThought theme."
date = 2020-08-30

[taxonomies]
categories = ["Documentation"]
tags = ["theme", "zola"]

[extra]
toc = true
comments = false
+++

DeepThought theme provides some config option like option to add favicon to your site, add avatar for profile, setup social links for the profile etc

<!-- more -->

# Site Configurations

## Author Details

You can configure author details in `[extra.author]` of `config.toml` file.

```toml
[extra.author]
name = "<your_name>"
avatar = "<path_to_avatar>"
```

## Favicon Setup

You can configure favicon in `[extra.favicon]` of `config.toml` file. You can use something like [realfavicongenerator](https://realfavicongenerator.net/) to generate your favicon.

```toml
[extra.favicon]
favicon_16x16 = "/icons/favicon-16x16.png"
favicon_32x32 = "/icons/favicon-32x32.png"
apple_touch_icon = "/icons/apple-touch-icon.png"
safari_pinned_tab = "/icons/safari-pinned-tab.svg"
webmanifest = "/icons/site.webmanifest"
```

## Social Link Setup

You can configure social links in `[extra.social]` of `config.toml` file.

```toml
[extra.social]
facebook = "<facebook_username>"
github = "<github_username>"
keybase = "<keybase_username>"
linkedin = "<linkedin_username>"
stackoverflow = "<stackoverflow_userid>"
twitter = "<twitter_username>"
```

## Google Analytics Setup

**DeepThought** support google analytics out of the box. You can configure favicon in `[extra.analytics]` of `config.toml` file. 

```toml
[extra.analytics]
google = "<your_gtag>"
```

## Hyvor Comments Setup

**DeepThought** support hyvor commenting out of the box. You can configure favicon in `[extra.commenting]` of `config.toml` file. 

```toml
[extra.commenting]
hyvor = "<your_website_id>"
```

## Mapbox Setup

**DeepThought** support mapbox out of the box to add maps in your posts. You can configure favicon in `[extra.mapbox]` of `config.toml` file. 

```toml
[extra.mapbox]
access_token = "<your_access_token>"
```

# Section Configurations

Apart from standard config you can also add a `description` in your `_index.md` file for your sections that appears in listing.

```toml
description = "Blog posts accumulated over the time."
```

# Page Configurations

## Enable Table Of Content

In order to enable `toc` for your post change as below code snippet in your page.

```toml
[extra]
toc = true
```

## Enable Comments

In order to enable `comments` for your post change as below code snippet in your page.

```toml
[extra]
comments = true
```