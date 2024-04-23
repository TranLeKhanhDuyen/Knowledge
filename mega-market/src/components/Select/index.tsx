import React, { useState } from 'react'
import IconTextButton, {
  IIconTextButtonProps
} from '@components/IconTextButton'
import selectIcon from '@assets/images/icons/arrow-down-1.svg'
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

  const selectButtonProps: IIconTextButtonProps = {
    size: 'sm',
    icon: selectIcon || '',
    title: selectedOption ? selectedOption.label : 'Groceries',
    iconPosition: 'right',
    additionalClass: 'select',
    onClick: () => setIsOpen(!isOpen)
  }

  return (
    <div className='select-container'>
      <IconTextButton {...selectButtonProps} />
      {isOpen && (
        <div className='options-container'>
          {options.map((option) => (
            <div
              key={option.value}
              className='option'
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
