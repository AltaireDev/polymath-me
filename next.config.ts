import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
