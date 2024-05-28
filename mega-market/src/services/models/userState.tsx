import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { User } from './user'

interface UserContextProps {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem('user')
    return userData ? JSON.parse(userData) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
