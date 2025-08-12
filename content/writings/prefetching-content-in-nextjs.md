---
title: "Prefetching content in Next.js"
excerpt: "How Next.js loads pages early to make navigation faster"
author: "Preet Suthar"
date: "2025-04-23"
---

When linking two pages in a Next.js application, the built-in `<Link>` component allows for seamless client-side navigation. Instead of triggering a full page reload like traditional websites, Next.js uses frontend routing to display the new page instantly, making for a faster user experience.

But that’s not all—Next.js also prefetches linked pages automatically. As soon as a `<Link>` element enters the viewport (i.e., becomes visible on screen), Next.js begins preloading the linked page in the background—provided it’s an internal link within your site. This makes navigation nearly instant when users click the link.

However, this prefetching behavior only works in **production mode**. If you're running your app in development with `npm run dev`, prefetching won't be triggered. To see it in action, stop the dev server, run `npm run build` to generate your production bundle, and start the app with `npm run start`.

You can observe this behavior in your browser’s Network tab. Once the page finishes loading (after the `load` event fires), links that are already visible (i.e., above the fold) start prefetching. Links that are out of view will be prefetched as the user scrolls them into the viewport.

Prefetching happens automatically on fast internet connections (like Wi-Fi or 3G+), unless the browser sends a `Save-Data` header indicating a preference for reduced data usage.

If you want to disable prefetching for a specific link, you can do so by passing `prefetch={false}` to the `<Link>` component:

```jsx
<Link href="/contact" prefetch={false}>
  Contact
</Link>
```
