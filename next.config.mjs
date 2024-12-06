/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.mjs$/,
      loader: 'babel-loader',
      type: 'javascript/auto',
    });
    config.output.publicPath = '/static/';
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/homepage',
        permanent: false,
      },
    ];
  },
  transpilePackages: ['@nextui-org/react', 'framer-motion'],
};
export default nextConfig;
