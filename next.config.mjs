/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: (typeof process.env.BASE_PATH !== 'undefined' && !!((process.env.BASE_PATH+'').trim())) ? process.env.BASE_PATH : '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
