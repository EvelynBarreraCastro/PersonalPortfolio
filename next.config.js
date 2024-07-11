/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
   images: { 
       unoptimized: true, 
    }, 
   //assetPrefix: process.env.ASSET_PREFIX,
    //basePath: process.env.BASE_PATH,
    basePath: '/PersonalPortfolio/out',
    assetPrefix: '/PersonalPortfolio/out/',
};
export default nextConfig;