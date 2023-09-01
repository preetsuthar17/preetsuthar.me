const fs = require("fs-extra");
const path = require("path");
const matter = require("gray-matter");

const articlesDirectory = path.join(process.cwd(), "articles");

const readArticles = () => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.mdx$/, ""),
      frontmatter: data,
      content,
    };
  });

  articles.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return articles;
};

module.exports = readArticles;
