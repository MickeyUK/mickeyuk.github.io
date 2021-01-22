---
title: Quick Quiz
priority: 5
meta:
- label: 'Platforms'
  values:
    - 'Web'
- label: 'Video'
  values:
    - '<a data-lity="" href="https://www.youtube.com/watch?v=OO7kZRI8exs">Watch</a>'
- label: 'Download'
  values:
    - '<a href="https://github.com/MickeyUK/wp-quick-quiz/releases/download/v1.0/wp-quick-quiz.zip">Latest Release</a>'
    - '<a href="https://github.com/MickeyUK/wp-quick-quiz">Source Code</a>'
layout: project
date: 2018-10-07 10:04:30 +0000
categories:
- WordPress
- Plugin
thumbnail: https://res.cloudinary.com/mickeyuk/v1538906776/images/wp_quiz.jpg
webm: https://res.cloudinary.com/mickeyuk/video/upload/v1538887572/videos/quick_quiz.webm
video: https://www.youtube.com/watch?v=OO7kZRI8exs
description: Add interactive quizzes to the bottom of blog posts.
syntaxHighlight: false
blocks:
- template: game-frame
  max_width: '960'
  max_height: '760'
  button_label: Play
  responsive: true
  source: "/assets/demos/quick-quiz/index.html"

---
# Overview
A [WordPress](https://en-gb.wordpress.org/) plugin for adding interactive quizzes to the bottom of your posts. Users work against the clock as they type their answers in, and can share their scores on various social networking sites.

# Development
I wanted to create some example WordPress plugins to plonk on my GitHub, and I thought a quiz plugin would be fun to put together. To set my plugin apart from the plethora of other quiz-oriented plugins for WordPress, I decided to have mine require the user type their answers.

To account for poor spelling and typos by the user, I wanted to use an algorithm that would check to see how close the punched in answer resembled the correct answer. I knew I could achieve this with the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) string metric...but to be honest, this stuff goes over my noggin a little bit, so I adapted the code snippets [HERE](https://gist.github.com/andrei-m/982927) for what I needed.

I wanted the default appearance of the quiz to look attractive, but not to clash with whatever theme the blog is using. I thought it would look cool to have a big timer above the quiz, and I came across [FlipClock.js](http://flipclockjs.com/). I liked the default black and white style, which fit well with WordPress' default themes. It's also easy to add custom styling should the user want to.

Sharing quiz results on social media networks and encouraging others to come and play is a good way to drive up traffic to the blog, so I knew I wanted to integrate something like this. I did not want to store user results in the WordPress database, as this plugin is really just for inconsequential quizzes. Instead, the user's score is stored as a parameter in the share URL.