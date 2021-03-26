import HomePage from '@/components/HomePage'
import Header from '@/components/Header'
import styled from 'styled-components'
import PortfolioPage from '@/components/PortfolioPage'
import dynamic from 'next/dynamic'
const ContactPage = dynamic(() => import('@/components/ContactPage'))
const Footer = dynamic(() => import('@/components/Footer'))

const Layout = () => (
	<AppContainer>
		<ContentContainer>
			<BackgroundImg>
				<BackgroundBlur>
					<Header />
					<HomePage />
				</BackgroundBlur>
			</BackgroundImg>
			<PortfolioPage />
			<ContactPage />
			<Footer />
		</ContentContainer>
	</AppContainer>
)

export const AppContainer = styled.main`
	background: ${({ theme }) => theme.colors.background};
	width: 100%;
	min-height: 100vh;
`

export const ContentContainer = styled.div`
	max-width: 1380px;
	height: 100%;
	margin: 0 auto;
`

export const BackgroundImg = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url('/images/bg_home_.jpg');
	background-size: cover;
	background-position: center;
`

export const BackgroundBlur = styled.div`
	display: block;
	position: absolute;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(
		to right,
		rgba(255, 255, 255, 0.6) 0%,
		rgba(255, 255, 255, 0.5) 60%,
		rgba(255, 255, 255, 0.25) 100%
	);
`

export default Layout
