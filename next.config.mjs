/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // YouTube poster frames for the /videos gallery.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
