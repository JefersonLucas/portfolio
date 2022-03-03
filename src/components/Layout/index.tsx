import React from 'react'

import { Container } from './styles'

import Header from 'components/Header'
import Main from 'components/Main'
import About from 'components/About'
import Experience from 'components/Experience'
import Formation from 'components/Formation'
import Contact from 'components/Contact'

const Layout: React.FC = () => {
	return (
		<Container>
			<Header />
			<Main />
			<About />
			<Experience />
			<Formation />
			<Contact />
		</Container>
	)
}

export default Layout
