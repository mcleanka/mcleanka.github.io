import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// output: 'export',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				pathname: '/**',
			}
		],
	},
	// basePath: process.env.NODE_ENV === 'production' ? '/my-profile' : '',
	// assetPrefix: process.env.NODE_ENV === 'production' ? '/my-profile' : '',
};

export default nextConfig;
