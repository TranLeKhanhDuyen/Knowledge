import { FormEvent } from 'react'

import '@components/TextField/TextField.css'

interface ITextFieldProps {
  isShowLabel?: boolean
  label?: string
  additionalClass?: string
  value?: string
  placeholder?: string
  iconLeft?: string
  iconRight?: string
  onChange?: (value: string) => void
  validate?: (value: string) => string | undefined
}

const TextField = ({
  isShowLabel = false,
  iconLeft,
  iconRight,
  label,
  additionalClass,
  value,
  placeholder,
  onChange,
  validate
}: ITextFieldProps) => {
  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  const error = validate ? validate(value || '') : undefined

  return (
    <>
      <label className={`label-input ${!isShowLabel && 'hide'}`}>{label}</label>

      <div className='input-container'>
        {iconLeft && <img src={iconLeft} alt='icon' />}
        <input
          type='text'
          className={`text-field ${additionalClass}`}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeInput}
        />
        {iconRight && <img src={iconRight} alt='icon' />}
        {error && <p className='error-message'>{error}</p>}
      </div>
    </>
  )
}

export default TextField
