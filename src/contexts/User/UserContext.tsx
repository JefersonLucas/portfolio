import { createContext } from 'react'

import { User } from 'interfaces/User/types'

type UserContextType = {
	user: User | null
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const UserContext = createContext<UserContextType>(null!)
