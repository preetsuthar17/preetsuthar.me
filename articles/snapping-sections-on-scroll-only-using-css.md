---
title: "Snapping sections on scroll only using CSS"
date: 2024-01-30
id: 18
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Snippets
---

By using CSS `scroll-snap-type` and `scroll-snap-align` properties we can create snapping sections on scroll.

```css
html,
body {
  overflow: hidden;
}

.sections {
  height: 100vh;
  overflow-y: scroll;
  snap-scroll-type: y mandatory;
}

.section {
  snap-scroll-align: start;
}
```

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="KKEZOmN" data-user="preetsuthar17" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/preetsuthar17/pen/KKEZOmN">
  Snapping Scroll</a> by Preet Suthar (<a href="https://codepen.io/preetsuthar17">@preetsuthar17</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
