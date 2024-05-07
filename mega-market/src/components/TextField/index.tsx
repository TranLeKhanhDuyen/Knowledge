import { FormEvent } from 'react'

import IconSvg, { IconSvgProps } from '@components/IconSvg'
import '@components/TextField/TextField.css'

export interface ITextFieldProps {
  isShowLabel?: boolean
  label?: string
  additionalClass?: string
  value?: string
  placeholder?: string
  iconLeft?: IconSvgProps['name']
  iconRight?: IconSvgProps['name']
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
        {iconLeft && <IconSvg name={iconLeft} />}
        <input
          type='text'
          className={`text-field ${additionalClass}`}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeInput}
        />
        {iconRight && <IconSvg name={iconRight} />}
        {error && <p className='error-message'>{error}</p>}
      </div>
    </>
  )
}

export default TextField
