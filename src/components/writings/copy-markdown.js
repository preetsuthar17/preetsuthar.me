"use client";

import { Copy } from "lucide-react";

export default function CopyMarkdownButton({ slug }) {
  const handleCopyMarkdown = () => {
    let markdown = "";
    const script = document.getElementById("__MARKDOWN__");
    if (script && script.textContent) {
      markdown = script.textContent;
    } else if (window.__BLOG_MARKDOWN__) {
      markdown = window.__BLOG_MARKDOWN__;
    } else {
      const article = document.querySelector("article");
      markdown = article ? article.innerText : "";
    }
    if (markdown) {
      navigator.clipboard.writeText(markdown);
    }
  };
  return (
    <button
      type="button"
      onClick={handleCopyMarkdown}
      className="flex items-center gap-2 px-2 py-2 border border-primary text-primary w-fit hover:bg-secondary text-sm"
    >
      Copy Markdown
      <Copy className="size-4 ms-auto" />
    </button>
  );
}
