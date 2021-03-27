import styled from 'styled-components'
import Menu from './Menu'
import LangSwitch from './LangSwitch'
import ClientOnly from '../shared/ClientOnly'
import Burger from '../shared/Burger'
import { useRef } from 'react'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import useDialogHandler from '@/hooks/useDialogHandler'
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick'

const Header = () => {
	const { isDesktop } = useDeviceDetect()
	const burgerRef = useRef<HTMLButtonElement>(null!)
	const menuRef = useRef<HTMLUListElement>(null!)
	const { isOpen, toggle, close } = useDialogHandler(false)
	useDetectOutsideClick([burgerRef, menuRef], close)

	const menuProps = { isOpen, menuRef, close }
	const burgerProps = { isOpen, burgerRef, toggle }

	return (
		<HeaderWrapper>
			<ClientOnly>
				{!isDesktop ? (
					<>
						<NavWrapper>
							<BurgerWrapper>
								<LangSwitch />
								<Burger {...burgerProps} />
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
	max-width: 1400px;
	width: 100%;
	height: ${({ theme }) => theme.header};
	z-index: 5;
`
export const NavWrapper = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 90%;
	height: 100%;
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

export const BurgerWrapper = styled.div`
	display: flex;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`

export default Header
