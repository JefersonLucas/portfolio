import { User } from 'interfaces/User/types'

import useFetch from 'hooks/useFetch'

import { UserContext } from 'contexts/User/UserContext'

import Layout from 'components/Layout'

import { ThemeProvider } from 'styled-components'
import light from 'styles/themes/light'

export default function Home() {
	const { data: user, error } = useFetch<User>('http://localhost:3000/api')

	if (error) return <p>There is an error.</p>
	if (!user) return <div>Loading</div>
	return (
		<ThemeProvider theme={light}>
			<UserContext.Provider value={{ user }}>
				<Layout />
			</UserContext.Provider>
		</ThemeProvider>
	)
}
