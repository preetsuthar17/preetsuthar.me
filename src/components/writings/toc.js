import Link from 'next/link';

export function TableOfContents({ headings = [] }) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="w-full p-0 " collapsible type="single">
      <div className="border-b px-10 py-10 " value="toc">
        <div>
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
      </div>
    </div>
  );
}
