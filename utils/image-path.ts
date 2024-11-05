export const getImagePath = (src: string) => {
	const isProd = process.env.NODE_ENV === 'production';
	const baseUrl = isProd ? '/my-profile' : '';

	if (src.startsWith('http')) {
		return src;
	}

	const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
	return `${baseUrl}${normalizedSrc}`;
};
