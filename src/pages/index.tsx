import { NextPage } from 'next'

import UserProvider from 'contexts/User/UserProvider'

import { ThemeProvider } from 'styled-components'
import light from 'styles/themes/light'

import Layout from 'components/Layout'

const Home: NextPage = () => {
	return (
		<UserProvider>
			<ThemeProvider theme={light}>
				<Layout />
			</ThemeProvider>
		</UserProvider>
	)
}

export default Home
