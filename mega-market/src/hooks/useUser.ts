import { User } from "@services"
import { createContext, useContext } from "react"

interface UserContextProps {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)


export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
