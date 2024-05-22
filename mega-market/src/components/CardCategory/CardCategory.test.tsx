import { render } from '@testing-library/react'
import CardCategory from '.'

describe('CardCategory component', () => {
  test('renders correctly with default props', () => {
    const imageUrl = '@assets/images/products/phone-2.svg'
    const { getByAltText, getByText } = render(
      <CardCategory imageUrl={imageUrl} />
    )

    const categoryImage = getByAltText('Image of category')
    expect(categoryImage).toBeInTheDocument()
    expect(categoryImage.getAttribute('src')).toBe(imageUrl)

    const defaultCategoryName = 'Electronics'
    const categoryName = getByText(defaultCategoryName)
    expect(categoryName).toBeInTheDocument()

    const defaultDiscountPercent = '50%'
    const discountText = getByText(`UP to ${defaultDiscountPercent} OFF`)
    expect(discountText).toBeInTheDocument()
  })

  test('renders correctly with custom props', () => {
    const imageUrl =
      'https://media.4rgos.it/i/Argos/9520103_R_Z001A?w=750&h=440&qlt=70'
    const customAltText = 'Custom Alt Text'
    const customCategoryName = 'Clothing'
    const customDiscountPercent = '30%'
    const { getByAltText, getByText } = render(
      <CardCategory
        imageUrl={imageUrl}
        alt={customAltText}
        name={customCategoryName}
        discountPercent={customDiscountPercent}
        variant='square'
        additionalClass='custom-class'
      />
    )

    const categoryImage = getByAltText(customAltText)
    expect(categoryImage).toBeInTheDocument()
    expect(categoryImage.getAttribute('src')).toBe(imageUrl)

    const categoryName = getByText(customCategoryName)
    expect(categoryName).toBeInTheDocument()

    const discountText = getByText(`UP to ${customDiscountPercent} OFF`)
    expect(discountText).toBeInTheDocument()

    const categoryContainer = getByAltText(customAltText).closest(
      '.card-category-container'
    )
    expect(categoryContainer).toHaveClass('card-category-container-square')
    expect(categoryContainer).toHaveClass('custom-class')

    const categoryImgWrapper = getByAltText(customAltText).closest(
      '.category-img-wrapper'
    )
    expect(categoryImgWrapper).toHaveClass('category-img-wrapper-square')

    const categoryNameElement = getByText(customCategoryName)
    expect(categoryNameElement).toHaveClass('category-name-square')

    const discountTextElement = getByText(`UP to ${customDiscountPercent} OFF`)
    expect(discountTextElement).toHaveClass('category-discount-square')
  })

  test('renders correctly with custom props', () => {
    const imageUrl = '@assets/images/products/phone-2.svg'
    const customAltText = 'Custom Alt Text'
    const customCategoryName = 'Clothing'
    const customDiscountPercent = '30%'
    const { container } = render(
      <CardCategory
        imageUrl={imageUrl}
        alt={customAltText}
        name={customCategoryName}
        discountPercent={customDiscountPercent}
        variant='square'
        additionalClass='custom-class'
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
