import type { NextConfig } from "next";
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  i18n,
  images: {
    domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
