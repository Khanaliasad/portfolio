/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     port: " ",
    //     pathname: "/images/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
