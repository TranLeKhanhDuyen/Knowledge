import { ButtonIcon, IconTextButton, Logo, SearchBar } from '@components'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@services'
import { ValidationMessages } from '@constants'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  const handleSignInClick = () => {
    navigate('/auth/login')
  }

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm(ValidationMessages.LogoutQuestion)
    if (confirmLogout) {
      setUser(null)
    }
  }

  const handleUserClick = () => {
    if (user) {
      handleLogoutClick()
    } else {
      handleSignInClick()
    }
  }

  const handleNavigateCardPage = () => {
    if (!user) {
      const confirmLogin = window.confirm(
        'Please log in to add to cart products. Do you want to log in now?'
      )
      if (confirmLogin) {
        navigate('/auth/login')
      }
      return
    }
    navigate('/cart')
  }

  return (
    <header className='container header'>
      <div className='header-left'>
        <ButtonIcon icon='menu' size='sm' variants='square' />
        <Logo />
      </div>

      <SearchBar additionalClass='search-header' />
      <div className='header-right'>
        <IconTextButton
          size='md'
          subTitle={user ? ' | Logout' : 'Sign Up/Sign In'}
          title={user ? user.userName : ''}
          icon='user'
          additionalClass='header-user-icon'
          onClick={handleUserClick}
        />
        <IconTextButton
          size='md'
          subTitle='Cart'
          icon='buy'
          additionalClass='header-buy-icon'
          onClick={handleNavigateCardPage}
        />
      </div>
    </header>
  )
}

export default Header
