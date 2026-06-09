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
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      }, 
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      }
    ],
  },
};

export default nextConfig;
