import { render, fireEvent } from '@testing-library/react'
import TextField, { ITextFieldProps } from '.'

describe('TextField', () => {
  const renderTextField = (props: Partial<ITextFieldProps> = {}) => {
    const defaultProps: ITextFieldProps = {
      label: 'Username',
      placeholder: 'Enter username',
      onChange: jest.fn(),
      validate: (value: string) =>
        value.length < 6 ? 'Username too short' : undefined,
      ...props
    }
    return render(<TextField {...defaultProps} />)
  }

  test('renders label when isShowLabel is true', () => {
    const { getByText } = renderTextField({ isShowLabel: true })
    expect(getByText('Username')).toBeInTheDocument()
  })

  test('hides label when isShowLabel is false', () => {
    const { queryByText } = renderTextField({ isShowLabel: false })
    expect(queryByText('Username')).not.toBeInTheDocument()
  })

  test('renders input with placeholder', () => {
    const { getByPlaceholderText } = renderTextField()
    expect(getByPlaceholderText('Enter username')).toBeInTheDocument()
  })

  test('calls onChange callback when input value changes', () => {
    const onChangeMock = jest.fn()
    const { getByPlaceholderText } = renderTextField({ onChange: onChangeMock })
    const inputElement = getByPlaceholderText('Enter username')
    fireEvent.change(inputElement, { target: { value: 'user123' } })
    expect(onChangeMock).toHaveBeenCalledWith('user123')
  })

  test('displays error message if input is invalid', () => {
    const { getByText, getByPlaceholderText } = renderTextField()
    const inputElement = getByPlaceholderText('Enter username')
    fireEvent.change(inputElement, { target: { value: 'user' } })
    expect(getByText('Username too short')).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const { container } = renderTextField()
    expect(container).toMatchSnapshot()
  })
})
