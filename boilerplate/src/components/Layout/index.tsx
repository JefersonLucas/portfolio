import React from 'react'

import { Container } from './styles'

import Header from 'components/Header'
import Main from 'components/Main'
import Experience from 'components/Experience'

const Layout: React.FC = () => {
	return (
		<Container>
			<Header />
			<Main />
			<Experience />
		</Container>
	)
}

export default Layout
