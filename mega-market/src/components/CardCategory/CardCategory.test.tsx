import { fireEvent, render } from '@testing-library/react'
import CardCategory from '.'

describe('CardCategory component', () => {
  test('renders correctly', () => {
    const { container } = render(
      <CardCategory imageUrl='url' alt='test alt' name='test name' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders name correctly', () => {
    const testName = 'Test Name'
    const { getByText } = render(
      <CardCategory imageUrl='url' alt='test alt' name={testName} />
    )
    expect(getByText(testName)).toBeInTheDocument()
  })

  test('renders discount correctly', () => {
    const testDiscountPercent = '50'
    const { getByText } = render(
      <CardCategory
        imageUrl='url'
        alt='test alt'
        name='test name'
        discountPercent={testDiscountPercent}
      />
    )
    expect(getByText(`UP to ${testDiscountPercent} OFF`)).toBeInTheDocument()
  })

  test('applies additionalClass correctly', () => {
    const additionalClass = 'additional-class'
    const { container } = render(
      <CardCategory
        imageUrl='url'
        alt='test alt'
        name='test name'
        additionalClass={additionalClass}
      />
    )
    expect(container.firstChild).toHaveClass(additionalClass)
  })

  test('calls onClick when image is clicked', () => {
    const onClick = jest.fn()
    const { getByAltText } = render(
      <CardCategory
        imageUrl='url'
        alt='test alt'
        name='test name'
        onClick={onClick}
      />
    )
    fireEvent.click(getByAltText('test alt'))
    expect(onClick).toHaveBeenCalled()
  })
})
