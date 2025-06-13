/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
   basePath: '/bhanuteja3264.github.io',
  assetPrefix: '/bhanuteja3264.github.io',
}

export default nextConfig