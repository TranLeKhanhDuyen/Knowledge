import { useLocation } from 'react-router-dom'
import { MainLayout } from '@layout'
import CardProduct from '@components/CardProduct'
import './Product.css'

const ProductPage = () => {
  const location = useLocation()
  const { products } = location.state || { products: [] }

  return (
    <MainLayout>
      <div>
        <h1 className='title-page'>Products Lists</h1>
        <section className='container product-page'>
          {products?.map((product: any, index: any) => (
            <div key={index}>
              <CardProduct
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
                  ((product?.regular_price ?? 0) * (product?.discount ?? 0)) /
                    100
                }
              />
            </div>
          ))}
        </section>
      </div>
    </MainLayout>
  )
}

export default ProductPage
