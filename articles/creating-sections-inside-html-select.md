---
title: "Creating sections inside html select tag"
date: 2024-01-30
id: 19
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Snippets
---

To create section inside `<select/>` tag we can use `<hr/>` in between options.

```html
<h1>Selector</h1>

<select>
  <option>HTML</option>
  <option>CSS</option>
  <option>Javascript</option>
  <!-- Using <hr/> to separate sections -->
  <hr />
  <option>ReactJs</option>
  <option>NextJs</option>
  <option>Angular</option>
</select>
```

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="wvOyGMJ" data-user="preetsuthar17" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/preetsuthar17/pen/wvOyGMJ">
  Dividing options in select tag</a> by Preet Suthar (<a href="https://codepen.io/preetsuthar17">@preetsuthar17</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
