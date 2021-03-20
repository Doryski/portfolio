import devlog from '@/debug/devlog'
import React, { useContext, useEffect, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import styled from 'styled-components'
import { GlobalContext } from '../../context'
import getWindowWidth from '../../helpers/getWindowWidth'
import ClientOnly from '../shared/ClientOnly'

type ShowMoreProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ShowMore = ({ handleClick }: ShowMoreProps) => {
	const { content } = useContext(GlobalContext)
	const [windowWidth, setWindowWidth] = useState<number | false>(() =>
		getWindowWidth()
	)
	useEffect(() => {
		setWindowWidth(getWindowWidth())
	}, [])

	devlog(windowWidth)
	return (
		<HorizontalLine>
			<ClientOnly>
				<ShowMoreBtn
					windowWidth={windowWidth}
					title={content.portfolio.showMore}
					onClick={handleClick}>
					<ExpandMoreIcon />
					<ExpandMoreIcon />
				</ShowMoreBtn>
			</ClientOnly>
		</HorizontalLine>
	)
}

export const HorizontalLine = styled.div`
	height: 0;
	width: 90%;
	margin: 70px auto 0;
	height: 2px;
	border: none;
	background-image: linear-gradient(
		to right,
		${({ theme }) => theme.colors.secondary} -20%,
		${({ theme }) => theme.colors.primary} 50%,
		${({ theme }) => theme.colors.secondary} 120%
	);
	position: relative;
	@media only screen and (min-width: 400px) {
		width: 80%;
	}
`
export const ShowMoreBtn = styled.button<{ windowWidth: number | false }>`
	display: flex;
	flex-direction: column;
	background: none;
	border: none;
	margin: 0 auto;
	background: white;
	border-radius: 50%;
	width: 53px;
	align-items: center;
	border: 2px solid #f4b266;
	position: absolute;
	top: -25px;
	left: ${({ windowWidth }) =>
		((4 / 5) * (windowWidth || 0)) / 2 - 53 - 26.5}px;
	cursor: pointer;
`
export const ExpandMoreIcon = styled(MdExpandMore)`
	width: 2.5rem;
	height: 2.5rem;
	color: #834600;
	&:last-of-type {
		margin-top: -31px;
	}
`
export default ShowMore
