import { render } from '@testing-library/react'
import CardBadge from '.'

describe('CardBadge component', () => {
  test('renders title and percent correctly', () => {
    const title = 'Discount'
    const percent = '20%'
    const { getByText } = render(<CardBadge title={title} percent={percent} />)

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(percent)).toBeInTheDocument()
  })

  test('applies additional class correctly', () => {
    const additionalClass = 'custom-class'
    const { container } = render(
      <CardBadge
        title='Title'
        percent='50%'
        additionalClass={additionalClass}
      />
    )

    expect(container.firstChild).toHaveClass(additionalClass)
  })

  test('matches snapshot', () => {
    const title = 'Free Shipping'
    const percent = '80%'
    const additionalClass = 'special-class'
    const { asFragment } = render(
      <CardBadge
        title={title}
        percent={percent}
        additionalClass={additionalClass}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
