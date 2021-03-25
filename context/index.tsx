import React, { createContext } from 'react'
import { ContextType } from '../types'
import { languageInit } from '@/helpers/utils'
import useLanguage from '@/hooks/useLanguage'
import translationEN from '../translations/en'

const initialContext = {
	language: languageInit,
	content: translationEN,
	setLanguage: () => {},
	projects: [],
}

export const GlobalContext = createContext<ContextType>(initialContext)

const GlobalContextProvider = ({
	children,
	data,
}: {
	children: React.ReactNode
	data: any
}) => {
	const { pl, en, projects } = data
	const { language, setLanguage, content } = useLanguage({ en, pl })

	return (
		<GlobalContext.Provider
			value={{
				language,
				setLanguage,
				content,
				projects,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider
