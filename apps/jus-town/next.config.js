/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  // https://beta.nextjs.org/docs/api-reference/components/image#dangerouslyallowsvg-and-contentsecuritypolicy
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
      },
    ],
  },
};
