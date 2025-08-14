/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'github.com', 'raw.githubusercontent.com', 'mluigse36i.ufs.sh'],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/preetsuthar17',
        permanent: false, 
      },
      {
        source: '/twitter',
        destination: 'https://x.com/preetsuthar17',
        permanent: false, 
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/@preetsuthar17',
        permanent: false, 
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/preetsuthar17/',
        permanent: false, 
      }
    ]
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
