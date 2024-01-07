const generateTableOfContents = (content) => {
  const headings = [];
  const toc = [];
  const regex = /<h([1-2])>(.*?)<\/h\1>/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const headingLevel = parseInt(match[1]);
    const headingText = match[2];
    const slug = headingText
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    headings.push({ level: headingLevel, text: headingText, slug });
  }

  let currentLevel = 1;
  const stack = [toc];

  headings.forEach((heading, index) => {
    const entry = { text: heading.text, slug: heading.slug, children: [] };
    entry.id = `${heading.level === 1 ? "h1" : "h2"}-${heading.slug}`;

    if (heading.level === 2) {
      toc.push(entry);
      currentLevel = 1;
      stack.length = 1;
      stack[0] = toc;
    } else if (heading.level === 2 && currentLevel === 1) {
      stack[stack.length - 1].push(entry);
      stack.push(entry.children);
      currentLevel = 2;
    } else if (heading.level === 2 && currentLevel === 2) {
      stack[stack.length - 1].push(entry);
    }
  });

  return toc;
};

export default generateTableOfContents;
