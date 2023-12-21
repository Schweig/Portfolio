/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i0.wp.com',
          },
          {
            protocol: 'https',
            hostname: 'www.sotertechnologies.com'
          },
          {
            protocol: 'https',
            hostname: 'www.github.com'
          }
        ],
      },
}

module.exports = nextConfig
