export default function cloudflareLoader({ src, width, quality = 85 }) {
  const params = [
    `width=${width}`,
    'f=auto',
    'fit=scale-down',
    'q=' + quality,
  ];

  if (src.includes('github.com') || src.includes('raw.githubusercontent.com')) {
    return src;
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return `https://preetsuthar.me/cdn-cgi/image/${params.join(',')}/${src}`;
  }

  if (src.startsWith('/')) {
    return `https://preetsuthar.me/cdn-cgi/image/${params.join(',')}${src}`;
  }

  return `https://preetsuthar.me/cdn-cgi/image/${params.join(',')}/${src}`;
}