/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["miro.medium.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.thala.dev/faucet",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
