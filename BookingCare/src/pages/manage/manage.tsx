import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Headermanage from './header/header'

const Manage = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setSelectedOption(optionValue)
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
