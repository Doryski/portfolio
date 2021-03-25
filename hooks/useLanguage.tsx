import { languageInit } from '@/helpers/utils'
import { useState } from 'react'
import useClientLayoutEffect from './useClientLayoutEffect'
import translationEN from '../translations/en'

type LangsType = { [key: string]: typeof translationEN }

export default function useLanguage(langs: LangsType) {
	const [language, setLanguage] = useState(languageInit)
	const [content, setContent] = useState(translationEN)

	useClientLayoutEffect(() => {
		setContent(langs[language])
	}, [language])
	return { language, setLanguage, content }
}
