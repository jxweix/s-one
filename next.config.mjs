/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
          test: /\.mjs$/,
          type: 'javascript/auto',
        });
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
    experimental: {
        transpilePackages: ['@nextui-org/react'],
      },
};
export default nextConfig;
