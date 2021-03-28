import { DeepMap, FieldError } from 'react-hook-form'
import projects from '../store/projects'
import translationPL from '../translations/pl'
import translationEN from '../translations/en'
import { Dispatch, SetStateAction } from 'react'

export type InputProps = {
	errors: DeepMap<Record<string, any>, FieldError>
	register: Function
	required: boolean
}

export type Project = typeof projects[0]

export type ContextType = {
	language: string
	setLanguage: Dispatch<SetStateAction<string>>
	content: typeof translationPL | typeof translationEN
	projects: Project[]
}
