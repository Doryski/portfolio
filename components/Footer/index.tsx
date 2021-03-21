import React, { useContext } from 'react'
import styled from 'styled-components'
import { DiGithubBadge } from 'react-icons/di'
import { GlobalContext } from 'context'

const Footer = () => {
	const { content } = useContext(GlobalContext)
	return (
		<Wrapper>
			<Content>
				{content?.footer?.createdBy}

				<GitHubLinks href='https://github.com/Doryski' title='Github'>
					<span>
						<DiGithubBadge />
					</span>
					Doryski
				</GitHubLinks>
			</Content>
		</Wrapper>
	)
}

export const GitHubLinks = styled.a`
	display: flex;
	margin-left: 0.25em;
	padding-left: 0.05em;
	padding-right: 0.25em;
	align-items: center;
	background-color: transparent;
	transition: background-color 0.3s;
	border-radius: 2px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`
export const Wrapper = styled.footer`
	height: ${({ theme }) => theme.footer};
	margin-top: 3em;
`

export const Content = styled.section`
	width: 90%;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 0.9rem;
	@media only screen and (min-width: 400px) {
		font-size: 1rem;
		width: 80%;
	}
`
export default Footer
