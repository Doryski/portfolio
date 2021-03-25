import { contentInit, languageInit } from '@/helpers/utils'
import { useState } from 'react'
import useClientLayoutEffect from './useClientLayoutEffect'

type LangsType = { [key: string]: typeof contentInit }

export default function useLanguage(langs: LangsType) {
	const [language, setLanguage] = useState(languageInit)
	const [content, setContent] = useState(contentInit)

	useClientLayoutEffect(() => {
		setContent(langs[language])
	}, [language])
	return { language, setLanguage, content }
}
