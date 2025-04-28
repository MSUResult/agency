/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com', 'placehold.co'],
  },
};

export default nextConfig;