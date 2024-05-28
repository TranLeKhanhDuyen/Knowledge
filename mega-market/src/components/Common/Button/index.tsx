import React from 'react'
import './Button.css'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  additionalClass?: string
}

const Button: React.FC<IButtonProps> = ({
  label,
  onClick,
  additionalClass = '',
  ...props
}) => {
  return (
    <button className={`btn ${additionalClass}`} onClick={onClick} {...props}>
      {label}
    </button>
  )
}

export default Button
