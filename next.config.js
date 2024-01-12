const fs = require("fs-extra");
const path = require("path");
const matter = require("gray-matter");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  transpilePackages: [
    "@mui/icons-material",
    "@mui/x-date-pickers",
    "@devexpress/dx-react-grid-material-ui",
    "gsap",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      const articlesDir = path.join(__dirname, "articles");
      const files = fs.readdirSync(articlesDir);

      files.forEach((filename) => {
        const filePath = path.join(articlesDir, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        const slug = generateSlug(data.title);

        const newFilePath = path.join(articlesDir, `${slug}.md`);
        if (filename !== `${slug}.md`) {
          fs.renameSync(filePath, newFilePath);
        }
        console.log(`slug renamed to ${slug}.md`);
      });

      generateSitemap();
    }

    return config;
  },
};

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
}

function generateSitemap() {
  const articlesDir = path.join(__dirname, "articles");
  const files = fs.readdirSync(articlesDir);
  const dynamicPaths = files.map((filename) => {
    const { data } = matter(
      fs.readFileSync(path.join(articlesDir, filename), "utf8")
    );
    const slug = generateSlug(data.title);
    return `/posts/${slug}`;
  });

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
  <url>
    <loc>https://preetsuthar.me</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://preetsuthar.me/about</loc>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://preetsuthar.me/projects</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://preetsuthar.me/posts</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
    ${dynamicPaths
      .map(
        (path) =>
          `<url><loc>https://preetsuthar.me${path}</loc><priority>1.0</priority><changefreq>daily</changefreq></url>`
      )
      .join("")}
    </urlset>
  `;

  fs.writeFileSync(
    path.join(__dirname, "public", "sitemap.xml"),
    sitemap,
    "utf8"
  );

  console.log("Sitemap generated successfully!");
}
