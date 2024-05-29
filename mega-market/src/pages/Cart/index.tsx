import { useEffect, useState } from 'react'
import { MainLayout } from '@layout'
import { CartItem } from '@services'
import { Button, ButtonIcon, QuantitySelector } from '@components'
import './Cart.css'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])
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
    return selectedItems.reduce((total, index) => {
      const item = cartItems[index]
      const discountedPrice =
        item.regular_price - (item.regular_price * item.discount) / 100
      return total + calculatePrice(discountedPrice, item.quantity)
    }, 0)
  }

  const handleSelectChange = (index: number) => {
    const newSelectedItems = [...selectedItems]
    const selectedIndex = newSelectedItems.indexOf(index)
    if (selectedIndex > -1) {
      newSelectedItems.splice(selectedIndex, 1)
    } else {
      newSelectedItems.push(index)
    }
    setSelectedItems(newSelectedItems)
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      const allIndexes = cartItems.map((_, index) => index)
      setSelectedItems(allIndexes)
    }
    setSelectAll((prev) => !prev)
  }

  const handleDeleteItem = (index: number) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this item?'
    )
    if (!confirmDelete) return
    const newCartItems = cartItems.filter((_, i) => i !== index)
    setCartItems(newCartItems)
    localStorage.setItem('cart', JSON.stringify(newCartItems))
  }

  const handleDeleteSelectedItems = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete selected items?'
    )
    if (!confirmDelete) return
    const newCartItems = cartItems.filter(
      (_, index) => !selectedItems.includes(index)
    )
    setCartItems(newCartItems)
    localStorage.setItem('cart', JSON.stringify(newCartItems))
    setSelectedItems([])
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
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectChange(index)}
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
                    {calculatePrice(
                      item.regular_price -
                        (item.regular_price * item.discount) / 100,
                      item.quantity
                    )}
                  </p>

                  <ButtonIcon
                    icon='trash'
                    className='cart-item-delete'
                    onClick={() => handleDeleteItem(index)}
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
              Select ({selectedItems.length}/{cartItems.length})
            </span>
          </li>
          <li onClick={handleDeleteSelectedItems}>Delete </li>
          <li>Total payment: {calculateTotal()}</li>
          <li>
            <Button additionalClass='secondary' label='Checkout' />
          </li>
        </ul>

      </section>
    </MainLayout>
  )
}

export default CartPage
