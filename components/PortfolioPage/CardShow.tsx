import React, { useContext } from 'react'
import { GlobalContext } from 'context'

import styled, { css } from 'styled-components'
import { Button } from '../shared/Button'
import { Project } from '../../types'

const CardShow = ({ project }: { project: Project }) => {
	const { content } = useContext(GlobalContext)

	return (
		<Wrapper>
			<List>
				<IntroButton
					as='a'
					href={project.demoUrl}
					target='_blank'
					rel='noopener noreferrer'
					colors={project.colors}>
					{content?.portfolio?.show?.showSite}
				</IntroButton>
				<IntroButton
					as='a'
					href={project.codeUrl}
					target='_blank'
					rel='noopener noreferrer'>
					{content?.portfolio?.show?.showCode}
				</IntroButton>
			</List>
		</Wrapper>
	)
}

export const Wrapper = styled.section`
	width: 100%;
	@media only screen and (max-width: 900px) {
		margin-top: 2em;
	}
`

export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	@media only screen and (min-width: 400px) {
		width: 90%;
		margin: 0 auto;
	}
	@media only screen and (min-width: 450px) {
		justify-content: space-evenly;
		margin: 0;
	}
	@media only screen and (min-width: 900px) {
		font-size: 0.8rem;
	}
`
type IntroButtonProps = {
	primary: string
	lighter: string
}

export const IntroButton = styled(Button)<{
	colors?: IntroButtonProps
}>`
	padding: 1.2em 1.5em;
	width: 130px;
	border-radius: 50px;
	${({ colors }) =>
		!!colors &&
		!!colors.lighter &&
		!!colors.primary &&
		css`
			&:first-of-type {
				background-image: linear-gradient(
					135deg,
					${colors.lighter} -20%,
					${colors.primary} 120%
				);
				&:hover {
					filter: brightness(0.96);
				}
			}
		`}
	@media only screen and (max-width: 1225px) {
		width: 100px;
		padding: 1em 1.2em;
	}
	@media only screen and (max-width: 900px) {
		padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
		border-radius: 20px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 0.9rem;
		width: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (max-width: 370px) {
		font-size: 0.85rem;
		width: 80px;
	}
`
export default CardShow
