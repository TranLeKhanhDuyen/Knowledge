import { ChangeEvent } from 'react'
import IconSvg, { IconSvgProps } from '@components/Common/IconSvg'
import './TextField.css'

export interface ITextFieldProps extends React.HTMLProps<HTMLInputElement> {
  isShowLabel?: boolean
  label?: string
  additionalClass?: string
  value?: string
  placeholder?: string
  iconLeft?: IconSvgProps['name']
  iconRight?: IconSvgProps['name']
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  validate?: (value: string) => string | undefined
  error?: string
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
  validate,
  error
}: ITextFieldProps) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }
  const validationError = validate ? validate(value || '') : undefined

  return (
    <>
      {isShowLabel ? <label className='label-input'>{label}</label> : null}

      <div className='input-container'>
        {iconLeft && <IconSvg name={iconLeft} />}
        <input
          className={`text-field ${additionalClass} ${
            !isShowLabel ? 'hide' : ''
          }`}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeInput}
        />
        {iconRight && <IconSvg name={iconRight} />}
        {(error || validationError) && (
          <p className='error-message'>{error || validationError}</p>
        )}
      </div>
    </>
  )
}

export default TextField
