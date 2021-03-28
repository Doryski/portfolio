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
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
				<Head>
					{/* Global site tag (gtag.js) - Google Analytics */}
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=UA-162478780-1'></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag() {dataLayer.push(arguments);}
								gtag("js", new Date());
								gtag("config", "UA-162478780-1");`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<div id='submitForm' />
					<NextScript />
				</body>
			</Html>
		)
	}
}
