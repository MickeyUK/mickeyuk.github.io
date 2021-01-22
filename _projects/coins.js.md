---
title: Coins.js
priority: 2
meta:
- label: 'Platforms'
  values:
    - 'Desktop'
- label: 'Download'
  values:
    - '<a href="https://github.com/MickeyUK/js-coins/">Source Code</a>'
layout: project
date: 2018-10-07 09:58:24 +0000
categories:
- Javascript
- three.js
thumbnail: https://res.cloudinary.com/mickeyuk/v1538884199/images/coins.jpg
webm: https://res.cloudinary.com/mickeyuk/video/upload/v1538887577/videos/coins.webm
video: ''
description: An arcade coin machine game made with the three.js javascript library.
syntaxHighlight: false
blocks:
- template: game-frame
  max_width: '960'
  max_height: '760'
  button_label: Play
  responsive: true
  source: "/assets/demos/js-coins/index.html"

---
# Overview

An arcade coin machine game made with the [three.js](https://threejs.org/) javascript library.

# Development

I've always loved those 2p coin machine cabinets you find at the amusements. I've sunk a small fortune in to them over the years. I thought it would be a good simple project to show off my prowess with the [three.js](https://threejs.org/) library.

I used [Physijs](http://chandlerprall.github.io/Physijs/) for the physics. It's super easy to incorporate as it uses the same conventions as three.js, and it works great.

I could perhaps have sourced some free models for the cabinet and coins, but I love fiddling around in [Blender](https://www.blender.org/), so I set out to make them myself. I kept the models simple so that they would not be too taxing. I then used the three.js Blender Export addon to convert the models to JSON format.

I wanted some nice coin sound effects and some arcade background ambience to make things more immersive, so I looked on [freesound.org](https://freesound.org). I found a nice loopable ambience track that fit perfect. For the coins, I found one track of somebody dropping some coins on to a metal surface, and chopped it up in to several sound effects with [Audacity](https://www.audacityteam.org/). For the gradient background, I found a public domain photo of an amusements interior and added a whole lot of gaussian blur with [paint.net](https://www.getpaint.net/).

Three.js has built-in anti-aliasing to combat those jagged edges, but I found it to be too taxing on modest hardware when applied to my game, so instead I opted for a [SMAA](http://www.iryoku.com/smaa/) technique...better performance, and still looks rather nifty! For this I used the SMAA shader [HERE](https://github.com/iryoku/smaa).

I hope to eventually polish this up and turn in to more of a fleshed out game...when I have time, of course!