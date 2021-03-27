import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from 'context'
import { PORTFOLIO_PATH, CONTACT_PATH } from '../../helpers/utils'
import { MdPhotoLibrary, MdEmail } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import useDeviceDetect from '@/hooks/useDeviceDetect'

const Menu = ({
	close,
	menuRef,
	isOpen,
}: {
	close?: () => void
	menuRef?: React.RefObject<HTMLUListElement>
	isOpen?: boolean
}) => {
	const { content } = useContext(GlobalContext)
	const { isMobile, isDesktop } = useDeviceDetect()
	const MENU_DATA = [
		{ href: '#', title: content?.nav?.home, icon: <AiFillHome /> },
		{
			href: PORTFOLIO_PATH,
			title: content?.nav?.portfolio,
			icon: <MdPhotoLibrary />,
		},
		{
			href: CONTACT_PATH,
			title: content?.nav?.contact,
			icon: <MdEmail />,
		},
	]

	return (
		<MenuWrapper isOpen={isOpen}>
			<List ref={menuRef}>
				{MENU_DATA.map((link) => (
					<ListItem key={link.title}>
						<Link href={link.href} onClick={close}>
							<LinkContent>
								{((!isDesktop && !isMobile) || isMobile) && link.icon}
								<span>{link.title}</span>
							</LinkContent>
						</Link>
					</ListItem>
				))}
			</List>
		</MenuWrapper>
	)
}
export const MenuWrapper = styled.div<{ isOpen?: boolean }>`
	text-align: center;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	transform: ${({ isOpen }) =>
		isOpen ? 'translateY(0vh) scaleY(1)' : 'translateY(-10vh) scaleY(0)'};
	transform-origin: top;
	transition: all 0.4s ease-out;
	@media only screen and (min-width: 900px) {
		height: 100%;
		padding: 0 2em;
		visibility: initial;
		opacity: initial;
		transition: unset;
		transform: unset;
	}
`
export const List = styled.ul`
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	z-index: 5;
	background-color: rgba(255, 255, 255, 0.2);

	@media only screen and (min-width: 900px) {
		background: none;
		flex-direction: row;
		position: relative;
		height: 100%;
		max-height: initial;
	}
`
export const ListItem = styled.li<{ isOpen?: boolean }>`
	@media only screen and (max-width: 900px) {
		background-color: transparent;
		transition: background-color 0.3s, max-height 0.4s;
		&:hover {
			background-color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const Link = styled.a`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
export const LinkContent = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;

	padding: ${({ theme }) => theme.padding.medium} 0;
	margin: 0 auto;
	width: 100%;
	max-width: 110px;
	font-weight: 600;
	transition: color 0.4s;
	span {
		margin-left: 0.5em;
	}
	@media only screen and (min-width: 900px) {
		max-width: 150px;
		padding: 0 ${({ theme }) => theme.padding.xxl};
		span {
			margin: 0;
		}

		span:hover::before {
			transform: scaleX(1);
			transform-origin: left;
		}
		span {
			position: relative;

			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				background: ${({ theme }) => theme.colors.primary};
				transform: scaleX(0);
				transform-origin: right;
				transition: transform 0.4s ease-out;
				top: 21px;
			}
			&::after {
				content: '';
				visibility: hidden;
				opacity: 0;
			}
		}
	}
`

export default Menu
