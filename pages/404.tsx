import Center from '@/components/shared/Center'
import devlog from '@/debug/devlog'
import isLanguageIndicator from '@/helpers/isLanguageIndicator'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function NotFound() {
	const router = useRouter()
	useEffect(() => {
		router.push(
			'/',
			isLanguageIndicator(router.pathname)
				? '/' + isLanguageIndicator(router.pathname)
				: '/'
		)
		devlog(router)
	}, [])
	return <Center height='100vh'>Redirecting...</Center>
}
