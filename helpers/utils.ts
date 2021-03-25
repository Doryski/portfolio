export const PORTFOLIO_PATH = '#portfolio'
export const CONTACT_PATH = '#contact'
export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
export const FORMSPREE_LINK = 'https://formspree.io/xvorpadg'
export const LANGUAGES = ['EN', 'PL']
export const languageInit =
	typeof window !== 'undefined' && window.navigator.language === 'pl'
		? 'pl'
		: 'en'

export const contentInit = {
	nav: {
		home: '',
		portfolio: '',
		contact: '',
	},
	home: {
		note: '',
		specialty: '',
		cta: {
			portfolio: '',
			contact: '',
		},
	},
	portfolio: {
		sectionName: '',
		show: {
			showSite: '',
			showCode: '',
		},
		showMore: '',
	},
	contact: {
		sectionName: '',
		name: '',
		email: '',
		message: '',
		errors: {
			name: '',
			email: '',
			emailPattern: '',
			message: '',
		},
		submit: '',
		sending: '',
		success: '',
		failure: '',
	},
	footer: {
		createdBy: '',
	},
}
