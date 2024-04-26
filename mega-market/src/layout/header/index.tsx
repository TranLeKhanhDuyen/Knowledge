import './Header.css'

import { ButtonIcon, IconTextButton, Logo } from '@components'
import { buyIcon, menuIcon, userIcon } from '@assets/images'
import SearchBar from '@components/SearchBar'

const Header = () => {
  return (
    <header className='container header'>
      <div className='header-left'>
        <ButtonIcon icon={menuIcon} size='sm' />
        <Logo />
      </div>
      
      <div className='header-right'>
        <SearchBar placeholder='search' />
        <IconTextButton
          subTitle='Sign Up/Sign In'
          icon={userIcon}
          additionalClass='header-icon'
        />
        <IconTextButton
          subTitle='Cart'
          icon={buyIcon}
          additionalClass='header-icon'
        />
      </div>
    </header>
  )
}

export default Header
