import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // white listing images from external website
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },

      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

export default nextConfig;
