// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make sure Turbopack uses your project folder as the workspace root
  turbopack: {
    // Use an absolute path so Turbopack doesn't infer the wrong root
    root: path.resolve(__dirname),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // allow YouTube thumbnails
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "another-example.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;


