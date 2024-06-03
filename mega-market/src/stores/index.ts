import create from 'zustand'
import { Category } from '@services'

interface AppState {
  categories: Category[]
  setCategories: (categories: Category[]) => void
}

export const useAppStore = create<AppState>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories })
}))
