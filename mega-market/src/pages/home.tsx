import './home.css'
import {IconText } from '@components'
import Header from '@layout/header'

const HomePage = () => {
  return (
    <>
      <div className='topbar'>
        <div className='container  topbar-container '>
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
      <Header/>
    </>
  )
}

export default HomePage
