---
title: "Creating Gradient text only using CSS"
date: 2024-01-31
id: 20
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Snippets
---

To create gradient text using only css we can use `background-clip` property in css.

```css
h1 {
  background: -webkit-linear-gradient(blue, blueviolet);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

<p class="codepen" data-height="494.9090881347656" data-default-tab="result" data-slug-hash="qBvxwyy" data-user="preetsuthar17" style="height: 494.9090881347656px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/preetsuthar17/pen/qBvxwyy">
  Creating gradient text</a> by Preet Suthar (<a href="https://codepen.io/preetsuthar17">@preetsuthar17</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
