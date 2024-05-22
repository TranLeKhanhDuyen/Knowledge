import { render, fireEvent } from '@testing-library/react'
import IconTextButton, { IIconTextButtonProps } from '.'

// Mock IconSvg component
jest.mock(
  '@components/Common/IconSvg',
  () =>
    ({ name, className }: { name: string; className?: string }) => (
      <svg data-testid={`icon-${name}`} className={className} />
    )
)

describe('IconTextButton', () => {
  const renderIconTextButton = (props: Partial<IIconTextButtonProps> = {}) => {
    const defaultProps: IIconTextButtonProps = {
      size: 'sm',
      iconPosition: 'left',
      title: 'Default Title',
      subTitle: 'Default SubTitle',
      icon: 'search',
      additionalClass: '',
      onClick: jest.fn()
    }
    return render(<IconTextButton {...defaultProps} {...props} />)
  }

  test('renders with the correct size class', () => {
    const { container } = renderIconTextButton({ size: 'lg' })
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('icontext-btn-container-lg')
  })

  test('renders with the correct icon position class', () => {
    const { container } = renderIconTextButton({ iconPosition: 'right' })
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('icontext-btn-container-right')
  })

  test('renders the correct icon', () => {
    const { getByTestId } = renderIconTextButton({ icon: 'user' })
    expect(getByTestId('icon-user')).toBeInTheDocument()
  })

  test('applies additional class names', () => {
    const { container } = renderIconTextButton({
      additionalClass: 'custom-class'
    })
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('custom-class')
  })

  test('renders the correct title and subtitle', () => {
    const { getByText } = renderIconTextButton({
      title: 'Test Title',
      subTitle: 'Test SubTitle'
    })
    expect(getByText('Test Title')).toBeInTheDocument()
    expect(getByText('Test SubTitle')).toBeInTheDocument()
  })

  test('renders children correctly', () => {
    const { getByText } = renderIconTextButton({
      children: <span>Child Content</span>
    })
    expect(getByText('Child Content')).toBeInTheDocument()
  })

  test('handles the onClick event', () => {
    const onClickMock = jest.fn()
    const { getByRole } = renderIconTextButton({ onClick: onClickMock })
    const buttonElement = getByRole('button')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('matches snapshot for default props', () => {
    const { asFragment } = renderIconTextButton()
    expect(asFragment()).toMatchSnapshot()
  })

  test('matches snapshot for size=lg and iconPosition=right', () => {
    const { asFragment } = renderIconTextButton({
      size: 'lg',
      iconPosition: 'right'
    })
    expect(asFragment()).toMatchSnapshot()
  })

  test('matches snapshot for custom class and no subtitle', () => {
    const { asFragment } = renderIconTextButton({
      additionalClass: 'custom-class',
      subTitle: undefined
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
