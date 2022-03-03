import { User } from 'interfaces/User/types'

import useFetch from 'hooks/useFetch'

import { UserContext } from 'contexts/User/UserContext'

import Layout from 'components/Layout'
import Loader from 'components/Loader'
import Error from 'components/Error'

import { ThemeProvider } from 'styled-components'
import light from 'styles/themes/light'

export default function Home() {
	const { data: user, error } = useFetch<User>(process.env.NEXT_PUBLIC_API_URL)

	if (error) return <Error />
	if (!user) return <Loader />
	return (
		<ThemeProvider theme={light}>
			<UserContext.Provider value={{ user }}>
				<Layout />
			</UserContext.Provider>
		</ThemeProvider>
	)
}
