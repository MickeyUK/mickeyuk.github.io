---
title: Quick Quiz
layout: article
categories:
- WordPress
- Plugin
order: 5
icon: wordpress
thumbnail: wp_quiz.jpg
webm: quick_quiz.webm
video: https://www.youtube.com/watch?v=OO7kZRI8exs
description: Add interactive quizzes to the bottom of blog posts.
---

# Overview
A [WordPress](https://en-gb.wordpress.org/) plugin for adding interactive quizzes to the bottom of your posts. Users work against the clock as they type their answers in, and can share their scores on various social networking sites.

# Development
I wanted to create some example WordPress plugins to plonk on my GitHub, and I thought a quiz plugin would be fun to put together. To set my plugin apart from the plethora of other quiz-oriented plugins for WordPress, I decided to have mine require the user type their answers.

To account for poor spelling and typos by the user, I wanted to use an algorithm that would check to see how close the punched in answer resembled the correct answer. I knew I could achieve this with the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) string metric...but to be honest, this stuff goes over my noggin a little bit, so I adapted the code snippets [HERE](https://gist.github.com/andrei-m/982927) for what I needed.

I wanted the default appearance of the quiz to look attractive, but not to clash with whatever theme the blog is using. I thought it would look cool to have a big timer above the quiz, and I came across [FlipClock.js](http://flipclockjs.com/). I liked the default black and white style, which fit well with WordPress' default themes. It's also easy to add custom styling should the user want to.

Sharing quiz results on social media networks and encouraging others to come and play is a good way to drive up traffic to the blog, so I knew I wanted to integrate something like this. I did not want to store user results in the WordPress database, as this plugin is really just for inconsequential quizzes. Instead, the user's score is stored as a parameter in the share URL.

# Download
The latest version of the plugin can be downloaded [HERE](https://github.com/MickeyUK/wp-quick-quiz/releases/download/v1.0/wp-quick-quiz.zip).

The GitHub repository can be found [HERE](https://github.com/MickeyUK/wp-quick-quiz).
# Instructions
When you install the plugin, it will create two new meta boxes on the edit post/page screen for creating the quiz. The quiz will then appear below the post. If a quiz has no questions, it will not appear on the post.

### Quick Quiz Questions

Here is where you create all the questions for your quiz. To add a new question, click the Add Question button, and to remove a question you've created, click the Remove button to the right of the question.

### Quick Quiz Settings

Here you can customize various settings for the quiz.

**Time**

All quizzes have an allotted time limit, which defaults to 240 seconds (4 minutes). You can override this here.

**Correct Answer Distance**

This sets the Levenshtein distance of the answer checking. Lower the value to make it more strict, higher for more lenient.