---
title: GitHub Portfolio
layout: article
categories:
- Jekyll
order: 9
icon: github
thumbnail: website.jpg
webm: website.webm
description: The very website you're perusing, a static site built with Jekyll.
---

# Overview
If you're here, that means that you probably dig my website...thanks! It's hosted on [GitHub](https://github.com) with their [GitHub Pages](https://pages.github.com/) service. It uses the static site generator Jekyll and a custom theme developed by me based on Jekyll's starter theme [Minima](https://github.com/jekyll/minima).

# Development
I had originally coded a static site from scratch to host with GitHub Pages as an attractive way to show off some of example projects. It was similar to this one, utilizing the grid layout for my projects, but every page had a large header banner.

I grew unhappy with this design for a few reasons; I felt the header banner took up too much space, the grid layout felt squashed and the code was a bit of a mess (in my haste to put together something quickly!). Further compounding my distaste was that whenever I wanted to update my grid of projects, I had to add them manually in the code...I wanted something more elegant.

![What the site used to look like.](/assets/images/old-site.jpg)

As I knew I wanted to update the website on a semi-regular basis, I decided to use a static site generator  (GitHub Pages doesn't allow server side code). I landed on [Jekyll](https://jekyllrb.com/) as it's one of the most popular and easy to learn. Personally, I find Markdown a bit boring to look at in a code editor, so I used the[ jekyll-admin](https://github.com/jekyll/jekyll-admin) plugin to author the site's contents. I then wrote a batch file that would serve up my Jekyll site and open up a browser to the admin interface, and popped that on my desktop. A nice quick way to update my site!

On to the design. I felt that instead of a static patterned header on the homepage, an animated reel of some of projects whould draw in visitors better. I recorded some short clips of some of my projects using [Windows 10's game mode DVR](https://www.windowscentral.com/how-enable-disable-game-mode-windows-10), chucked them all together in [Adobe Premiere](https://www.adobe.com/uk/products/premiere.html) and added an overlay effect. I embeded the video with [YouTube's Iframe player API](https://developers.google.com/youtube/iframe_api_reference).

Whilst I am generally not a fan of assisted scrolling (hands off my mousewheel!), I thought it would work well for my homepage as an interesting way to show off my projects. For this I used the jQuery plugin [Scrollify](https://projects.lukehaas.me/scrollify/). The section scrolling also solved a cross-platform problem. The project thumbnails are snapshots from a small video, and on PC when the user hovers the mouse over these thumbnails the video will play. This is of course a problem on touch screen devices. With scrollify, I was able to detect when a project panel was being viewed and trigger the video to start playing.

For my code mug logo, I created the mug illustration in [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html), and the code bit smoke effect with the [HTML5 canvas](https://www.w3schools.com/html/html5_canvas.asp).

# Download
The GitHub reposity for the project is **[here](https://github.com/MickeyUK/mickeyuk.github.io)**.