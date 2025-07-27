'use client';

import { Check, Copy } from 'lucide-react';

import { useState } from 'react';

export default function CopyMarkdownButton({ slug, markdown: markdownProp }) {
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    let markdown = '';
    if (markdownProp) {
      markdown = markdownProp;
    } else {
      const script = document.getElementById('__MARKDOWN__');
      if (script?.textContent) {
        markdown = script.textContent;
      } else if (window.__BLOG_MARKDOWN__) {
        markdown = window.__BLOG_MARKDOWN__;
      } else {
        const article = document.querySelector('article');
        markdown = article ? article.innerText : '';
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
      className="flex w-fit items-center gap-3 border border-primary px-2 py-2 text-primary text-sm hover:bg-secondary"
      disabled={copied}
      onClick={handleCopyMarkdown}
      type="button"
    >
      {copied ? 'Copied!' : 'Copy Markdown'}
      {copied
        ? <Check className="ms-auto size-4" />
        : <Copy className="ms-auto size-4" />}
    </button>
  );
}
