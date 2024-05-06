import { IconText, ImageSlider, Select } from '@components'
import Header from '@layout/header'
import './home.css'
import { IMAGES } from '@constants/images'
import selectOptions from '@constants/selectOptions'

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
      <div className='select-container'>
        <div className='container select-wrapper'>
          {selectOptions.map((option, index) => (
            <Select
              key={index}
              options={[option]}
              onSelect={(value) => console.log(value)}
            />
          ))}
        </div>
      </div>
      <ImageSlider imageUrls={IMAGES} />
    </>
  )
}

export default HomePage
