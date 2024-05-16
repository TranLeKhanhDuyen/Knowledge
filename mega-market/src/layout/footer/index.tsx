import { HeadLine, IconText, Logo } from '@components'
import { contactImages } from '@constants/images'
import { customerServices, popularCategories } from '@constants'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer-container'>
        <ul className='contact-container'>
          <Logo variant='white' width='217px' height='44px' />
          <li className='contact-title'>Contact Us</li>
          <li>
            <IconText
              icon='call'
              title='Whats App'
              subTitle='+ 1 202-978-2132'
              type='secondary'
              size='md'
            />
          </li>
          <li>
            <IconText
              icon='call'
              title='Call Us'
              subTitle='+ 1 202-978-2132'
              type='secondary'
              size='md'
            />
          </li>
          <li className='contact-title'>Download App</li>
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
          {popularCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>

        <ul className='service'>
          <HeadLine
            showButton={false}
            title='Customers Service'
            additionalClass='footer'
          />
          {customerServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
