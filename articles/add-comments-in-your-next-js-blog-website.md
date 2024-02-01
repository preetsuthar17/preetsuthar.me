---
title: "Add comments in your next js blog website"
date: 2024-02-01
id: 21
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - NextJs
---

## Prerequisites

If you have blog website you might want to add comments in your blog website. In this blog I'm gonna guide you how to add comments in your next js blog website using `giscus`.

Before you start reading you must do the initial setup of creating comments repository in your github account.

> [How to do initial setup?](http://preetsuthar.me/posts/add-comments-to-blog-website-in-minutes#setup)

## Get Started

This time we're gonna use better library for comments system `giscus`. Giscus also allows to add reactions with comments system.

![Preview](https://i.imgur.com/LnzZxUD.png)

Giscus works the same way `utteranc` works.
[How to use utteranc?](https://www.preetsuthar.me/posts/add-comments-to-blog-website-in-minutes)

## Let's get started

First of let's create a file `[post].js`. This is simple dynamic page for blogs. Now to add comments we're gonna `<script/>` tag, but in next we cannot directly use `<script/>` tag. well we can but that's not good practice.

Next js also has its own `<Script/>` tag,

```js
import Script from "next/script";
```

We can use this but this is experimental feature so we're gonna try different approach but using the `<script/>` tag

## Coding

in out `[post].js` file, we want that comments should load instantly when page is opened and to do this we can use hooks specifically `useEffect()` hook.

```js
import { useEffect } from "react";

const postPage = () => {
  useEffect(() => {
    // comment code here
  });
};
```

now let's create `<script>` element using `DOM Manipulation`

```js
import { useEffect } from "react";

const postPage = () => {
  useEffect(() => {
    const script = document.createElement("Script");
  });

  return <>{/* our webpage code*/}</>;
};
```

We'll be using `src` attribute to import `giscus`

```js
import { useEffect } from "react";

const postPage = () => {
  useEffect(() => {
    const script = document.createElement("Script");
    script.src = "https://giscus.app/client.js";
  });
  return <>{/* our webpage code*/}</>;
};
```

Now let's add other important attributes,

```js
import { useEffect } from "react";

const postPage = () => {
  useEffect(() => {
    const script = document.createElement("Script");
    script.src = "https://giscut.app/client.js";
    // Attributes
    script.setAttribute("data-repo", "preetsuthar17/comments");
    script.setAttribute("data-repo-id", "R_kgDOGIcPqw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOGIcPq84CZZYm");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
  });

  return <>{/* our webpage code*/}</>;
};
```

> `data-repo`: the repo we created while doing the [initial setup](#prerequisites)

and now one last thing let's append all of this in `<div></div>` container.

create a empty div in our `jsx` code.

```js
import { useEffect } from "react";

const postPage = () => {
  useEffect(() => {
    const script = document.createElement("Script");
    script.src = "https://giscut.app/client.js";
    // Attributes
    script.setAttribute("data-repo", "preetsuthar17/comments");
    script.setAttribute("data-repo-id", "R_kgDOGIcPqw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOGIcPq84CZZYm");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
  });

  return (
    <>
      <div id="giscus-comments"></div>
    </>
  );
};
```

now last step let's append our `comments` container inside the `giscus-comments` div.

```js
import { useEffect } from "react";

const postPage = () => {
  useEffect(() => {
    const script = document.createElement("Script");
    script.src = "https://giscut.app/client.js";
    // Attributes
    script.setAttribute("data-repo", "preetsuthar17/comments");
    script.setAttribute("data-repo-id", "R_kgDOGIcPqw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOGIcPq84CZZYm");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const commentsContainer = document.getElementById("giscus-comments");
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }
  });

  return (
    <>
      <div id="giscus-comments"></div>
    </>
  );
};
```

## Wrapping up 🎉

Tada!! You successfully added comments in your next js blog website without any efforts.

![Preview](https://i.imgur.com/bdM0N9V.png)
