import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import styled from 'styled-components'
import { LANGUAGES } from '@/helpers/utils'

const LangSwitch = () => {
	const { language, setLanguage } = useContext(GlobalContext)

	return (
		<StyledWrapper>
			{LANGUAGES.map(({ abbr, name }, index, arr) => (
				<React.Fragment key={name}>
					<LangButton
						title={name}
						onClick={() => setLanguage(abbr.toLowerCase())}
						active={language === abbr.toLowerCase()}>
						{abbr}
					</LangButton>
					{index !== arr.length - 1 && (
						<span style={{ margin: 'auto' }}>&nbsp;/&nbsp;</span>
					)}
				</React.Fragment>
			))}
		</StyledWrapper>
	)
}
export const StyledWrapper = styled.div`
	padding-left: ${({ theme }) => theme.padding.medium};
	display: flex;
	@media only screen and (max-width: 900px) {
		padding: 0 ${({ theme }) => theme.padding.medium};
	}
`
export const LangButton = styled.button<{ active: boolean }>`
	color: ${({ active, theme }) => (active ? theme.colors.primary : 'inherit')};
	font-weight: bold;
	background-color: transparent;
	border: none;
	font-size: ${({ active }) => (active ? '.9rem' : '.875rem')};
	transition: all 0.4s ease;
`
export default LangSwitch
