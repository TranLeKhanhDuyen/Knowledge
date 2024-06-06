import create from 'zustand'

interface UserState {
  user: { userName: string; email: string; password: string } | null
  setUser: (user: { userName: string; email: string; password: string }) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}))
