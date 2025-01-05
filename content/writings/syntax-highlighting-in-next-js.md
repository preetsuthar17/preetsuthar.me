---
title: Syntax highlighting in Next Js
excerpt: Guide to add syntax highlighting in your blog website built with Next.Js
author: Preet Suthar
date: "2023-12-25"
---

If you're running blog page or website you know that adding syntax highlighting can be very tough and complex process. but fortunately I have found a way to add syntax highlighting in your `next js` blog website.

To add syntax highlighting in next js website we are gonna use library called `highlightjs`. This library supports ton of languages and themes for customizing as per your needs.

Let's get started by installing the [highlight js](https://highlightjs.org/)

## Setup

we can use yarn or npm to install this package.

```shell
npm install highlight.js
# or
yarn add highlight.js
```

After installation we import this package in our file. For me I'm gonna be using `[slug].js` which is basically dynamic page for blog posts.

```javascript
import hljs from "highlight.js/lib/core";
```

Now we will need to import some of the required files for this package using `<script/>` tag but since we're using next js we're gonna use `next/script`.

```javascript
import Script from "next/script";
```

Now to use this feature we have to enable experimental feature in our next config file.

`next.config.js`

```javascript
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
};
```

We're done with config file. Now we head back to our `[slug].js` file and start using `<Script/>` tag

```javascript
import Script from "next/script";

const post = ({ post }) => {
  return (
    <>
      <div>{/*Post content goes here*/}</div>
    </>
  );
};
```

This is our basic setup now let's import `highlight.js` file using our `<Script/>` tag

## Importing highlight.js

```javascript
import Script from "next/script";

const post = ({ post }) => {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
      {/* Import highlight js */}
      <div>{/* Post content goes here */}</div>
    </>
  );
};
```

## Importing stylesheet for highlighting

Now after importing `highlight.js` library we'll need to import stylesheet for highlighting. In our next js project we have a file `_document.js` we'll import this stylesheet in that page.

```javascript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

This is my `_document.js`, yours can be different depends on the project. We import the stylesheet inside the `Head` tag which is basically replacement of default `<head/>` to `<Head/>` by next js.

```javascript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

Here I have imported the stylesheet inside the `Head` tag. You can find large collection of these stylesheet [here](https://cdnjs.com/libraries/highlight.js). Just select the Asset type to `Styling` and keep experimenting with theme until you find the right one.

![CDN for themes](https://i.imgur.com/p4TF3XP.png)

We're done with the `_document.js` file. let's head back to `[slug].js` and finish the final process.

Now to enable syntax highlighting for various languages we need to register those languages.

`[slug].js`

```javascript
import Script from "next/script";

const post = ({ post }) => {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
      {/* Import highlight js */}
      <div>{/* Post content goes here */}</div>
    </>
  );
};
```

First let's import the `highlight.js`.

```javascript
import Script from "next/script";
import hljs from "highlight.js/lib/core";

const post = ({ post }) => {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
      {/* Import highlight js */}
      <div>{/* Post content goes here */}</div>
    </>
  );
};
```

## Enabling various language support

Now let's import various languages highlighting support

```javascript
import Script from "next/script";

// Importing libraries
import hljs from "highlight.js/lib/core";

// Importing languages
import sql from "highlight.js/lib/languages/sql";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import powershell from "highlight.js/lib/languages/powershell";
import cpp from "highlight.js/lib/languages/cpp";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import xml from "highlight.js/lib/languages/xml";

const post = ({ post }) => {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
      {/* Import highlight js */}
      <div>{/* Post content goes here */}</div>
    </>
  );
};
```

Here I have import most common languages but you can find more languages in the list.
![other lang](https://i.imgur.com/seii9ZV.gif)

## Registering languages for highlighting

Now we register these languages. We'll need to `useEffect()` to register these language onReady.

```javascript
import Script from "next/script";

// Importing useEffect
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";

import sql from "highlight.js/lib/languages/sql";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import powershell from "highlight.js/lib/languages/powershell";
import cpp from "highlight.js/lib/languages/cpp";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import xml from "highlight.js/lib/languages/xml";

const post = ({ post }) => {
  // Registering languages
  useEffect(() => {
    hljs.registerLanguage("sql", sql);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("python", python);
    hljs.registerLanguage("c", c);
    hljs.registerLanguage("cpp", cpp);
    hljs.registerLanguage("powershell", powershell);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("php", php);
    hljs.registerLanguage("php-template", phpTemplate);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
  });

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
      {/* Import highlight js */}
      <div>{/* Post content goes here */}</div>
    </>
  );
};
```

## Final step

We have successfully registered all the languages now final step is to highlight the code. for that we'll be using `highlightAll()` function from the `hljs` means `Highlight.Js`

We'll be wrapping the `highlightAll()` function inside `useEffect()` so that it highlight only when window is loaded.

`[slug].js`

```javascript
useEffect(() => {
  hljs.highlightAll({ detectLanguage: true });
});
```

And that's it! Our final code should look like this

```javascript
import Script from "next/script";

// Importing useEffect
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";

import sql from "highlight.js/lib/languages/sql";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import powershell from "highlight.js/lib/languages/powershell";
import cpp from "highlight.js/lib/languages/cpp";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import xml from "highlight.js/lib/languages/xml";

const post = ({ post }) => {
  // Registering languages
  useEffect(() => {
    hljs.registerLanguage("sql", sql);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("python", python);
    hljs.registerLanguage("c", c);
    hljs.registerLanguage("cpp", cpp);
    hljs.registerLanguage("powershell", powershell);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("php", php);
    hljs.registerLanguage("php-template", phpTemplate);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
  });

  useEffect(() => {
    hljs.highlightAll({ detectLanguage: true });
  });

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
      {/* Import highlight js */}
      <div>{/* Post content goes here */}</div>
    </>
  );
};

export default post;
```

## Wrapping up

So that was it for this blog. If you get any issues or need any help feel free to post comment or reaching me at [@nott_preett](https://x.com/nott_preett)
