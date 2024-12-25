import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import container from "markdown-it-container";
import markdownItAnchor from "markdown-it-anchor";

const postsDirectory = path.join(process.cwd(), "src/content/writings");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

export async function markdownToHtml(markdown) {
  const headings = [];
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && Prism.languages[lang]) {
        try {
          return `<pre class="language-${lang}" tabindex="0"><code class="language-${lang}">${Prism.highlight(
            str,
            Prism.languages[lang],
            lang
          )}</code></pre>`;
        } catch {
          return "";
        }
      }
      return "";
    },
  })
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "anchor",
      permalinkSymbol: "#",
      callback: (token, info) => {
        headings.push({
          level: parseInt(token.tag.slice(1)),
          text: info.title,
          id: info.slug,
        });
      },
    })
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-sup"))
    .use(require("markdown-it-sub"))
    .use(require("markdown-it-ins"))
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-deflist"))
    .use(require("markdown-it-abbr"))
    .use(container, "warning")
    .use(container, "alert")
    .use(container, "info")
    .use(container, "note")
    .use(container, "tip");

  const html = md.render(markdown);
  return { html, headings };
}
