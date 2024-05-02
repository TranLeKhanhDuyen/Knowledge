import React, { useState } from 'react'

import { IconTextButton, IIconTextButtonProps } from '@components'
import './Select.css'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  onSelect: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option)
    onSelect(option.value)
    setIsOpen(false)
  }

  const handleToggleSelect = () => {
    setIsOpen(!isOpen)
  }

  const selectButtonProps: IIconTextButtonProps = {
    size: 'sm',
    icon: 'arrow-down-white',
    title: selectedOption ? selectedOption.label : 'Groceries',
    additionalClass: 'select',
    onClick: handleToggleSelect
  }

  return (
    <div className='select-container'>
      <IconTextButton {...selectButtonProps} />
      {isOpen && (
        <ul className='options-container'>
          {options.map((option) => (
            <li
              key={option.value}
              className='option'
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
