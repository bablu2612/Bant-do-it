/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bant.org.uk", "meet.google.com"],
  },
  reactStrictMode: true,
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = nextConfig;
