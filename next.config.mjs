/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './src/utils/cloudflare-loader.js',
    domains: ['i.imgur.com', 'github.com', 'raw.githubusercontent.com'],
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:all*(jpg|jpeg|png|webp|avif|gif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
