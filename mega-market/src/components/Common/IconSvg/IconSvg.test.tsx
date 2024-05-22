import { render } from '@testing-library/react'
import IconSvg, { IconSvgProps } from '.'

// Mock Icons module
jest.mock('@components/Icons/Icons', () => ({
  arrowDownWhite: <svg data-testid='ArrowDownWhiteIcon' />,
  buy: <svg data-testid='BuyIcon' />,
  callOutlined: <svg data-testid='CallOutLinedIcon' />,
  call: <svg data-testid='CallIcon' />,
  discount: <svg data-testid='DiscountIcon' />,
  truck: <svg data-testid='TruckIcon' />,
  list: <svg data-testid='ListIcon' />,
  location: <svg data-testid='LocationIcon' />,
  menu: <svg data-testid='MenuIcon' />,
  search: <svg data-testid='SearchIcon' />,
  user: <svg data-testid='UserIcon' />,
  arrowLeft: <svg data-testid='ArrowLeftIcon' />,
  arrowRight: <svg data-testid='ArrowRightIcon' />
}))

describe('IconSvg', () => {
  const renderIconSvg = (props: Partial<IconSvgProps> = {}) => {
    const defaultProps: IconSvgProps = {
      name: 'arrowDownWhite',
      className: ''
    }
    return render(<IconSvg {...defaultProps} {...props} />)
  }

  test('renders the correct icon based on the name prop', () => {
    const { getByTestId } = renderIconSvg({ name: 'buy' })
    expect(getByTestId('BuyIcon')).toBeInTheDocument()
  })

  test('applies the correct class names', () => {
    const { container } = renderIconSvg({
      name: 'call',
      className: 'custom-class'
    })
    const spanElement = container.querySelector('span')
    expect(spanElement).toHaveClass('icon icon-call custom-class')
  })

  test('renders the correct default class when no additional className is provided', () => {
    const { container } = renderIconSvg({ name: 'discount' })
    const spanElement = container.querySelector('span')
    expect(spanElement).toHaveClass('icon icon-discount')
  })

  test('renders the correct icon with no additional className', () => {
    const { getByTestId } = renderIconSvg({ name: 'list' })
    expect(getByTestId('ListIcon')).toBeInTheDocument()
  })
})
