---
title: API Framework
priority: 8
icon: wordpress
layout: project
date: 2018-10-07 10:12:09 +0000
categories:
- WordPress
- Plugin
thumbnail: https://res.cloudinary.com/mickeyuk/v1538884201/images/wp_api.jpg
webm: https://res.cloudinary.com/mickeyuk/video/upload/v1538887573/videos/wpapi.webm
video: https://www.youtube.com/watch?v=ZSFgAL7buJo
description: A barebones API plugin for WordPress that is easy to customize and add
  to.
syntaxHighlight: false

---
# Overview
 A simple API plugin for [WordPress](http://wordpress.org), that serves more as a framework for those wanting to craft their own RESTful API service.

The plugin has 2 endpoints set up; one for authenticating users and one for posting to the blog. Access to these and endpoints you add can be toggled easily through the plugin's settings page. Endpoints can also be marked as secure, requiring a [JSON Web Token](https://jwt.io/) for authorization.

# Development
Whilst WordPress already has a built in [RESTful API](https://developer.wordpress.org/rest-api/), I wanted to create an example of how to craft a simple one from scratch, as well as display my savviness working with APIs. Mine is not quite as robust as the built in one, but much easier to get to grips with for coding novices.

Endpoints can be marked as secure, requiring an access token. For this I used [JSON Web Tokens](https://jwt.io/).

# Download
The plugin can be downloaded [HERE](https://github.com/MickeyUK/wp-api-framework/releases/download/v1.0/wp-api-framework.zip).

The GitHub repository can be found [HERE.](https://github.com/MickeyUK/wp-api-framework/).

# Instructions
The full Wiki guide can be found [HERE](https://github.com/MickeyUK/wp-api-framework/wiki).