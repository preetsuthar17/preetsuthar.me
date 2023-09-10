---
title: "CSS Course - Lecture 3"
date: 2023-09-11
id: 25
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - CSS Course
---

# CSS Properties and Values

## Basic Properties

CSS has some really cool properties which you can use to change style of entire page, text colors, size, background images and even fonts.

## CSS color

You can use CSS color property change color of any paragraph or text to you choice of color.
Let's say we have paragraph in HTML with class of `text`.

```html
<p class="text">I want this text to be red</p>
```

![Preview](https://i.imgur.com/zgtR76D.png)

So let's call `text` class in our css and tell it to change its color to red.
To call element with class name will use `. (period)` selector

```css
.text {
  color: red;
}
```

![preview](https://i.imgur.com/2JrKpF3.png)

## CSS background

Using CSS background property we can change background color of any element in HTML.

Let's say I want to change background color of entire website in HTML. We'll target `<body></body>` tag

Since we are directly targeting the tag in CSS we don't need to use any selector.

> Note: directly targeting tags and applying any css to it, will apply CSS to all tags in entire website.

So now we want to change background color of our webpage we'll use `background: #color` property in css.

```css
body {
  background: red;
}
```

![preview](https://i.imgur.com/NA7L0X2.png)

```css
body {
  background: green;
}
```

![preview](https://i.imgur.com/iJ3S8Iy.png)

We can also use gradient in background.

```css
body {
  background: linear-gradient(90deg, blue 0%, pink 100%, red 100%);
}
```

![preview](https://i.imgur.com/yDxkJHI.png)

> Pro tip: Use [CSS Gradient Generator](https://cssgradient.io/) for custom gradient

## CSS font style

In CSS we can also change font styles for our website.

### Syntax

```css
body {
  font-family: <font_family>;
}
```

you can find tons of font families at [fonts.google.com](https://fonts.google.com) Just import them in website and use normally.

### Default font family

![preview](https://i.imgur.com/gBsBPEy.png)

### Custom font family

```css
body {
  font-family: arial;
}
```

![preview](https://i.imgur.com/TGAVXx8.png)

```css
body {
  font-family: consolas;
}
```

![Preview](https://i.imgur.com/xJCQS8b.png)

## CSS units

Well in CSS there are a lot of units like `px`, `rem`, `em`, `%` etc.
The most common one is `px`. We can use these units to adjust sizing of anything in CSS.

For example I want to change size of text in my website. for that we use `font-size` property in css.

```css
.text {
  font-size: 16px;
}
```

![preview](https://i.imgur.com/EFcC5UO.png)

![preview](https://i.imgur.com/ADTfvMu.png)

![preview](https://i.imgur.com/LkxbnjA.png)

We can also use `%`, `em`, `rem` instead of `px`.

| px   | rem      |
| ---- | -------- |
| 16px | 1rem     |
| 17px | 1.0625em |
| 18px | 1.1250em |
| 19px | 1.1875em |
| 20px | 1.2500em |
| 21px | 1.3125em |

So yeah that's for this lecture thanks for reading.
Let me know in comments if you any issue troubling.
