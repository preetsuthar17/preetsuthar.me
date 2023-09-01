import { getAllArticles } from "../src/lib/articlesFetch";
import { getAllSlugs } from "../src/lib/postsFetch";

const createSitemapXml = (urls) => `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `<url><loc>${url}</loc></url>`).join("")}
  </urlset>
`;

export default async function SitemapXml() {
  const blogSlugs = await getAllSlugs();
  const articleSlugs = await getAllArticles();

  const baseUrl = process.env.BASE_URL || "https://preetsuthar.me";

  const blogUrls = blogSlugs.map((slug) => `${baseUrl}/posts/${slug}`);
  const articleUrls = articleSlugs.map((slug) => `${baseUrl}/articles/${slug}`);

  const pagesUrls = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/posts`,
    `${baseUrl}/contact`,
    `${baseUrl}/projects`,
    `${baseUrl}/reviews`,
  ];

  const allUrls = [...blogUrls, ...articleUrls, ...pagesUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n${createSitemapXml(
    allUrls
  )}`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXml);
  res.end();
}

export async function getServerSideProps({ res }) {
  const blogSlugs = await getAllSlugs();
  const articleSlugs = await getAllArticles();

  const baseUrl = process.env.BASE_URL || "https://preetsuthar.me";

  const pagesUrls = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/posts`,
    `${baseUrl}/contact`,
    `${baseUrl}/projects`,
    `${baseUrl}/reviews`,
  ];

  const blogUrls = blogSlugs.map((slug) => `${baseUrl}/posts/${slug}`);
  const articleUrls = articleSlugs.map((slug) => `${baseUrl}/articles/${slug}`);

  const allUrls = [...blogUrls, ...articleUrls, ...pagesUrls];

  const sitemapXml = createSitemapXml(allUrls);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXml);
  res.end();

  return { props: {} };
}
