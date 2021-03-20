const getDomain = () =>
	process.env.NODE_ENV === 'production'
		? process.env.NEXT_PUBLIC_NETLIFY_URL || ''
		: process.env.LOCAL_URL || ''
export default getDomain
