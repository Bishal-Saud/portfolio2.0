/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL,
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "aceternity.com"],
  },
};

export default nextConfig;
