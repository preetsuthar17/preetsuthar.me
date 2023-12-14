const fs = require("fs");
const path = require("path");
const { Feed } = require("next-rss");
const matter = require("gray-matter");
const { remark } = require("remark");
const remarkGfm = require("remark-gfm");
const html = require("remark-html");

const articlesDirectory = path.join(process.cwd(), "articles");

export default function RSS({ articles }) {
  return <Feed feed={createFeed(articles)} />;
}

module.exports.getServerSideProps = async ({ res }) => {
  const articles = getAllArticles();
  const feed = createFeed(articles);

  res.setHeader("Content-Type", "text/xml");
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {},
  };
};

function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      slug: fileName.replace(/\.md$/, ""),
      date: data.date,
      content: convertMarkdownToHtml(data.content),
    };
  });

  return articles;
}

function convertMarkdownToHtml(markdown) {
  const processedContent = remark()
    .use(remarkGfm)
    .use(html)
    .processSync(markdown);
  return processedContent.toString();
}

function createFeed(articles) {
  return new Feed({
    title: "Preet Suthar",
    description: "Providing web development/programming related articles.",
    id: "https://preetsuthar.me/",
    link: "https://preetsuthar.me/",
    favicon: "https://preetsuthar.me/favicon.ico",
    updated: new Date(),
    generator: "Next.js RSS Feed Generator",
    feedLinks: {
      rss2: "https://preetsuthar.me/rss.xml",
    },
    author: {
      name: "Preet Suthar",
      email: "preetsutharxd@gmail.com",
      link: "https://preetsuthar.me/about",
    },
    items: articles.map((article) => ({
      title: article.title,
      id: `https://preetsuthar.me/posts/${article.slug}`,
      link: `https://preetsuthar.me/posts/${article.slug}`,
      description: article.content,
      content: article.content,
      author: [
        {
          name: "Preet Suthar",
          email: "preetsutharxd@gmail.com",
          link: "https://preetsuthar.me/about",
        },
      ],
      date: new Date(article.date),
    })),
  });
}
