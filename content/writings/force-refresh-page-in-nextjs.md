---
title: "Force refresh page in Next.js"
excerpt: "Using useRouter hook in Next.js"
author: Preet Suthar
date: "2025-04-23"
---

If you’re inside a React component, grab the router instance with the `useRouter` hook:

```js
import { useRouter } from "next/router";

function MyComponent() {
  const router = useRouter();

  // reload the current page
  router.reload(window.location.pathname);
}
```

If you need to trigger a reload from outside a component—for example, in a plain utility module—just import the singleton `Router` instead:

```js
import Router from "next/router";

// reload the current page
Router.reload(window.location.pathname);
```
