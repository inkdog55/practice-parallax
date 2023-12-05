/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const repository = "practice-parallax";

const nextConfig = {
  assetPrefix: isProduction ? `/${repository}/` : "", // production 일때 prefix 경로
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
