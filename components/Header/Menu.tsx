import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { GlobalContext } from 'context'
import { PORTFOLIO_PATH, CONTACT_PATH } from '@/helpers/utils'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import { MdPhotoLibrary, MdEmail } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

type MenuProps = {
	close?: () => void
	menuRef?: React.RefObject<HTMLUListElement>
	isOpen?: boolean
}

const Menu = ({ close, menuRef, isOpen }: MenuProps) => {
	const { content } = useContext(GlobalContext)
	const { isDesktop } = useDeviceDetect()
	const MENU_DATA = useMemo(
		() => [
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
		],
		[content]
	)

	return (
		<MenuWrapper isOpen={isOpen}>
			<List ref={menuRef}>
				{MENU_DATA.map(link => (
					<ListItem key={link.title}>
						<Link href={link.href} onClick={close}>
							<LinkContent>
								{!isDesktop && link.icon}
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
	transition: all 0.4s ease-out;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	transform: ${({ isOpen }) =>
		isOpen ? 'translateY(0vh) scaleY(1)' : 'translateY(-10vh) scaleY(0)'};
	transform-origin: top;
	@media only screen and (min-width: 900px) {
		height: 100%;
		padding: 0 2em;
		transition: unset;
		transform: unset;
		visibility: initial;
		opacity: initial;
	}
`
export const List = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: absolute;
	z-index: 5;
	background-color: rgba(255, 255, 255, 0.2);

	@media only screen and (min-width: 900px) {
		flex-direction: row;
		position: relative;
		background: none;
		max-height: initial;
		height: 100%;
	}
`
export const ListItem = styled.li<{ isOpen?: boolean }>`
	@media only screen and (max-width: 900px) {
		background-color: transparent;
		transition: background-color 0.3s;
		&:hover {
			background-color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const Link = styled.a`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	width: 100%;
`
export const LinkContent = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	max-width: 110px;
	padding: ${({ theme }) => theme.padding.medium} 0;
	margin: 0 auto;
	text-align: center;
	font-weight: 600;
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
				top: 20px;
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
