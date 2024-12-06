export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }

  if (src.includes("github.com") || src.includes("raw.githubusercontent.com")) {
    return src;
  }

  if (src.includes("imgur.com")) {
    return src;
  }

  return `https://preetsuthar.me/cdn-cgi/image/f=auto,${params.join(
    ","
  )}/${src}`;
}
