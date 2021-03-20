import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultTheme {
		colors: {
			primary: string
			secondary: string
			indigo: string
			light: string
			dark: string
			background: string
			cardBg: string
		}
		padding: {
			small: string
			medium: string
			large: string
			xl: string
			xxl: string
		}
		font: {
			thin: number
			regular: number
			bold: number
		}
		media: {
			mobile: string
			tablet: string
			900: string
			desktop: string
		}
		header: string
		footer: string
	}
}
