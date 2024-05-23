import { render, fireEvent } from '@testing-library/react'
import Button, { IButtonProps } from '.'

const mockOnClick = jest.fn()

const defaultProps: IButtonProps = {
  label: 'Test Button',
  onClick: mockOnClick
}

describe('Button component', () => {
  test('renders button with correct label', () => {
    const { getByText } = render(<Button {...defaultProps} />)
    expect(getByText(defaultProps.label)).toBeInTheDocument()
  })

  test('calls onClick prop when clicked', () => {
    const { getByText } = render(<Button {...defaultProps} />)
    fireEvent.click(getByText(defaultProps.label))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  test('applies additionalClass prop', () => {
    const additionalClass = 'additional-class'
    const { container } = render(
      <Button {...defaultProps} additionalClass={additionalClass} />
    )
    expect(container.firstChild).toHaveClass(`btn ${additionalClass}`)
  })

  test('matches snapshot', () => {
    const { asFragment } = render(<Button {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
