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
    ],
  },
};

export default nextConfig;
