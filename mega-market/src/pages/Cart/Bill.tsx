import { Button } from '@components'
import { CartItem } from '@services'
import { calculateTotalBill } from '@utils/price'

interface BillProps {
  selectedItems: CartItem[]
  totalPayment: number
  onClose: () => void
  onBuyNow: () => void
}

const Bill: React.FC<BillProps> = ({
  selectedItems,
  totalPayment,
  onClose,
  onBuyNow
}) => (
  <section className='bill-container'>
    <article className='bill-wrapper'>
      <h2 className='title-page'>Bill Details</h2>
      <ul className='bill-list'>
        {selectedItems.map((item) => (
          <li key={item.id} className='bill-details'>
            <p className='bill-content'>
              <span className='bill-title'>Product name: </span>
              <span>{item.name}</span>
            </p>
            <p className='bill-content'>
              <span className='bill-title'>Unit Price: ₹</span>
              <span>
                {item.regular_price -
                  (item.regular_price * item.discount) / 100}
              </span>
            </p>
            <p className='bill-content'>
              <span className='bill-title'>Quantity: </span>
              <span>{item.quantity}</span>
            </p>
            <p className='bill-content'>
              <span className='bill-title'>Amount: ₹</span>
              <span>
                {calculateTotalBill(item.regular_price, item.quantity, item.discount)}
              </span>
            </p>
          </li>
        ))}
      </ul>
      <p className='bill-total'>Total Payment: ₹{totalPayment.toFixed(2)}</p>

      <div className='bill-buttons'>
        <Button label='Close' onClick={onClose} additionalClass='primary' />
        <Button
          label='Buy Now'
          additionalClass='secondary'
          onClick={onBuyNow}
        />
      </div>
    </article>
  </section>
)

export default Bill
