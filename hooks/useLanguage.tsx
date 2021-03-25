import { contentInit, languageInit } from '@/helpers/utils'
import { useEffect, useState } from 'react'

type LangsType = { [key: string]: typeof contentInit }

export default function useLanguage(langs: LangsType) {
	const [language, setLanguage] = useState(languageInit)
	const [content, setContent] = useState(contentInit)

	useEffect(() => {
		setContent(langs[language])
	}, [language])
	return { language, setLanguage, content }
}
