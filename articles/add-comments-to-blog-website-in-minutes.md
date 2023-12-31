---
title: "Add comments to blog website in minutes"
date: 2023-08-23
id: 12
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Tutorial
  - JavaScript
---

## Introduction

When creating blog website you really want to add comments in your website but adding comments system in blog website requiers some big brain 🧠 complex logic and also requires database system which will make you go broke in no time!

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tmpng3j0il4putn4ch7m.png)

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6dsvk56er502eq4wjpuv.png)

Fortunatly we have free, lightweight and efficient options to add comments in blog website or any website. I am talking about [utteranc.es](https://utteranc.es/). A lightweight comments widget built on GitHub issues. Use GitHub issues for blog comments, wiki pages and more!

Utteranc is open-source with theming option and awesome thing is it doesn't have any ads or anything. It is completely free to use and takes minutes to set up.

So enough Introduction, Let's get started!

## How it works?

Well you must be thinking how this works like it requires no database nothing and even sets up in mintues how is possible? It's possible cause Utteranc uses github issues as database I mean not database but "So called database" to store the comments by user

> When Utterances loads, the GitHub issue search API is used to find the issue associated with the age based on url, pathname or title. If we cannot find an issue that matches the page, no problem, utterances-bot will automatically create an issue the first time someone comments.

> To comment, users must authorize the utterances app to post on their behalf using the GitHub OAuth flow. Alternatively, users can comment on the GitHub issue directly.

## Setup

Let's do some setup on github now.

1. Create GitHub account
   First step is to have GitHub account. If you already have one then login into the account and if not then create new account

2. Create empty repository
   Done creating account? Great! Now we'll create empty repository to store the comments.

On top-right corner you'll see `plus` icon click on that and create new repository.

![Plus icon](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g18pcrrx142lpxiteh46.png)
![New repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w81xv0opc5r3xqz5iwft.png)

Create new repository with name `comments`

![Comments](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/syinx7w3ahmf1ps47dq0.png)

> Make sure that repository is public and also it doesn't have any files.

![Empty](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/akt53ajnwfekfo3bqhm3.png)

Click `Create repository` to create the repository.

![Create repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ui8bue5mazjuyctd3sr.png)

> Your repository shouldn't have any files!

![Empty Repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vgs6yfg9gystvhvca1dp.png)

## Coding time

well 80% work done now we just need to add code to add comments in website.

```javascript
<script
  src="https://utteranc.es/client.js"
  repo="preetsuthar17/comments"
  issue-term="pathname"
  label="🌟💖✨"
  theme="github-dark"
  crossorigin="anonymous"
  async
></script>
```

> You have to update some values here.
> Make sure to replace `repo="preetsuthar17/comments"` this with your own github user name `repo="yourUserName/comments"`

You can also change the `theme="github-dark"` to `theme="github-light"`

This is the code you need to put where you want to add comment div. If you want to add comments at the
last of blog page put this code at the last in the code file.

And we're done! We successfully added comments to our website.

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/li03zzwm9j9j9ji7qhiv.png)

> Check out the demo [here](https://preetsuthar.me/posts/add-comments-to-blog-website-in-minutes)

> Note: make sure your `comments` repo is public and doesn't contain any sorta file`

So that's it for this blog! Thanks for reading!
