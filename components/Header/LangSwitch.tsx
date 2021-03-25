import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import styled from 'styled-components'
import { LANGUAGES } from '@/helpers/utils'

const LangSwitch = () => {
	const { language, setLanguage } = useContext(GlobalContext)

	return (
		<StyledWrapper>
			{LANGUAGES.map((lang, index) => (
				<React.Fragment key={lang.name}>
					<LangButton
						title={lang.name}
						onClick={() => setLanguage(lang.abbr.toLowerCase())}
						active={language === lang.abbr.toLowerCase()}>
						{lang}
					</LangButton>
					{index === 0 && <span style={{ margin: 'auto' }}>&nbsp;/&nbsp;</span>}
				</React.Fragment>
			))}
		</StyledWrapper>
	)
}
export const StyledWrapper = styled.div`
	padding: 0 0 0 ${({ theme }) => theme.padding.medium};
	display: flex;
	@media only screen and (max-width: 900px) {
		padding: 0 ${({ theme }) => theme.padding.medium};
	}
`
export const LangButton = styled.button<{ active: boolean }>`
	color: ${({ active, theme }) => (active ? theme.colors.primary : 'inherit')};
	font-weight: bold;
	background: transparent;
	border: none;
	font-size: ${({ active }) => (active ? '.9rem' : '.875rem')};
	transition: all 0.4s ease;
`
export default LangSwitch
