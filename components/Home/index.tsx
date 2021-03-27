import React, { useContext } from 'react'
import { GlobalContext } from 'context'

import styled from 'styled-components'
import { Button } from '../shared/Button'
import { CONTACT_PATH, PORTFOLIO_PATH } from '../../helpers/utils'

const HomePage = () => {
	const { content } = useContext(GlobalContext)

	return (
		<ContentWrapper>
			<Name>Dominik Rycharski</Name>
			<Note>{content?.home?.note}</Note>
			<h3>Front End Developer</h3>
			<CtaWrapper>
				<CallToAction>
					<Link href={PORTFOLIO_PATH}>{content?.home?.cta?.portfolio}</Link>
				</CallToAction>
				<CallToAction>
					<Link href={CONTACT_PATH}>{content?.home?.cta?.contact}</Link>
				</CallToAction>
			</CtaWrapper>
		</ContentWrapper>
	)
}

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	@media only screen and (min-width: 900px) {
		align-items: start;
		width: 80%;
		margin: 0 auto;
		font-size: 125%;
	}
`
export const Name = styled.h4`
	color: #834600;
`

export const Note = styled.h2`
	margin: 1em 0;
	text-align: center;
	font-size: 1.7em;
`
export const CtaWrapper = styled.section`
	margin-top: 2em;
	display: flex;
	width: 80%;
	max-width: 500px;
	justify-content: space-between;
	@media only screen and (min-width: 400px) {
		justify-content: space-evenly;
	}
	@media only screen and (min-width: 450px) {
		width: 100%;
	}
	@media only screen and (min-width: 900px) {
		justify-content: left;
	}
`
export const CallToAction = styled(Button)`
	font-size: 0.9em;
	width: 120px;
	padding: 0;
	border-radius: 50px;
	&:last-of-type {
		background-color: rgba(255, 255, 255, 0.25);
		background-image: none;
		&:hover {
			background-color: rgba(255, 255, 255, 0.35);
		}
	}
	@media only screen and (min-width: 450px) {
		font-size: 1em;
		width: 150px;
	}
	@media only screen and (min-width: 900px) {
		width: 200px;
		&:last-of-type {
			margin-left: 2em;
			background-color: rgba(255, 255, 255, 0.1);
			&:hover {
				background-color: rgba(255, 255, 255, 0.2);
			}
		}
	}
`
export const Link = styled.a`
	display: block;
	padding: 0.7em 1em;
	width: 100%;
	height: 100%;
	@media only screen and (max-width: 450px) {
		padding: 0.7em;
	}
`
export default HomePage
