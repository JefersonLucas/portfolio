import React from 'react'

import { Container } from './styles'

import Header from 'components/Header'
import Main from 'components/Main'

const Layout: React.FC = () => {
	return (
		<Container>
			<Header />
			<Main />
		</Container>
	)
}

export default Layout
