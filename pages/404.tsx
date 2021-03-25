import Center from '@/components/shared/Center'
import devlog from '@/debug/devlog'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function NotFound() {
	const router = useRouter()
	useEffect(() => {
		router.push('/')
		devlog(router)
	}, [])
	return <Center height='100vh'>Redirecting...</Center>
}
