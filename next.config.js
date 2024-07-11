/** @type {import('next').NextConfig} */
//const nextConfig = {
  //  output: 'export', 
   // images: { 
   //     unoptimized: true, 
    //}, 
   // assetPrefix: process.env.ASSET_PREFIX,
   // basePath: process.env.BASE_PATH,
//};
//export default nextConfig;

const nextConfig = {
    // Specify the directory where Next.js will output the build files
    // It should match with the URL path you want to deploy to on GitHub Pages
    output: 'out',
  
    // Configure images options
    images: {
      unoptimized: true,
    },
  
    // Set assetPrefix based on environment variable
    assetPrefix: process.env.ASSET_PREFIX || '',
  
    // Set basePath based on environment variable
    basePath: process.env.BASE_PATH || '',
  };
  
  module.exports = nextConfig;