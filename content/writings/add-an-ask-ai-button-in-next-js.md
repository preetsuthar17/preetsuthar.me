---
title: "Add an Ask AI Button in Next.js"
excerpt: "How to add ask AI button in Next.js to help users get instant answers from AI"
author: Preet Suthar
date: "2025-07-06"
---

Add a button that instantly opens the current page in ChatGPT, Claude, or T3 Chat so users can ask questions about it—without copying or pasting a thing.

---

## Why Add This Button?

Sometimes your users get stuck. This button helps them get instant, smart answers from AI using your page content.

It’s especially useful for:

- Code tutorials and examples
- Troubleshooting guides
- Complex product features
- Learning resources
- Any help page where a user might need clarification

Instead of making users explain the page to ChatGPT, this button does it for them.

---

## Problems with Traditional Help

Old-school help systems don’t always cut it:

- Contact forms take time
- FAQs don’t cover everything
- Search often misses the point
- Live chat needs real people
- Users want help _now_

This button solves all that by giving users direct, AI-powered assistance based on the exact page they're on.

---

## How It Works

The idea is simple: We create a button that links to ChatGPT, Claude, and T3 with the current page's URL and title included in the query. These tools then know what the user wants help with.

---

## Step-by-Step Guide

### 1. Create the Button Component

Create a file called `AskAIButton.jsx` in your `components` folder:

```jsx
"use client";

import { ChevronDown, ExternalLinkIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,p
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AskAIButton({ slug }) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const pageTitle = typeof window !== "undefined" ? document.title : "";

  const q = `Please read the documentation from ${currentUrl} (titled: "${pageTitle}"). I want to discuss or get help with it.`;

  const gpt = `https://chatgpt.com/?${new URLSearchParams({
    hints: "search",
    q,
  })}`;
  const claude = `https://claude.ai/new?${new URLSearchParams({ q })}`;
  const t3 = `https://t3.chat/new?${new URLSearchParams({ q })}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <MessageCircleIcon className="size-4" />
          Ask AI
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <a
            href={gpt}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-2"
          >
            ChatGPT <ExternalLinkIcon className="size-4 ms-auto" />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={claude}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-2"
          >
            Claude <ExternalLinkIcon className="size-4 ms-auto" />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={t3}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-2"
          >
            T3 Chat <ExternalLinkIcon className="size-4 ms-auto" />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

> **Note**: This example uses UI components from [HextaUI](https://hextaui.com?ref=preetsuthar.me), but you can replace them with any UI library or plain HTML.

---

### 2. Add the Button to Your Page

#### For a Static Page

```jsx
import AskAIButton from "@/components/AskAIButton";

export default function HelpPage() {
  return (
    <div>
      <h1>Help Page</h1>
      <AskAIButton />
    </div>
  );
}
```

#### For a Dynamic Blog Page (e.g., `[slug].jsx`)

```jsx
import AskAIButton from "@/components/AskAIButton";

export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post</h1>
      <AskAIButton slug={params.slug} />
    </div>
  );
}
```

---

## Conclusion

This small addition can dramatically improve your help experience.

- Makes help pages interactive
- Reduces user frustration
- Integrates AI tools seamlessly
- Helps users get the answers they need fast
