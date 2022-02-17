import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Head>
				<title>Jeferson Lucas</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="description" content="Desenvolvedor Full Stack" />
			</Head>
			<Component {...pageProps}></Component>
		</>
	)
}

export default App
