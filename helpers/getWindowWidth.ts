const getWindowWidth = () =>
	(typeof window !== 'undefined' && window.innerWidth) ||
	(typeof document !== 'undefined' &&
		(document.documentElement.clientWidth || document.body.clientWidth))

export default getWindowWidth
