+++
title = "Theme extension"
description = "Extending a theme"
date = 2022-02-07

[taxonomies]
categories = ["Documentation"]
tags = ["theme", "zola"]

[extra]
toc = true
comments = false
+++

DeepThought theme can be extended with [usual Zola extension mechanisms](https://www.getzola.org/documentation/themes/extending-a-theme/).

<!-- more -->

# Replacing a template

As any theme, all DeepThought templates [can be replaced to override a whole template](https://www.getzola.org/documentation/themes/extending-a-theme/#replacing-a-template).

# Blocks to extend

If you don't want to replace a whole DeepThought template, but override parts of it, [you can extend the template and redefine some specific blocks](https://www.getzola.org/documentation/themes/extending-a-theme/#overriding-a-block).

Here is a WIP list of blocks in DeepThought templates to override:

| Template location[^1] | Block | Description |
| ------ | ----------- | -- |
| `base.html` | `user_custom_stylesheet` | Custom stylesheet (css or saas) to fine-tune DeepThought styling |
| `base.html` | `title` | Customize default page's titles |
| `base.html` | `analytics` | Provide your own analytics script. Google Analytics by default |
| `base.html` | `header` | Customize page's header |
| `base.html` | `content` | Customize page's content |
| `base.html` | `search` | Provide your own search box partial template |
| `base.html` | `pagination` | Override default pagination |
| `base.html` | `comment` | Provide your own pagination partial template |
| `base.html` | `other_lang_search_js` | Provide custom search behavior, eg. [to use languages others than English](https://github.com/RatanShreshtha/DeepThought/#elasticlunr-search-in-other-language) |
| `base.html` | `user_custom_js` | Provide any custom JS scripts at the end of the body of the page |

---
[^1]: Relative to the `templates` directory
