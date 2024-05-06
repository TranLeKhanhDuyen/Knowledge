import { IconText, ImageSlider } from '@components'
import { IMAGES } from '@components/Image'
import Header from '@layout/header'
import './home.css'

const HomePage = () => {
  return (
    <>
      <div className='topbar'>
        <div className='container topbar-container '>
          <span className='topbar-title'>Welcome to worldwide Megamart! </span>
          <article className='topbar-contents'>
            <IconText
              icon='location'
              title='Deliver to'
              subTitle='423651'
              additionalClass='topbar-icon'
            />
            <IconText
              icon='truck'
              title='Track your order'
              additionalClass='topbar-icon'
            />
            <IconText
              icon='discount'
              title='All Offers'
              additionalClass='topbar-icon'
            />
          </article>
        </div>
      </div>
      <Header />
      <ImageSlider imageUrls={IMAGES} />
    </>
  )
}

export default HomePage
