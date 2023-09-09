---
title: "CSS Course - Lecture 1"
date: 2023-09-09
id: 23
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - CSS Course
---

# Introduction to CSS

## What is CSS?

CSS stands for `cascading style sheet`. CSS describes how elements in HTML structure will look, like background color, border, font size etc. using CSS we can control multiple layout in the HTML structure at the same time.

## Why we use CSS?

well we use CSS to style the HTML structure. for example let's take look at the page you're reading you see we got some background color, text color, borders, stylish buttons etc. We can use CSS to make things look pretty like girls use make-up haha got it?

Taking humans as example, The bone structure in humans represent HTML, The functionality like using their mind thinking it represent JavaScript and the way humans styles them like clothes, hairs, accessories it is counted as CSS.

![Preview](https://i.imgur.com/AsKj37k.pnghttps://i.imgur.com/AsKj37k.png)

## CSS Selectors

If you know about classes and Id in HTML, we can target those elements in CSS using specific symbols like `period (.)` and `hashtag (#)`

```
for classes - "."
for id - "#"
```

Let's say we wanna target a `<p>` tag which has class of `para`

```html
<p class="para">Hello world</p>
```

to target element with class we use `.`

```css
.para {
  color: red;
}
```

What we did here is basically we called the element which has class of `para` using `.para` and we told it that I want to change your color to red which is `color: red`. We can change color of any text in css using `color` property.

## Syntax of CSS

I am pretty sure that you must've learned basics of HTML before diving into CSS [check out this post](https://www.preetsuthar.me/posts/beautiful-background-animation-only-with-html-and-css).

For classes,

```css
.<class_name > {
  /* property code */
}
```

For Id

```css
#<id_name > {
  /* property code */
}
```

## CSS comments

Well comments are basically block of code in any language which is ignored by compiler. comments in CSS are followed by `/* */`

### Single-line comments,

```css
.text {
  color: red;
  /* Comments will be ignored by code */
  /* single line comment*/
  /* single line comment*/
}
```

### Multi-line comments,

```css
.text {
  color: red;
  /* Hello world
  This entire
  block
  Will be ignored by code */
}
```

So yeah that covers basics of CSS. In next lecture we'll cover up about CSS Box Model.
