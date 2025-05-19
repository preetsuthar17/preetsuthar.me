import Link from "next/link";

export function TableOfContents({ headings = [] }) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <div type="single" collapsible className="w-full p-0 ">
      <div value="toc" className="border-b px-10 py-10 ">
        <div className="p-0">
          <h2 className="font-medium">Table of Contents</h2>
        </div>
        <div>
          <nav className="flex flex-col space-y-2 mt-4">
            {headings.map((heading) => (
              <Link
                key={heading.id}
                href={`#${heading.id}`}
                className={`text-muted-foreground hover:text-foreground transition-colors  ${
                  heading.level === 2
                    ? "pl-4"
                    : heading.level === 3
                    ? "pl-8"
                    : heading.level === 4
                    ? "pl-12"
                    : ""
                }`}
              >
                {heading.level === 2
                  ? "• "
                  : heading.level === 3
                  ? "◦ "
                  : heading.level === 4
                  ? "◦ "
                  : ""}
                {"  "}
                {heading.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
