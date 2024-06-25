import { render } from '@testing-library/react'
import IconText, { IIconTextProps } from './index'

// Mock IconSvg component
jest.mock('@components/Common/IconSvg', () => ({ name }: { name: string }) => (
  <svg data-testid={`icon-${name}`} />
))

describe('IconText', () => {
  const renderIconText = (props: Partial<IIconTextProps> = {}) => {
    const defaultProps: IIconTextProps = {
      size: 'sm',
      iconPosition: 'left',
      title: 'Default Title',
      subTitle: 'Default SubTitle',
      icon: 'search',
      additionalClass: '',
      type: 'primary'
    }
    return render(<IconText {...defaultProps} {...props} />)
  }

  test('renders with the correct size class', () => {
    const { container } = renderIconText({ size: 'lg' })
    const articleElement = container.querySelector('article')
    expect(articleElement).toHaveClass('icontext-container-lg')
  })

  test('renders with the correct icon position class', () => {
    const { container } = renderIconText({ iconPosition: 'right' })
    const articleElement = container.querySelector('article')
    expect(articleElement).toHaveClass('icontext-container-right')
  })

  test('renders the correct icon', () => {
    const { getByTestId } = renderIconText({ icon: 'user' })
    expect(getByTestId('icon-user')).toBeInTheDocument()
  })

  test('applies additional class names', () => {
    const { container } = renderIconText({ additionalClass: 'custom-class' })
    const articleElement = container.querySelector('article')
    expect(articleElement).toHaveClass('custom-class')
  })

  test('renders the correct title and subtitle', () => {
    const { getByText } = renderIconText({
      title: 'Test Title',
      subTitle: 'Test SubTitle'
    })
    expect(getByText('Test Title')).toBeInTheDocument()
    expect(getByText('Test SubTitle')).toBeInTheDocument()
  })

  test('renders children correctly', () => {
    const { getByText } = renderIconText({
      children: <span>Child Content</span>
    })
    expect(getByText('Child Content')).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const { asFragment } = renderIconText()
    expect(asFragment()).toMatchSnapshot()
  })
})
