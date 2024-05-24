import './Header.css'

import { ButtonIcon, IconTextButton, Logo } from '@components'
import SearchBar from '@components/SearchBar'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/auth/login')
  }
  
  return (
    <header className='container header'>
      <div className='header-left'>
        <ButtonIcon icon='menu' size='sm' variants='square' />
        <Logo />
      </div>

      <SearchBar additonalClass='search-header' />
      <div className='header-right'>
        <IconTextButton
          size='md'
          subTitle='Sign Up/Sign In'
          icon='user'
          additionalClass='header-user-icon'
          onClick={handleSignInClick}
        />
        <IconTextButton
          size='md'
          subTitle='Cart'
          icon='buy'
          additionalClass='header-buy-icon'
        />
      </div>
    </header>
  )
}

export default Header
