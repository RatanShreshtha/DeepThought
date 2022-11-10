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
email = "<email_id>"
facebook = "<facebook_username>"
github = "<github_username>"
gitlab = "<gitlab_username>"
keybase = "<keybase_username>"
linkedin = "<linkedin_username>"
stackoverflow = "<stackoverflow_userid>"
twitter = "<twitter_username>"
instagram = "<instagram_username>"
behance = "<behance_username>"
google_scholar = "<googlescholar_userid>"
orcid = "<orcid_userid>"
mastodon_username = "<mastadon_username>"
mastodon_server = "<mastodon_server>" (if not set, defaults to mastodon.social)
```

## Google Analytics Setup

**DeepThought** supports google analytics out of the box. You can configure google in `[extra.analytics]` of `config.toml` file. 

```toml
[extra.analytics]
google = "<your_gtag>"
```

## Disqus Comments Setup

**DeepThought** supports disqus commenting out of the box. You can configure disqus in `[extra.commenting]` of `config.toml` file. 

```toml
[extra.commenting]
disqus = "<your_disqus>"
```

## External Libraries

### Mermaid, Chart and Galleria

To gain the features displayed in [Extended Shortcodes](/docs/extended-shortcodes),
enable the libraries you want to use in the `[extra]` section of `config.toml`.

```toml
chart.enabled = true
mermaid.enabled = true
galleria.enabled = true
```

### Mapbox

**DeepThought** supports Mapbox out of the box to add maps in your posts.
You can enable it and set an access token in the `[extra.mapbox]` section of `config.toml`.

```toml
[extra.mapbox]
enabled = true
access_token = "<your_access_token>"
```

### KaTeX

This theme contains math formula support using [KaTeX](https://katex.org/).
To enable KaTeX in your project, set the following in the `[extra]` section of `config.toml`:
```toml
[extra]
katex.enabled = true
katex.auto_render = true    # automatic rendering without shortcodes
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