import { LANGUAGES } from './utils'

const isLanguageIndicator = (path: string) =>
	LANGUAGES.find((el) => path.includes(el.toLowerCase()))?.toLowerCase()
export default isLanguageIndicator
