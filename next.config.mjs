/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // todo: do we need it?
    domains: ["localhost", "res.cloudinary.com"],
  },
};

export default nextConfig;
