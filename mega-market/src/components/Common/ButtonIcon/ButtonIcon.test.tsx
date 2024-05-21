import { render, fireEvent } from '@testing-library/react'
import ButtonIcon, { IButtonIconProps } from '.'

jest.mock('@components/Common/IconSvg', () =>
  jest.fn(() => <svg data-testid='icon-svg' />)
)

describe('ButtonIcon component', () => {
  const defaultProps: IButtonIconProps = {
    icon: 'call' 
  }

  test('renders with default props', () => {
    const { getByRole, getByTestId } = render(<ButtonIcon {...defaultProps} />)
    const button = getByRole('button')
    const icon = getByTestId('icon-svg')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn btn-square btn-sm')
    expect(icon).toBeInTheDocument()
  })

  test('applies additional class correctly', () => {
    const { getByRole } = render(
      <ButtonIcon {...defaultProps} additionalClass='custom-class' />
    )
    const button = getByRole('button')

    expect(button).toHaveClass('custom-class')
  })

  test('renders with different variants and sizes', () => {
    const { rerender, getByRole } = render(
      <ButtonIcon {...defaultProps} variants='circle' size='md' />
    )
    const button = getByRole('button')

    expect(button).toHaveClass('btn-circle btn-md')

    rerender(<ButtonIcon {...defaultProps} variants='square' size='lg' />)
    expect(button).toHaveClass('btn-square btn-lg')
  })

  test('calls onClick handler when clicked', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <ButtonIcon {...defaultProps} onClick={onClick} />
    )
    const button = getByRole('button')

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('passes props to button element', () => {
    const { getByRole } = render(<ButtonIcon {...defaultProps} disabled />)
    const button = getByRole('button')

    expect(button).toBeDisabled()
  })
})
