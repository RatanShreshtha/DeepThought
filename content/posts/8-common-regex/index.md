+++
title = "8 Common Regex"
description = "Few most common regex one should know."
date = 2019-11-28T23:19:47+05:30

[taxonomies]
categories = ["Cheatsheet"]
tags = ["regex"]

[extra]
toc = true
+++

Regular expressions are a language of their own. When you learn a new programming language, they're this little sub-language that makes no sense at first glance. Below are eight regular expressions that you should know for your next coding project.

<!-- more -->

# Username
**Pattern**:`/^[a-z0-9_-]{3,16}$/`

# Password
**Pattern**:`/^[a-z0-9_-]{6,18}$/`

# Hex Value
**Pattern**:`/^#?([a-f0-9]{6}|[a-f0-9]{3})$/`

# Slug
**Pattern**:`/^[a-z0-9-]+$/`

# Email
**Pattern**:`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

# URL
**Pattern**:`/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`

# IP Address
**Pattern**:`/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/`

# HTML Tag
**Pattern**:`/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/`
