/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['http://127.0.0.1:5000/']
  },
  "ssr": true,
}

module.exports = nextConfig
