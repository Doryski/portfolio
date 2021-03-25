export const PORTFOLIO_PATH = '#portfolio'
export const CONTACT_PATH = '#contact'
export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
export const LANGUAGES = [
	{
		abbr: 'EN',
		name: 'English',
	},
	{ abbr: 'PL', name: 'Polski' },
]
export const isClient = typeof window !== 'undefined'
export const languageInit =
	isClient && window.navigator.language === 'pl' ? 'pl' : 'en'
