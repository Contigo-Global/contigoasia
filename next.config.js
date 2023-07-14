/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ["app","components", "utils", "lib", "sections"]
  }
}
