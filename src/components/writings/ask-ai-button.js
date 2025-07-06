"use client";

import { ExternalLinkIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AskAIButton({ slug }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 px-2 py-2 border border-primary text-primary w-fit hover:bg-secondary text-sm"
        onClick={() => setOpen((v) => !v)}
      >
        Ask AI
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 mt-2 min-w-[160px] bg-background border border-primary flex flex-col p-2">
          <a
            href={gpt}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between gap-2 px-2 py-3 hover:bg-secondary text-sm"
            onClick={() => setOpen(false)}
          >
            Ask ChatGPT
            <ExternalLinkIcon className="size-4" />
          </a>
          <a
            href={claude}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between gap-2 px-2 py-3 hover:bg-secondary text-sm"
            onClick={() => setOpen(false)}
          >
            Ask Claude
            <ExternalLinkIcon className="size-4" />
          </a>
          <a
            href={t3}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between gap-2 px-2 py-3 hover:bg-secondary text-sm"
            onClick={() => setOpen(false)}
          >
            Ask T3 Chat
            <ExternalLinkIcon className="size-4" />
          </a>
        </div>
      )}
    </div>
  );
}
