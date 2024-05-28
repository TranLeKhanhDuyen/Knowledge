import { IconText } from '@components'
import './Topbar.css'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='container topbar-container '>
        <span className='topbar-title'>Welcome to worldwide Megamart! </span>
        <article className='topbar-contents'>
          <IconText
            icon='location'
            title={'Deliver to \u00A0'}
            subTitle='423651'
            additionalClass='topbar-icon'
            type='primary'
          />
          <IconText
            icon='truck'
            title='Track your order'
            additionalClass='topbar-icon'
            type='primary'
          />
          <IconText
            icon='discount'
            title='All Offers'
            additionalClass='topbar-icon'
            type='primary'
          />
        </article>
      </div>
    </div>
  )
}

export default Topbar
