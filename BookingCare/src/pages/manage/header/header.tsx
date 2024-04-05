import { OptionList } from '@components/common'
import { UserRole } from '@services/models/user-role'
import './header.css'
import { useAuthStore } from '@store/auth-store'

interface IHeadermanageProps {
  onSelectOption: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption?: string
  role: UserRole
}

const Headermanage = ({
  onSelectOption,
  selectedOption
}: IHeadermanageProps) => {
  const { signOut, user } = useAuthStore()

  return (
    <header className='header-manage-container'>
      <nav className='text-white header-manage'>
        <div className='nav-left'>
          <OptionList
            className='optionlist'
            items={[
              { id: '1', value: 'Tất cả người dùng' },
              { id: '2', value: 'Tạo người dùng' },
              { id: '3', value: 'Danh sách lịch hẹn' }
            ]}
            onChange={onSelectOption}
            value={selectedOption}
          />
        </div>
        <div className='nav-right'>
          <span>
            Welcome {user?.firstName} {user?.lastName}
          </span>
          <button className='cursor logout-manage' onClick={signOut}></button>
        </div>
      </nav>
    </header>
  )
}

export default Headermanage
