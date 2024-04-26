import './home.css'
import { Headline, IconTextButton } from '@components'
import locationIcon from '@assets/images/icons/location.svg'
import truckIcon from '@assets/images/icons/iconoir-delivery-truck.svg'
import discoundIcon from '@assets/images/icons/discount.svg'
import Header from '@layout/header'

const HomePage = () => {
  return (
    <>
      <div className='topbar'>
        <div className='container  topbar-container '>
          <span className='topbar-title'>Welcome to worldwide Megamart! </span>
          <article className='topbar-contents'>
            <IconTextButton
              icon={locationIcon}
              title='Deliver to'
              subTitle='423651'
              additionalClass='topbar-icon'
            />
            <IconTextButton
              icon={truckIcon}
              title='Track your order'
              additionalClass='topbar-icon'
            />
            <IconTextButton
              icon={discoundIcon}
              title='All Offers'
              additionalClass='topbar-icon'
            />
          </article>
        </div>
      </div>
      <Header/>
    </>
  )
}

export default HomePage
