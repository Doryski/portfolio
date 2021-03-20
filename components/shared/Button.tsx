import styled from 'styled-components'

export const Button = styled.button`
	color: ${({ theme }) => theme.colors.dark};
	font-weight: ${({ theme }) => theme.font.bold};
	text-align: center;
	padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
	border: none;
	background-image: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.secondary} -20%,
		${({ theme }) => theme.colors.primary} 120%
	);
	box-shadow: 0 11px 36px 0 rgba(70, 89, 138, 0.25);
	transition: all 0.3s;
	&:hover {
		filter: brightness(1.04);
	}
`
