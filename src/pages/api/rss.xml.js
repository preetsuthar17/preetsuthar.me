import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://preetsuthar.me";

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
    }
  });
}

export default async function handler(req, res) {
  const posts = getAllPosts();

  const feedItems = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title || post.slug)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt || "")}</description>
    </item>
  `
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Preet Suthar Blog</title>
      <link>${siteUrl}</link>
      <description>Latest blog posts from Preet Suthar</description>
      <language>en</language>
      ${feedItems}
    </channel>
  </rss>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
