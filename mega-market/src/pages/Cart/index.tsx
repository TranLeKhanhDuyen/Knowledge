import { useEffect, useState } from 'react'
import { MainLayout } from '@layout'
import { CartItem } from '@services'
import { Button, ButtonIcon, QuantitySelector } from '@components'
import './Cart.css'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [selectAll, setSelectAll] = useState<boolean>(false)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  const calculatePrice = (price: number, quantity: number) => {
    return price * quantity
  }

  const handleQuantityChange = (index: number, delta: number) => {
    const newCartItems = [...cartItems]
    newCartItems[index].quantity += delta
    if (newCartItems[index].quantity < 1) {
      newCartItems[index].quantity = 1
    }
    setCartItems(newCartItems)
  }

  const calculateTotal = () => {
    // return selectedItems.reduce((total, index) => {
    //   const item = cartItems[index]
    //   const discountedPrice =
    //     item.regular_price - (item.regular_price * item.discount) / 100
    //   return total + calculatePrice(discountedPrice, item.quantity)
    // }, 0)
  }

  const handleSelectChange = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (!item) return
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, isSelect: !item.isSelect }
      }
      return item
    })
    setCartItems(newCartItems)
    // Update all selected state
    const allSelected = newCartItems.every((item) => item.isSelect)
    setSelectAll(allSelected)
    // calculate selected items

  }

  const handleSelectAll = () => {
    const allSelected = cartItems.every((item) => item.isSelect)
    const newCartItems = cartItems.map((item) => {
      return { ...item, isSelect: !allSelected }
    })
    setCartItems(newCartItems)
    setSelectAll(!allSelected)
  }

  const handleDeleteItem = (id: number) => {
    console.log("id cart", id);
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this item?'
    )
    if (!confirmDelete) return
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(newCartItems)
    localStorage.setItem('cart', JSON.stringify(newCartItems))
  }

  const handleDeleteSelectedItems = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete selected items?'
    )
    if (!confirmDelete) return
    // const newCartItems =  cartItems.filter((_, index) => !selectedItems.includes(index))
    // setCartItems(newCartItems)
    // localStorage.setItem('cart', JSON.stringify(newCartItems))
    // setSelectedItems([])
  }

  return (
    <MainLayout>
      <section className='cart-page'>
        <ul className='container cart-header'>
          <li className='cart-header-title'>Choose</li>
          <li>Product</li>
          <li>Product Name</li>
          <li className='cart-header-title'>Unit price</li>
          <li className='cart-header-title'>Quantity</li>
          <li className='cart-header-title'>Amount of money</li>
          <li>Actions</li>
        </ul>
        <article className='container cart-container'>
          {cartItems.length > 0 ? (
            <ul className='cart-items'>
              {cartItems.map((item, index) => (
                <li key={index} className='cart-item'>
                  <input
                    type='checkbox'
                    checked={item.isSelect}
                    onChange={() => handleSelectChange(item.id)}
                  />
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className='cart-item-image'
                  />
                  <h2>{item.name}</h2>

                  <p className='cart-item-unit-price'>
                    <span className='regular-unit-price'>
                      ₹{item.regular_price}
                    </span>
                    <span>
                      ₹
                      {item.regular_price -
                        (item.regular_price * item.discount) / 100}
                    </span>
                  </p>

                  <QuantitySelector
                    quantity={item.quantity}
                    onIncrease={() => handleQuantityChange(index, 1)}
                    onDecrease={() => handleQuantityChange(index, -1)}
                    additionalClass='cart-item-quantity-selector'
                  />

                  <p className='amount-of-money'>
                    ₹
                   {parseFloat(
                      calculatePrice(
                        item.regular_price -
                          (item.regular_price * item.discount) / 100,
                        item.quantity
                      ).toFixed(2)
                    )}

                  </p>

                  <ButtonIcon
                    icon='trash'
                    className='cart-item-delete'
                    onClick={() => handleDeleteItem(item.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart</p>
          )}
        </article>

        <ul className='container checkout'>
          <li className='select-all' onClick={handleSelectAll}>
            <input type='checkbox' checked={selectAll} readOnly />
            <span>
              Select ({cartItems.filter((item) => item.isSelect).length}/ {cartItems.length})
            </span>
          </li>
          <li onClick={handleDeleteSelectedItems}>Delete </li>
          <li>Total payment : ₹ 
            {cartItems.reduce((total, item) => {
              if (item.isSelect) {
                const discountedPrice = item.regular_price - (item.regular_price * item.discount) / 100
                const price = (total + calculatePrice(discountedPrice, item.quantity)).toFixed(2)
                return parseFloat(price)
              }
              return  parseFloat(total.toFixed(2))
            }
              , 0)}
          </li>
          <li>
            <Button additionalClass='secondary' label='Checkout' />
          </li>
        </ul>

      </section>
    </MainLayout>
  )
}

export default CartPage