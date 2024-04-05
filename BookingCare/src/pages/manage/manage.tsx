import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Headermanage from './header/header'
import { UserRole } from '@services/models/user-role'

const Manage = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setSelectedOption(optionValue)
    switch (optionValue) {
      case '':
        return navigate('/manage')
      case 'Tất cả người dùng':
        return navigate('/manage/all-users')
      case 'Tạo người dùng':
        return navigate('/manage/create-users')
      case 'Danh sách bệnh nhân':
        // check role of user

      default:

    }
    // check role of user
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (user.user.role === UserRole.ADMIN) {
      return navigate('/manage')
    }
    if (user.role === UserRole.DOCTOR) {
      return navigate('/manage/doctors/me/appointments')
    } else {
      return navigate('/')
    }
  }

  return (
    <>
      <Headermanage
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption}
        role={JSON.parse(localStorage.getItem('user') || '{}').role}
      />
      <Outlet />
    </>
  )
}

export default Manage
