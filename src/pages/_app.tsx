/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Head>
				<title>Jeferson Lucas · Desenvolvedor Web Full Stack & Mobile</title>
				<meta name="description" content="Desenvolvedor Full Stack" />

				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="./favicon/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<Component {...pageProps}></Component>
		</>
	)
}

export default App
