import React, { useState, createContext, useEffect } from 'react'
import { ContextType } from '../types'
import { useRouter } from 'next/dist/client/router'
import getDomain from '@/helpers/getDomain'
import isLanguageIndicator from '@/helpers/isLanguageIndicator'

const languageInit =
	typeof window !== 'undefined' && window.navigator.language === 'pl'
		? 'pl'
		: 'en'

const initialContext = {
	language: languageInit,
	content: {},
}
// @ts-ignore
export const GlobalContext = createContext<ContextType>(initialContext)

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [language, setLanguage] = useState(languageInit)
	const [content, setContent] = useState({})
	const router = useRouter()

	useEffect(() => {
		async function getContent(url: string) {
			const res = await fetch(url)
			const {
				content,
				language: lang,
			}: { language: string; content: any } = await res.json()
			setLanguage(lang.toLowerCase())
			setContent(content)
		}
		if (isLanguageIndicator(router.asPath)) {
			getContent(getDomain() + '/api' + router.asPath)
		} else {
			getContent(getDomain() + '/api/' + language)
		}
	}, [router.asPath])

	return (
		<GlobalContext.Provider
			value={{
				language,
				// @ts-ignore
				content,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider
