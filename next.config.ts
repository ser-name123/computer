import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: process.env.NODE_ENV === "development" ? ".next-cache" : ".next",
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
