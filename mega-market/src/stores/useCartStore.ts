import { create } from 'zustand'
import { CartItem } from '@services'

interface CartState {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  updateCartItem: (id: number, quantity: number, isSelect?: boolean) => void
  removeFromCart: (id: number) => void
  loadCartFromLocalStorage: () => void
  clearCartOnLogout: () => void 
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingProductIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      )

      let updatedItems
      if (existingProductIndex >= 0) {
        updatedItems = state.cartItems.map((cartItem, index) =>
          index === existingProductIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      } else {
        updatedItems = [...state.cartItems, item]
      }

      saveCartToLocalStorage(updatedItems)
      return { cartItems: updatedItems }
    }),
  updateCartItem: (id, quantity, isSelect) =>
    set((state) => {
      const updatedItems = state.cartItems.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
              isSelect: isSelect ?? cartItem.isSelect
            }
          : cartItem
      )
      saveCartToLocalStorage(updatedItems)
      return { cartItems: updatedItems }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedItems = state.cartItems.filter((item) => item.id !== id)
      saveCartToLocalStorage(updatedItems)
      return { cartItems: updatedItems }
    }),
  loadCartFromLocalStorage: () =>
    set(() => {
      const userData = localStorage.getItem('user') ?? ''
      const user = JSON.parse(userData)
      const storedCartItems = JSON.parse(
        localStorage.getItem(`cart_${user?.userName}`) || '[]'
      )
      return { cartItems: storedCartItems }
    }),
  clearCartOnLogout: () =>
    set(() => {
      localStorage.removeItem('cart')
      return { cartItems: [] }
    })
}))

const saveCartToLocalStorage = (items: CartItem[]) => {
  const userData = localStorage.getItem('user') ?? ''
  const user = JSON.parse(userData)
  localStorage.setItem(`cart_${user?.userName}`, JSON.stringify(items))
}
