import styled from 'styled-components'

const Burger = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<IconWrapper isOpen={isOpen}>
			{Array(3)
				.fill(1)
				.map((el, id) => {
					return <Line isOpen={isOpen} />
				})}
		</IconWrapper>
	)
}

export const IconWrapper = styled.div<{ isOpen: boolean }>`
	width: 1.5rem;
	height: 1.2rem;
	/* background-color: white; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
export const Line = styled.i<{ isOpen: boolean }>`
	display: block;
	border-radius: 2px;
	width: 100%;
	height: 0.2rem;
	transform: unset;
	background-color: ${({ theme, isOpen }) =>
		isOpen ? theme.colors.primary : theme.colors.dark};
	transition: all 0.4s;
	transform-origin: left;
	&:nth-of-type(2) {
		width: 60%;
		background-color: ${({ theme }) => theme.colors.primary};
		transform: ${({ isOpen }) =>
			isOpen ? 'scaleX(0)' : 'scaleX(1) translateX(50%)'};
	}
	&:first-of-type {
		transform: ${({ isOpen }) =>
			isOpen ? 'rotate(43deg) translate(1px, -2px)' : 'initial'};
	}
	&:last-of-type {
		transform: ${({ isOpen }) =>
			isOpen ? 'rotate(-43deg) translate(2px, 1px)' : 'initial'};
	}
`

export default Burger
