import React from 'react'
import { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import ThemeStyleProvider from '@/theme/ThemeStyleProvider'

const App = ({ Component, pageProps }: AppProps) => (
	<React.StrictMode>
		<Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<NextSeo
			title='Dominik Rycharski | Portfolio'
			description='Professional website of Dominik Rycharski, programmer, front end developer, aspiring fullstack developer'
		/>
		<ThemeStyleProvider>
			<Component {...pageProps} />
		</ThemeStyleProvider>
	</React.StrictMode>
)

export default App
