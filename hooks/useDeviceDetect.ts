import { useState, useEffect, useRef } from 'react'
import getWindowWidth from '../helpers/getWindowWidth'

export default function useDeviceDetect(
	mobileBreakpoint: number = 760,
	desktopBreakpoint: number = 900
) {
	const isMobileWidth = () => getWindowWidth() <= mobileBreakpoint
	const isDesktopWidth = () => getWindowWidth() >= desktopBreakpoint

	const [isMobile, setIsMobile] = useState(isMobileWidth())
	const [isDesktop, setIsDesktop] = useState(isDesktopWidth())
	const resizeListener = useRef(() => {})

	resizeListener.current = () => {
		if (typeof window !== 'undefined') {
			setIsMobile(isMobileWidth())
			setIsDesktop(isDesktopWidth())
		}
	}
	useEffect(() => {
		window.addEventListener('resize', resizeListener.current)

		return () => {
			window.removeEventListener('resize', resizeListener.current)
		}
	}, [])
	return { isMobile, isDesktop }
}
