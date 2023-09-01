import fs from "fs";
import path from "path";

export function getAllArticles() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const articleFileNames = fs.readdirSync(articlesDirectory);

  const articleSlugs = articleFileNames.map((fileName) =>
    fileName.replace(/\.mdx$/, "")
  );

  return articleSlugs;
}
