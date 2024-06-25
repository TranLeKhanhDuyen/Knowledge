import {
  useState,
  useEffect,
  ReactNode
} from 'react'
import { User } from './user'
import { UserContext } from '@hooks/useUser'

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
