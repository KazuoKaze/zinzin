// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   typescript: {
// //     // 👇 This is what disables type checking at build
// //     ignoreBuildErrors: true,
// //   },
// //   /* config options here */
// // };

// // export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     domains: [
//       "i.postimg.cc",
//       "cdn.prod.website-files.com",
//       "images.unsplash.com",
//       "composite-tech.com",
//       "127.0.0.1",
//       "gfrp-india.onrender.com",
//       "payload-back.onrender.com",
//       "cdn.prod.website-files.com",
//     ],
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://stumblemarket-dev-production.up.railway.app",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_API_BASE_URL ||
          "https://stumblemarket-dev-production.up.railway.app"
        }/auth/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

