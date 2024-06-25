import React, { useState } from 'react'
import { IconSvgProps } from '../IconSvg'
import './Select.css'

interface Option {
  value: string
  label: string
}

export interface SelectProps {
  options: Option[]
  onSelect: (value: string) => void
  icon?: IconSvgProps['name']
  additionalClass?: string
}

const Select: React.FC<SelectProps> = ({
  options,
  onSelect,
  icon,
  additionalClass
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options[0] || null
  )

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option)
    onSelect(option.value)
    setIsOpen(false)
  }

  const handleToggleSelect = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`select-item ${additionalClass}`}>
      <div className='select-button' onClick={handleToggleSelect}>
        <span className='select-label'>
          {selectedOption ? selectedOption.label : 'Choose option'}
        </span>
        {icon && (
          <span className={`select-icon ${isOpen ? 'open' : ''}`}></span>
        )}
      </div>
      {isOpen && (
        <ul className='options-select'>
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
