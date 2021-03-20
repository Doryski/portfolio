import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	// @ts-ignore
	static async getInitialProps(context) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = context.renderPage

		try {
			context.renderPage = () =>
				originalRenderPage({
					// @ts-ignore
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(context)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<div id='submitForm' />
					<NextScript />
				</body>
			</Html>
		)
	}
}
