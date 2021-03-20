import React, { useRef } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import LangSwitch from './LangSwitch'
import { MdMenu, MdClose } from 'react-icons/md'
import useDialogHandler from '../../hooks/useDialogHandler'
import useHandleMobileMenu from '../../hooks/useHandleMobileMenu'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import ClientOnly from '../shared/ClientOnly'

const Header = () => {
	const { isMobile, isDesktop } = useDeviceDetect()
	const burgerRef = useRef<HTMLButtonElement>(null!)
	const menuRef = useRef<HTMLUListElement>(null!)
	const { isDialogOpen: isNavOpen, toggle, close } = useDialogHandler(false)
	useHandleMobileMenu([burgerRef, menuRef], close)
	return (
		<HeaderWrapper>
			<ClientOnly>
				{(!isMobile && !isDesktop) || isMobile ? (
					<>
						<NavWrapper>
							<BurgerWrapper>
								<LangSwitch />
								<Button
									ref={burgerRef}
									type='button'
									aria-label='Toggle navigation'
									onClick={toggle}>
									<MenuIcon isNavOpen={isNavOpen} />
								</Button>
							</BurgerWrapper>
						</NavWrapper>
						{isNavOpen && <Menu menuRef={menuRef} close={close} />}
					</>
				) : (
					<NavWrapper>
						<MenuWrapper>
							<Menu />
							<LangSwitch />
						</MenuWrapper>
					</NavWrapper>
				)}
			</ClientOnly>
		</HeaderWrapper>
	)
}
export const HeaderWrapper = styled.header`
	height: ${({ theme }) => theme.header};
	width: 100%;
	max-width: 1400px;
	z-index: 5;
`
export const NavWrapper = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	width: 90%;
	margin: 0 auto;
	@media only screen and (min-width: 400px) {
		width: 80%;
	}
`
export const MenuWrapper = styled.section`
	display: flex;
	align-items: center;
	height: 100%;
`
export const Button = styled.button`
	border: none;
	background: transparent;
	display: flex;
`
export const BurgerWrapper = styled.div`
	display: flex;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`
export const MenuIcon = styled(
	({ isNavOpen, ...props }: { isNavOpen: boolean }) =>
		isNavOpen ? <MdClose {...props} /> : <MdMenu {...props} />
)`
	width: 1.8rem;
	height: 1.8rem;
`

export default Header
