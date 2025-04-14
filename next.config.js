const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  transpilePackages: ["gsap"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  async redirects() {
    return [
      {
        source: "/ir/:path*",
        destination: "/news/ir/:path*",
        permanent: true, // 301リダイレクト（恒久的）
      },
      // 必要に応じて他のリダイレクトも追加
    ];
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
