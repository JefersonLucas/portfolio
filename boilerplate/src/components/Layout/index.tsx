import React, { useContext } from 'react'

import { Container } from './styles'

import { UserContext } from 'contexts/User/UserContext'

const Layout: React.FC = () => {
	const data = useContext(UserContext)

	return (
		<Container>
			<p>{data.user?.basic_info.name}</p>
		</Container>
	)
}

export default Layout
