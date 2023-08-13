/** @type {import('next').NextConfig} */
const path = require('path');
const dotenv = require('dotenv');

if (process.env.NODE_ENV == 'production') {
  isProd = true;
  dotenv.config({ path: path.join(process.env.PWD, 'envs', '.env.production') });
} else if (process.env.NODE_ENV == 'stage') {
  dotenv.config({ path: path.join(process.env.PWD, 'envs', '.env.stage') });
} else {
  dotenv.config({ path: path.join(process.env.PWD, 'envs', '.env.development') });
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['image.tmdb.org'] },
  sassOptions: {
    prependData: `@import "styles/mixins.scss";`
  }
};

module.exports = nextConfig;
