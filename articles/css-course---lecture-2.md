---
title: "CSS Course - Lecture 2"
date: 2023-09-10
id: 24
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - CSS Course
---

# CSS Box Model

![Box model](https://i.imgur.com/BeYuWXN.png)

## What is Box Model

CSS box model basically contains padding, margin, borders, and content.

`Content`: Content is base part of CSS box model

`Padding`: Padding is inner spacing for `div` the one you see in the above image with light blue color is padding for content.

`Border`: Border is the one you see in box model which is black color and it is around the content. The reason it has spacing inside it it because of padding.

`Margin`: The outer space after the border you see is margin. Which is used to add gaps between multiple content aligned in row or colum in css.

![Example](https://i.imgur.com/hXKbbjU.png)

The best example for margin you see the spacing between the cards. it makes the layout looks little pretty and the best example for padding is the spacing you see around the text content.

### Example

```css
.box {
  border: 15px solid black;
  padding: 10px;
  margin: 20px;
}
```

## Width and Height

Width and Heights are used to define width and height of element well obviously.

```css
.box {
  width: 700px;
  height: 400px;
}
```

![preview](https://i.imgur.com/YWV3z20.png)

```css
.box {
  width: 400px;
  height: 700px;
}
```

![preview](https://i.imgur.com/8DbzK5o.png)

That basically covers box model of CSS.
