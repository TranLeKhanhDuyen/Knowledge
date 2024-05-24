import { ButtonIcon, IconTextButton, Logo, SearchBar } from '@components'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@services'
import './Header.css'
import { ValidationMessages } from '@constants/validation'

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
        />
      </div>
    </header>
  )
}

export default Header
