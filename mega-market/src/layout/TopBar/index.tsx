import { IconText } from '@components'
import { iconTexts } from '@constants'
import './Topbar.css'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='container topbar-container '>
        <span className='topbar-title'>Welcome to worldwide Megamart! </span>
        <article className='topbar-contents'>
          {iconTexts.map((item, index) => (
            <IconText
              key={index}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
              additionalClass={item.additionalClass}
              type='primary'
            />
          ))}
        </article>
      </div>
    </div>
  )
}

export default Topbar
