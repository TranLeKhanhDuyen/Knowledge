import { useLocation, useNavigate } from 'react-router-dom'
import CardProduct from '@components/CardProduct'
import { Product } from '@services'
import './Product.css'

const ProductPage = () => {
  const location = useLocation()
  const { products } = location.state || { products: [] }
  const navigate = useNavigate()

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } })
  }

  return (
    <>
      <h1 className='title-page'>Products Lists</h1>
      <section className='container product-page'>
        {products?.map((product: any, index: number) => (
          <CardProduct
            key={index}
            imageUrl={product?.image?.[0]?.url ?? ''}
            alt={product?.name ?? ''}
            name={product?.name ?? ''}
            regularPrice={product?.regular_price ?? 0}
            discountPercent={product?.discount?.toString() ?? '0'}
            salePrice={(
              ((product?.regular_price ?? 0) * (product?.discount ?? 0)) /
              100
            ).toFixed(2)}
            savePrice={
              (product?.regular_price ?? 0) -
              ((product?.regular_price ?? 0) * (product?.discount ?? 0)) / 100
            }
            onClick={() => handleProductClick(product)}
          />
        ))}
      </section>
    </>
  )
}

export default ProductPage
