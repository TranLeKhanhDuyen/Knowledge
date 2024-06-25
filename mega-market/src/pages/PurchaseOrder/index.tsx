import { useEffect, useState } from 'react'
import './PurchaseOrder.css'
import { CartItem } from '@services'

interface Purchase {
  date: string
  items: CartItem[]
  total: string
}

const PurchaseOrderPage = () => {
  const [purchaseOrder, setPurchaseOrder] = useState<Purchase[]>([])

  useEffect(() => {
    const userData = localStorage.getItem('user') ?? ''
    const user = JSON.parse(userData)
    const history = JSON.parse(
      localStorage.getItem(`purchaseHistory_${user.userName as string}`) || '[]'
    )
    setPurchaseOrder(history)
  }, [])

  return (
    <section className='purchase-order-page'>
      <h1 className='title-page'>Purchase Orders</h1>
      {purchaseOrder.length > 0 ? (
        <div className='container purchase-order-container'>
          {purchaseOrder.map((purchase, index) => (
            <div key={index} className='purchase-order-item'>
              <p className='purchase-date'>
                Purchase Date: {new Date(purchase.date).toLocaleString()}
              </p>

              <ul className='purchase-header'>
                <li className='column-title'>Product</li>
                <li>Unit Price</li>
                <li>Quantity</li>
                <li>Amount of Money</li>
              </ul>

              <div>
                {purchase.items.length > 0 && (
                  <ul className='purchase-items'>
                    {purchase.items.map((item) => (
                      <li key={item.id} className='purchase-item'>
                        <figure key={item.id} className='purchase-product'>
                          <img
                            src={item.primaryImage}
                            alt={item.name}
                            className='purchase-product-image'
                          />
                          <figcaption className='purchase-product-name'>
                            {item.name}
                          </figcaption>
                        </figure>

                        <p key={item.id} className='purchase-data'>
                          ₹
                          {item.regular_price -
                            (item.regular_price * item.discount) / 100}
                        </p>

                        <p key={item.id} className='purchase-data'>
                          {item.quantity}
                        </p>

                        <p key={item.id} className='purchase-data'>
                          ₹
                          {(item.regular_price -
                            (item.regular_price * item.discount) / 100) *
                            item.quantity}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <p className='total-payment'>Total Payment: ₹{purchase.total}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className='no-orders'>No Purchase order available.</p>
      )}
    </section>
  )
}

export default PurchaseOrderPage
