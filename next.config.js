/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push("pino-pretty", "lokijs", "encoding")
    return config
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "build1"
  },
}

module.exports = nextConfig
