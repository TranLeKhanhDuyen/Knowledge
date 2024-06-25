import { render, fireEvent } from '@testing-library/react'
import ButtonIcon, { IButtonIconProps } from '.'

// Mock IconSvg component
jest.mock('@components/Common/IconSvg', () => ({ name }: { name: string }) => (
  <svg data-testid={`icon-${name}`} />
))

describe('ButtonIcon', () => {
  const renderButtonIcon = (props: Partial<IButtonIconProps> = {}) => {
    const defaultProps: IButtonIconProps = {
      variants: 'square',
      size: 'sm',
      icon: 'search',
      alt: 'icon',
      additionalClass: '',
      onClick: jest.fn()
    }
    return render(<ButtonIcon {...defaultProps} {...props} />)
  }

  test('renders with the correct variant class', () => {
    const { container } = renderButtonIcon({ variants: 'circle' })
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('btn btn-circle')
  })

  test('renders with the correct size class', () => {
    const { container } = renderButtonIcon({ size: 'lg' })
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('btn btn-square btn-lg')
  })

  test('renders the correct icon', () => {
    const { getByTestId } = renderButtonIcon({ icon: 'user' })
    expect(getByTestId('icon-user')).toBeInTheDocument()
  })

  test('applies additional class names', () => {
    const { container } = renderButtonIcon({ additionalClass: 'custom-class' })
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('custom-class')
  })

  test('handles the onClick event', () => {
    const onClickMock = jest.fn()
    const { getByRole } = renderButtonIcon({ onClick: onClickMock })
    const buttonElement = getByRole('button')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('matches snapshot', () => {
    const { asFragment } = renderButtonIcon()
    expect(asFragment()).toMatchSnapshot()
  })
})
