import { UserContext } from 'contexts/User/UserContext'

import Loader from 'components/Loader'
import Error from 'components/Error'

import { User } from 'interfaces/User/types'
import useFetch from 'hooks/useFetch'

interface UserProviderProps {
	children: JSX.Element
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	const { data: user, error } = useFetch<User>('/api')

	if (error) return <Error />
	if (!user) return <Loader />
	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	)
}

export default UserProvider
