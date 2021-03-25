import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import styled from 'styled-components'

const LangSwitch = () => {
	const { language, setLanguage } = useContext(GlobalContext)
	return (
		<StyledWrapper>
			{['EN', 'PL'].map((lang, index) => (
				<>
					<LangButton
						key={lang}
						onClick={() => {
							setLanguage(lang.toLowerCase())
						}}
						active={language === lang.toLowerCase()}>
						{lang}
					</LangButton>
					{index === 0 && <span style={{ margin: 'auto' }}>&nbsp;/&nbsp;</span>}
				</>
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
