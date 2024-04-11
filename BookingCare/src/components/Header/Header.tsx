import logo from '@assets/logo-v3.png'
import { ItemLink, SearchBar } from '@components'
import { Heading, Text, THeadingVariant } from '@components/common'
import './Header.css'
import { UserRole } from '@services/models/user-role'
import { useAuthStore } from '@store/auth-store'
import { useNavigate } from 'react-router-dom'

export interface IHeaderProps {
  items: {
    variant: THeadingVariant
    heading: string
    text: string
  }[]
  icon?: string
  role?: UserRole
}

const Header = ({ items }: IHeaderProps) => {
  const { signOut, user } = useAuthStore()
  const getUserRole = (): UserRole | undefined => {
    return user?.role
  }

  getUserRole()

  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/auth/login')
  }

  if (!user) {
    return (
      <header className='header'>
        <div className='container header-container'>
          <ItemLink image={logo} width='200' height='43' path='/' />
          <nav className='navbar'>
            {items.map((item, index) => (
              <div className='navbar-item' key={index}>
                <Heading variant={item.variant} content={item.heading} />
                <Text content={item.text} />
              </div>
            ))}
          </nav>
          <SearchBar />
          <div className='nav-right'>
            <button className='cursor logout-manage' onClick={onLogin}>
              Đăng nhập
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className='header'>
      <div className='container header-container'>
        <ItemLink image={logo} width='200' height='43' path='/' />
        <nav className='navbar'>
          {items.map((item, index) => (
            <div className='navbar-item' key={index}>
              <Heading variant={item.variant} content={item.heading} />
              <Text content={item.text} />
            </div>
          ))}
        </nav>
        <SearchBar />
        <div className='nav-right'>
          <button className='cursor logout-manage' onClick={signOut}>
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
