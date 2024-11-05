export default function imageLoader({ src }) {
	const isProd = process.env.NODE_ENV === 'production'
	const baseUrl = isProd ? '/my-profile' : ''

	if (src.startsWith('http')) {
		return src
	}

	return `${baseUrl}${src}`
}
