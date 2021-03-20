import { ThemeProvider } from 'styled-components'
import theme from '@/theme/index'
import GlobalStyle from '@/theme/GlobalStyle'
import { IconContext } from 'react-icons'

const ThemeStyleProvider = ({ children }: { children: React.ReactNode }) => (
	<IconContext.Provider
		value={{
			size: '1.5rem',
			className: 'react-icons',
		}}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	</IconContext.Provider>
)

export default ThemeStyleProvider
