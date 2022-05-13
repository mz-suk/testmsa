module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: 'akamai',
      path: '/',
    },
  }
  return nextConfig
}
