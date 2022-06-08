/** @type {import('next').NextConfig} */

// const crypto = require('crypto');

// crypto.createHash('sha256').update('8719914851').digest('hex');

// const ContentSecurityPolicy = `
//   default-src 'self';
//   img-src 'self' https://*.googleapis.com https://*.gstatic.com *.google.com  *.googleusercontent.com data:;
//   script-src 'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com *.google.com https://*.ggpht.com *.googleusercontent.com;;
//   frame-src *.google.com;
//   style-src 'self' https://fonts.googleapis.com;
//   connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com  data: blob:;
//   font-src 'self' https://fonts.gstatic.com;
// `;

// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
//   },
// ];

const nextConfig = {
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
