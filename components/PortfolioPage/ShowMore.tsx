import React, { useContext } from 'react'
import { MdExpandMore } from 'react-icons/md'
import styled from 'styled-components'
import { GlobalContext } from 'context'
import ClientOnly from '../shared/ClientOnly'

type ShowMoreProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ShowMore = ({ handleClick }: ShowMoreProps) => {
	const { content } = useContext(GlobalContext)
	return (
		<HorizontalLine>
			<ClientOnly>
				<ShowMoreBtn title={content?.portfolio?.showMore} onClick={handleClick}>
					<ExpandMoreIcon />
					<ExpandMoreIcon />
				</ShowMoreBtn>
			</ClientOnly>
		</HorizontalLine>
	)
}

export const HorizontalLine = styled.div`
	display: flex;
	align-items: center;
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
	@media only screen and (min-width: 400px) {
		width: 80%;
	}
`
export const ShowMoreBtn = styled.button`
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
