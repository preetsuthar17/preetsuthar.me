---
title: "Beautiful background animation only with HTML and CSS"
date: 2023-08-20
id: 9
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Tutorial
---

## Preview

Have you ever wondered how people create those beautiful background shapes that are animated? Well, it is much easier than you think let's have a look at what I am talking about,

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m6bx6e8g6zmfy8j15v6e.png)

You see these look so beautiful in websites, making them look more eye-catching. They are animated so it's so cool!! isn't it?

Let's create it then :)

## Get started

First of all head over to [this website](https://bgjar.com/animated-shape)

![bgjar.com](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9gohe7y4flhjbfbqr1u3.png)

You'll see something like this hover mouse over `Animated shapes` and then click on `Customize`

![Animated Shapes -> Customize](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3bhxvikfp3igy4xj307x.png)

Now simply customize it as you wish to and don't forget to tick the `enable animations` option :)

Once you are done click on `get code` at the bottom and copy the SVG code

![Get SVG code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ew3npiw1so98w3whhyd.png)

## Coding Time :)

Once you copy the SVG code headover to your website code folder create a new file `nameOfTheFile.svg` you can name it whatever you want but don't forget to put `.svg` extension. Now in the same file paste the SVG code you copied!

Now head over to your main CSS file, In this file we'll set the background for the body.

`main.css`

```css
background-image: url("/path/to/your/image.svg");
background-repeat: no-repeat;
background-size: cover;
```

And voila!! we're done!! enjoy some beautiful eye-catching animations in the body's background
