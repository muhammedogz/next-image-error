/**
 * @type {import('next').NextConfig}
 **/

const config = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
  reactStrictMode: false,
};

module.exports = config;
