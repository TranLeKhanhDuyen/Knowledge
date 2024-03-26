import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HeaderManager from './header/header'
import AllUsers from './allusers/allusers'
import CreateUser from './create-user/create-user'

const Manager = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setSelectedOption(optionValue)
    switch (optionValue) {
      case '':
        return navigate('/manager')
      case 'All User':
        return navigate('/manager/all-users')
      case 'Create User':
        return navigate('/manager/create-users')
      default:
    }
  }

  return (
    <>
      <HeaderManager
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption}
      />
      <Routes>
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='/create-users' element={<CreateUser />} />
      </Routes>
    </>
  )
}

export default Manager
