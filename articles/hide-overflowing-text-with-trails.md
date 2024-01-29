---
title: "Hide overflowing text with trails (...)"
date: 2024-01-29
id: 17
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Snippets
---

We can use `text-overflow: ellipsis` to hide any overflowing text

![Demo](https://i.imgur.com/IpRLe5m.gif)

```css
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
