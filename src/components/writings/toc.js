import Link from 'next/link';
import { useState } from 'react';

export function TableOfContents({ headings = [] }) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="w-full p-0">
      <div
        className="flex cursor-pointer select-none items-center justify-between border-b px-10 py-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-semibold text-lg">Table of Contents</span>
        <svg
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {open && (
        <div className="px-10 py-6" value="toc">
          <nav className="flex flex-col space-y-2">
            {headings.map((heading) => (
              <Link
                className={`text-muted-foreground transition-colors hover:text-foreground ${
                  heading.level === 2
                    ? 'pl-4'
                    : heading.level === 3
                      ? 'pl-8'
                      : heading.level === 4
                        ? 'pl-12'
                        : ''
                }`}
                href={`#${heading.id}`}
                key={heading.id}
              >
                {heading.level === 2
                  ? '• '
                  : heading.level === 3
                    ? '◦ '
                    : heading.level === 4
                      ? '◦ '
                      : ''}
                {'  '}
                {heading.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
