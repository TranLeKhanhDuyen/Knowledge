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
  error,
  ...props
}: ITextFieldProps) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }
  const validationError = validate ? validate(value || '') : undefined

  return (
    <>
      {isShowLabel && (
        <label className={`label-input ${additionalClass}`}>{label}</label>
      )}

      <div className={`input-container ${additionalClass}`}>
        {iconLeft && <IconSvg name={iconLeft} />}
        <input
          className={`text-field ${!isShowLabel ? 'hide' : ''}`}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeInput}
          {...props}
        />
        {iconRight && <IconSvg name={iconRight} />}
      </div>
      <div className='error-placeholder'>
        {(error || validationError) && (
          <p className='error-message-filed'>{error || validationError}</p>
        )}
      </div>
    </>
  )
}

export default TextField
