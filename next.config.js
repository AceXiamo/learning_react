/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axm.moe",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
