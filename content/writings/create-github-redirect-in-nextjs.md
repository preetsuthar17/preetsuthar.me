---
title: "How to setup redirects in Next.js"
excerpt: "How to setup redirects in Next.js for cleaner URLs and better user experience"
author: "Preet Suthar"
date: "2025-08-14"
---

Ever wanted to share your GitHub repo with a simple `/github` link instead of the full GitHub URL? Here's how to set up clean redirects in Next.js that make sharing your projects easier.

---

## Why Use Redirects?

Instead of sharing long URLs like `https://github.com/preetsuthar17/ikiform`, you can create short, memorable links:

- `yoursite.com/github` → Your main GitHub profile
- `yoursite.com/discord` → Your Discord server
- `yoursite.com/feedback` → Your feedback form

These short links are:
- **Easier to remember** and share
- **Professional looking** in marketing materials
- **Trackable** if you add analytics
- **Changeable** without updating everywhere

---

## How Redirects Work in Next.js

Next.js has built-in redirect functionality through the `next.config.js` file. When someone visits your redirect URL, Next.js automatically sends them to the destination URL with a proper HTTP redirect.

---

## Step-by-Step Setup

### 1. Open Your Next.js Config File

Find your `next.config.js` or `next.config.mjs` file in your project root. If you don't have one, create it:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your config here
}

module.exports = nextConfig
```

For TypeScript projects, use:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your config here
};

export default nextConfig;
```

### 2. Add the Redirects Function

Add an `async redirects()` function to your config:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/yourusername/yourproject',
        permanent: false, 
      },
    ]
  },
};

export default nextConfig;
```

### 3. Add Multiple Redirects

You can add as many redirects as you need:

```ts
async redirects() {
  return [
    {
      source: '/github',
      destination: 'https://github.com/preetsuthar17/ikiform',
      permanent: false, 
    },
    {
      source: '/discord',
      destination: 'https://discord.gg/jM5BgDMaGX',
      permanent: false, 
    },
    {
      source: '/feedback',
      destination: 'https://www.ikiform.com/f/feedback-form-ag334n',
      permanent: false, 
    },
    {
      source: '/feature-request',
      destination: 'https://www.ikiform.com/f/feature-request-form-zo0tg5',
      permanent: false, 
    },
  ]
},
```

### 4. Restart Your Development Server

After making changes to `next.config.js`, restart your dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

---

## Understanding the Options

### Source and Destination

- **`source`**: The path users visit on your site (`/github`)
- **`destination`**: Where they get redirected (`https://github.com/username/repo`)

### Permanent vs Temporary

- **`permanent: false`**: Creates a 307 redirect (temporary)
- **`permanent: true`**: Creates a 308 redirect (permanent)

Use `permanent: false` for most cases—it's safer and gives you flexibility to change destinations later.

### Advanced Pattern Matching

You can use patterns for dynamic redirects:

```ts
{
  source: '/github/:path*',
  destination: 'https://github.com/yourusername/:path*',
  permanent: false,
}
```

This would redirect `/github/issues` to `https://github.com/yourusername/issues`.

---

## Best Practices

### 1. Keep It Simple

Use clear, memorable paths:
- ✅ `/github`, `/discord`, `/docs`
- ❌ `/gh`, `/dc`, `/documentation-site`

### 2. Use Consistent Naming

If you have multiple projects, keep the pattern consistent:
- `/project1-github`
- `/project2-github`

### 3. Plan for Analytics

Consider adding UTM parameters to track redirect usage:

```ts
{
  source: '/github',
  destination: 'https://github.com/username/repo?utm_source=website&utm_medium=redirect',
  permanent: false,
}
```

### 4. Test Your Redirects

Always test redirects after deployment:

```bash
curl -I https://yoursite.com/github
```

Look for the `Location` header to confirm it's working.

---

## Common Use Cases

### Social Links

```ts
{
  source: '/twitter',
  destination: 'https://twitter.com/yourusername',
  permanent: false,
},
{
  source: '/linkedin',
  destination: 'https://linkedin.com/in/yourusername',
  permanent: false,
}
```

### Project Resources

```ts
{
  source: '/docs',
  destination: 'https://docs.yourproject.com',
  permanent: false,
},
{
  source: '/demo',
  destination: 'https://demo.yourproject.com',
  permanent: false,
}
```

### Support Channels

```ts
{
  source: '/support',
  destination: 'mailto:support@yourproject.com',
  permanent: false,
},
{
  source: '/bug-report',
  destination: 'https://github.com/username/repo/issues/new',
  permanent: false,
}
```

---

## Deployment Notes

Redirects work automatically when you deploy to:
- **Vercel** (built-in support)
- **Netlify** (via `_redirects` file, but Next.js handles it)
- **Other platforms** that support Next.js

No additional configuration needed—just deploy your updated `next.config.js`.

---

## Conclusion

Setting up redirects in Next.js is simple but powerful. With just a few lines in your config file, you can create professional, memorable links that make sharing your projects easier.

Start with your most important links like `/github` and `/discord`, then add more as needed. Your users (and your marketing materials) will thank you for the cleaner URLs.
