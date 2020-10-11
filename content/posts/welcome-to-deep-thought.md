+++
title = "Welcome to DeepThought"
description = "A simple blog theme focused on writing powered by Bulma and Zola"
date = 2020-08-31
[taxonomies]
categories = ["Documentation"]
tags = ["theme", "zola"]

[extra]
comments = false
+++

This is a small example post of stuff you can do with the `DeepThought` theme.
We'll try to represent all possible markdown and shortcode combinations here
so you can develop easily.

<!-- more -->

## Here's some lists

- let's list some stuff
- unordered, of course.

1. We can also order lists
    1. And nesting here works too
    2. We can do whatever we want!
2. And drop back to the original indentation.

# Headers

## Smaller

### Smaller still!

#### Can't really get much smaller than this

##### Even if you try

###### It won't do anything

We can also *italicize* stuff, or make it **bold**.

# Code

Want some Rust code?  We got Rust code.

```rust

// `vst` uses macros, so we'll need to specify that we're using them!
#[macro_use]
extern crate vst;

// We're implementing a trait `Plugin` that does all the VST-y stuff for us.
impl Plugin for Whisper {
    fn get_info(&self) -> Info {
        Info {
            name: "Whisper".to_string()
        }
    }
}

```

We can also add a filename to our code blocks which is super useful when
providing tutorials, etc.  Here's some HTML we can insert into our
markdown file right before the code block.  (Meta, right?)

<div class='filename'>
  <div>www/index.html</div>
</div>

```html
<div class='filename'>
  <div>src/lib.rs</div>
</div>
```

If we want, we can also `specify inline code` which is useful for `the small stuff`.

## Horizontal rules

We have them!

---

## Youtube

with `youtube(id="the_id_here")`
{{ youtube(id="dNRDvLACg5Q") }}

## Vimeo
with `vimeo(id="id_here")`
{{ vimeo(id="115189988") }}

## Links

[Of Course](https://deepthought-theme.netlify.app/)

## Tables
You can make tables in markdown, too!  Who would have thought.  Are these styled yet?

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

## Foldable Text

<details>
    <summary>Title 1</summary>
    <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>

<details>
    <summary>Title 2</summary>
    <p>Content 2 Content 2 Content 2 Content 2 Content 2</p>
</details>

We can do that like this:

```html
<details>
    <summary>Title 1</summary>
    <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>
```
