---
title: Places Scraper
layout: article
categories:
- Google Api
order: 1
icon: google
thumbnail: places_scraper.jpg
webm: places_scraper.webm
description: A tool for using Google and Hunter.io to collate business e-mail addresses.
syntaxHighlight: true
---

# Overview
The Google Places API does not allow you to search for business e-mail addresses as this would make things too easy for spammers. However, this serves an example of how to use [Google Places](https://developers.google.com/places/) along with [Hunter.io](http://hunter.io/) to collate business e-mail addresses over a set radius. Use responsibly, folks!

# Development
The idea for this came from a client when asked about the feasibility of an app where you could set a radius on a map, and collate all the business e-mail addresses in that area. I knew I could use the Google Places API to craft a custom search tool, but I would not be able to use that to pull e-mail addresses (would make things too easy for spammers scraping e-mail addresses!).

After some searching, I came across Hunter.io, a business e-mail finder service that has a generous free package and an API service I could tap in to. From there it was relatively easy to combine the two services, thanks to Google Places' excellent documentation and Hunter.io's easy to use API.

When I put this together, I did not think much of it, just a quick example of my experience working with API services. However, it's become my most popular project on GitHub so far! I've received quite a few kind e-mails from developers that have found it useful. I even received a lovely e-mail from the Hunter.io team congratulating me on my efforts!

# Download
The GitHub repository for the project can be found [HERE](https://github.com/MickeyUK/places-scraper).

# Instructions
### Google Places API Key

To obtain an API key for the Google Places service, you will first need to log in to the Google Developer Console. Next, you will need to create a project for the scraper. 

Once you've done that, select the Library tab and look for Google Maps Javascript API. Select that and then click Enable. Select Credentials, click the Create Credentials button and select API key from the list. 

Make a note of the generated API key. You will also need to enable Places API on the Library tab.

### Hunter.io API Key

Once you have created an account with hunter.io, go to your dashboard and select API. Make a note of the API key (you might have to click the Generate a new key button).

### Adding Keys to the Scraper

You will need to make 2 changes to the index.html file. On line 35 is where you enter your Google Places API key, inside the quotes:

```
var google_key = "YOUR_KEY_HERE";
```

On line 39 is where you enter your hunter.io API key, inside the quotes:

```
var hunter_key = "YOUR_KEY_HERE";
```

### Using the Scraper

To use the scraper, type business/service queries and the location, like this:

```
restaurants in London
supermarkets in Manchester
spas in york
```

You can click a marker on the map to view information on that location. If e-mail addresses exist in the hunter.io database for that location, they will come up. You can see the markers in text form by selecting Text View. You can download the places in CSV (Comma Seperated Values) format, making it easy to import into tables and databases.