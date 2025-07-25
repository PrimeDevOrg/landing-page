import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['gsap'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
}

export default nextConfig
