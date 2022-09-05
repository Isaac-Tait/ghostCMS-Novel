/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// setup for cloudinary photos
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

nextConfig;
