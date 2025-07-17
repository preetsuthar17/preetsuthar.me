---
title: "Optimize images for vercel hosting"
excerpt: "How to optimize images for vercel hosting to avoid high costs"
author: Preet Suthar
date: "2025-07-17"
---

> **TL;DR**  
> Stop storing images in `/public`. Compress to WebP, host on **UploadThing** (5 GB free, unlimited bandwidth), and link the CDN URL in `<Image />`.

---

### The hidden cost of the `/public` folder

| **Meter**                                                    | **Pro/Enterprise Extra**    | **Real-world pain**                                                                                      |
| ------------------------------------------------------------ | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Image transformations**(every cache **MISS** or **STALE**) | **$0.05–$0.08 / 1 000**     | A 2 MB hero image, 3 viewports, 3 formats = 9 transformations per visitor. 1 112 visitors = $0.50 extra. |
| **Image cache reads**(each 8 KB chunk)                       | **$0.40–$0.64 / 1 000 000** | Same hero image (250 KB) served in Beijing → 32 read units. 100 k hits = $0.20 extra.                    |
| **Image cache writes**(each 8 KB chunk)                      | **$4.00–$6.40 / 1 000 000** | Every new variant (size/format) triggers a write. 10 new variants × 50 k users = $2.00+ extra.           |

> **Plus** the usual **Fast Data Transfer** & **Edge Requests** you already pay for when the image is delivered.

---

### Hobby overage?

- **No charge**, but new images instantly return **HTTP 402** (payment required) and your `<Image>` falls back to the `alt` text.
- Previously optimized images keep working.

---

### Pro trial overage?

- **Trial ends** on the spot—you’re forced to upgrade or lose optimization.

---

### Step-by-step: free, fast, future-proof images

#### 1. Compress & convert to WebP

| Tool              | One-liner                                               |
| ----------------- | ------------------------------------------------------- |
| **Squoosh** (GUI) | Drag → choose _WebP_ → quality 80 % → download `.webp`. |
| **TinyPNG** (GUI) | Drag → auto WebP → download.                            |
| **CLI** (cwebp)   | `cwebp -q 80 in.jpg -o out.webp`                        |

Typical savings: **30–50 % smaller** than JPEG/PNG with no visible loss.

#### 2. Host on UploadThing (no code)

1. [Create account](https://uploadthing.com) (free tier 2 GB storage, unlimited egress).
2. **Upload Files** → drag your `.webp`.
3. Click **Copy URL** → `https://utfs.io/f/abc123def456.webp`.

#### 3. Drop the URL into Next.js

```jsx
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="https://utfs.io/f/abc123def456.webp"
      alt="Hero section"
      width={1200}
      height={630}
      priority
    />
  );
}
```

No extra config—UploadThing already sets proper `Cache-Control` headers.

#### 4. Quick checklist

- ✅ Never commit raw PNG/JPG to `/public`.
- ✅ Always compress & convert first.
- ✅ Replace image? Re-upload, swap URL. Old links remain cached worldwide.

---

### Why this works

| Metric                 | Before (`/public`)     | After (UploadThing)          |
| ---------------------- | ---------------------- | ---------------------------- |
| **Bandwidth bill**     | $0.05 - $0.0812 per 1K | **$0**                       |
| **Global CDN**         | Vercel edge (static)   | UploadThing edge (optimized) |
| **Scalability**        | Add GBs → $$           | Add files → free             |
| **Format negotiation** | Manual                 | Automatic (WebP/AVIF)        |

---

### Bonus tips

- **Lazy-load below-the-fold images**

```jsx
loading = "lazy";
```

- **Responsive sizing**

```jsx
sizes = "(max-width: 768px) 100vw, 50vw";
```

- **Monitor usage**
  UploadThing dashboard shows total egress—set a Slack alert if you’re close to any paid tier.

---

### Want to dig deeper?

- [Vercel Bandwidth Pricing](https://vercel.com/pricing)
- [UploadThing Docs](https://docs.uploadthing.com)
- [Next.js Image Optimization](https://nextjs.org/docs/app/getting-started/images)
