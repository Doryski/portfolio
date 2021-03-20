import React from 'react'
import ThemeStyleProvider from '@/theme/ThemeStyleProvider'
import { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import GlobalContextProvider from 'context'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<React.StrictMode>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NextSeo
				title='Dominik Rycharski | Portfolio'
				description='Professional website of Dominik Rycharski, programmer, front end developer, aspiring fullstack developer'
			/>
			<GlobalContextProvider>
				<ThemeStyleProvider>
					<Component {...pageProps} />
				</ThemeStyleProvider>
			</GlobalContextProvider>
		</React.StrictMode>
	)
}

export default App
