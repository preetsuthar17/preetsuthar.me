"use client";

import { Check } from "lucide-react";
import { Copy } from "lucide-react";

import { useState } from "react";

export default function CopyMarkdownButton({ slug, markdown: markdownProp }) {
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    let markdown = "";
    if (markdownProp) {
      markdown = markdownProp;
    } else {
      const script = document.getElementById("__MARKDOWN__");
      if (script && script.textContent) {
        markdown = script.textContent;
      } else if (window.__BLOG_MARKDOWN__) {
        markdown = window.__BLOG_MARKDOWN__;
      } else {
        const article = document.querySelector("article");
        markdown = article ? article.innerText : "";
      }
    }
    if (markdown) {
      navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <button
      type="button"
      onClick={handleCopyMarkdown}
      className="flex items-center gap-3 px-2 py-2 border border-primary text-primary w-fit hover:bg-secondary text-sm"
      disabled={copied}
    >
      {copied ? "Copied!" : "Copy Markdown"}
      {copied ? (
        <Check className="size-4 ms-auto" />
      ) : (
        <Copy className="size-4 ms-auto" />
      )}
    </button>
  );
}
