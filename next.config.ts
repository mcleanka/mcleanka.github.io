import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		loader: 'custom',
		loaderFile: './app/image-loader.js',
	},
	basePath: process.env.NODE_ENV === 'production' ? '/my-profile' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/my-profile' : '',
};

export default nextConfig;
