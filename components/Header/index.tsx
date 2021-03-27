import { useRef } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import LangSwitch from './LangSwitch'
import useDialogHandler from '../../hooks/useDialogHandler'
import useHandleMobileMenu from '../../hooks/useHandleMobileMenu'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import ClientOnly from '../shared/ClientOnly'
import Burger from '../shared/Burger'

const Header = () => {
	const { isMobile, isDesktop } = useDeviceDetect()
	const burgerRef = useRef<HTMLButtonElement>(null!)
	const menuRef = useRef<HTMLUListElement>(null!)
	const { isOpen, toggle, close } = useDialogHandler(false)
	useHandleMobileMenu([burgerRef, menuRef], close)
	const isTablet = !isMobile && !isDesktop
	const menuProps = { isOpen, menuRef, close }

	return (
		<HeaderWrapper>
			<ClientOnly>
				{isTablet || isMobile ? (
					<>
						<NavWrapper>
							<BurgerWrapper>
								<LangSwitch />
								<Button
									ref={burgerRef}
									type='button'
									aria-label='Toggle navigation'
									onClick={toggle}>
									<Burger isOpen={isOpen} />
								</Button>
							</BurgerWrapper>
						</NavWrapper>
						<Menu {...menuProps} />
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

export default Header
