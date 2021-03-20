import React from 'react'
import styled from 'styled-components'

const SectionName = ({ children }: { children: React.ReactNode }) => (
	<Title>
		{children}
		<Underline />
	</Title>
)

export const Title = styled.h1`
	text-align: center;
	padding: 2em;
	display: block;
	@media only screen and (max-width: 450px) {
		padding: 2em 0;
	}
	@media only screen and (max-width: 370px) {
		font-size: 1.6rem;
	}
`
export const Underline = styled.div`
	margin: 10px auto 0;
	width: 75px;
	height: 2px;
	border: none;
	background-image: linear-gradient(
		to right,
		${({ theme }) => theme.colors.secondary} -20%,
		${({ theme }) => theme.colors.primary} 50%,
		${({ theme }) => theme.colors.secondary} 120%
	);
`

export default SectionName
