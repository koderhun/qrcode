/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pages/Home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
