import { render } from '@testing-library/react'
import CardProduct from '.'

describe('CardProduct component', () => {
  test('renders product details correctly', () => {
    const imageUrl = '@assets/images/products/phone-2.svg'
    const alt = 'Product Image 3'
    const name = 'Special Product'
    const salePrice = 80
    const regularPrice = 100
    const savePrice = 20
    const discountPercent = '20%'
    const contentBadge = 'Special Offer'
    const additionalClass = 'special-product'

    const { getByAltText, getByText, getByTestId } = render(
      <CardProduct
        imageUrl={imageUrl}
        alt={alt}
        name={name}
        salePrice={salePrice}
        regularPrice={regularPrice}
        savePrice={savePrice}
        discountPercent={discountPercent}
        contentBadge={contentBadge}
        additionalClass={additionalClass}
      />
    )

    expect(getByAltText(alt)).toBeInTheDocument()
    expect(getByText(name)).toBeInTheDocument()
    expect(getByText(`₹${regularPrice}`)).toBeInTheDocument()
    expect(getByText(`₹${salePrice}`)).toBeInTheDocument()
    expect(getByText(`Save - ₹${savePrice}`)).toBeInTheDocument()
    expect(getByText(`UP to ${discountPercent} OFF`)).toBeInTheDocument()
    expect(getByText(contentBadge)).toBeInTheDocument()

    const productContainer = getByTestId('card-product')
    expect(productContainer).toHaveClass(additionalClass)
  })

  test('renders correctly with default props', () => {
    const imageUrl = '@assets/images/products/phone-2.svg'
    const alt = 'Product Image'
    const name = 'Sample Product'
    const salePrice = 100
    const regularPrice = 120
    const savePrice = 20
    const discountPercent = '10%'

    const { container } = render(
      <CardProduct
        imageUrl={imageUrl}
        alt={alt}
        name={name}
        salePrice={salePrice}
        regularPrice={regularPrice}
        savePrice={savePrice}
        discountPercent={discountPercent}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders correctly with custom props', () => {
    const imageUrl =
      'https://www.lg.com/vn/images/tu-lanh/md07549194/gallery1/InstaView.jpg'
    const alt = 'Product Image 2'
    const name = 'Another Product'
    const salePrice = 90
    const regularPrice = 110
    const savePrice = 20
    const discountPercent = '15%'
    const contentBadge = 'SALE'
    const additionalClass = 'custom-class'

    const { container } = render(
      <CardProduct
        imageUrl={imageUrl}
        alt={alt}
        name={name}
        salePrice={salePrice}
        regularPrice={regularPrice}
        savePrice={savePrice}
        discountPercent={discountPercent}
        contentBadge={contentBadge}
        additionalClass={additionalClass}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
