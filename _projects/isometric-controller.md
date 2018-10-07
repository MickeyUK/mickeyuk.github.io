---
title: Isometric Controller
priority: 3
icon: unity
layout: project
date: 2018-10-07 10:01:18 +0000
categories:
- Unity
thumbnail: https://res.cloudinary.com/mickeyuk/v1538884200/images/unity_iso.jpg
webm: https://res.cloudinary.com/mickeyuk/video/upload/v1538887573/videos/isometric_controller.webm
video: ''
description: 'An example of an isometric controller in the Unity engine. '
syntaxHighlight: true
blocks:
- template: game-frame
  max_width: '980'
  max_height: '660'
  button_label: Play
  source: "/assets/demos/iso-controller/index.html"

---
# Overview

A simple isometric controller and camera you can use as a basis for an isometric game in Unity.

# Development

I put this together when I was helping a team get started on their Unity project; an isometric RPG in the vein of games like Baldur's Gate and Fallout 2.

When implementing isometric movement, we have to calculate what is _forward_ in this new perspective, like this:

    forward = Camera.main.transform.forward;
    forward.y = 0;
    forward = Vector3.Normalize(forward);
    
    right = Quaternion.Euler(new Vector3(0,90,0)) * forward;
    Vector3 heading = Vector3.Normalize(rightMovement + upMovement);

The problem with a fixed isometric perspective like this is that the player character will be hidden behind elements in the foreground. To combat this I used I used an outlined diffuse shader to create an x-ray effect, so that the player character is always visible. I used the shader [**here**]().

# Download

The GitHub repository can be found [**here**](https://github.com/MickeyUK/isometric-controller).

# Play

If you want to see it in action, click the play button below.