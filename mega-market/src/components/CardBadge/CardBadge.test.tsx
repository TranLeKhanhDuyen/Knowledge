import { render } from '@testing-library/react'
import CardBadge from '.'

describe('CardBadge component', () => {
  test('renders correctly', () => {
    const { container } = render(<CardBadge percent='50' title='Test Title' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders percent and title correctly', () => {
    const percent = '50'
    const title = 'Test Title'
    const { getByText } = render(<CardBadge percent={percent} title={title} />)
    expect(getByText(`${percent}%`)).toBeInTheDocument()
    expect(getByText(title)).toBeInTheDocument()
  })

  test('applies additionalClass correctly', () => {
    const additionalClass = 'additional-class'
    const { container } = render(
      <CardBadge
        percent='50'
        title='Test Title'
        additionalClass={additionalClass}
      />
    )
    expect(container.firstChild).toHaveClass(
      'card-badge-container',
      additionalClass
    )
  })
})
