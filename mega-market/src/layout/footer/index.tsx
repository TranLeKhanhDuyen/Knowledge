import { Contact, HeadLine, IconText, Logo } from '@components'
import './footer.css'
import { contactImages } from '@constants/images'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer-container'>
        <ul className='contact-container'>
          <Logo variant='white' width='217px' height='44px'/>
          <li className='contact-title'>Contact Us</li>
          <li>
            <Contact
              icon='call'
              name='Whats App'
              phoneNumber='+ 1 202-978-2132'
            />
          </li>
          <li>
            <Contact
              icon='call'
              name='Call Us'
              phoneNumber='+ 1 202-978-2132'
            />
          </li>
          <li className='contact-title'>Dowload App</li>
          <li className='contact-image'>
            {contactImages.map((image, index) => (
              <img key={index} src={image} alt={`App Store ${index + 1}`} />
            ))}
          </li>
        </ul>

        <ul className='popular'>
          <HeadLine
            showButton={false}
            title='Most Popular Categories'
            additionalClass='footer'
          />
          <li> Staples</li>
          <li> Beverages</li>
          <li> Personal Care</li>
          <li> Home Care</li>
          <li> Baby Care</li>
          <li> Vegetables & Fruits</li>
          <li> Snacks & Foods</li>
          <li> Da iry & Bakery</li>
        </ul>

        <ul className='service'>
          <HeadLine
            showButton={false}
            title='Customers Service'
            additionalClass='footer'
          />
          <li> About Us</li>
          <li> Terms & Condition</li>
          <li> FAQ</li>
          <li> Privacy Policy</li>
          <li> E-waste Policy</li>
          <li> Cancellation & Return Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
