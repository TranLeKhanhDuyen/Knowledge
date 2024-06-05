import { useNavigate } from 'react-router-dom'
import { useState, useMemo, useCallback } from 'react'
import {
  CardProduct,
  BannerSlider,
  Select,
  ImageSlider,
  CardCategory,
  HeadLine,
  Spinner
} from '@components'
import {
  bannerImages,
  brandImages,
  selectOptions,
  cardCategorySquare
} from '@mocks'
import { getCategories, getCategoryProducts, Product } from '@services'
import './home.css'

const HomePage = () => {
  const navigate = useNavigate()

  const { data: categories, isLoading: categoriesLoading } = getCategories()

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  )

  const { data: categoryProducts, isLoading: productsLoading } =
    getCategoryProducts(selectedCategoryId ?? 0)

  const selectedCategory = useMemo(() => {
    return categories?.find((category) => category.id === selectedCategoryId)
  }, [categories, selectedCategoryId])

  const handleClickCategory = useCallback((id: number) => {
    setSelectedCategoryId(id)
  }, [])

  const handleNavigateToCategories = useCallback(() => {
    navigate('/categories', { state: { categories } })
  }, [navigate, categories])

  //TO FIX: categories/id/products
  const handleNavigateProduct = useCallback(() => {
    navigate('/products', { state: { products: categoryProducts } })
  }, [navigate, categoryProducts])

  const handleClickProduct = useCallback(
    (product: Product) => {
      navigate(`/product/${product.id}`, { state: { product } })
    },
    [navigate]
  )

  return (
    <>
      <section className='select-container'>
        <div className='container select-wrapper'>
          {selectOptions.map((option, index) => (
            <Select
              key={index}
              options={[option]}
              onSelect={(value) => console.log(value)}
              icon='user'
              additionalClass='select-category'
            />
          ))}
        </div>
      </section>

      <section>
        <BannerSlider imageUrls={bannerImages} />
      </section>

      <section className='container products'>
        <article>
          <HeadLine
            title='Grab the best deal on '
            subTitle={selectedCategory?.name || ''}
            additionalClass='primary'
            onClick={handleNavigateProduct}
          />
          <ul className='list products-list'>
            {productsLoading ? (
              <Spinner />
            ) : (
              categoryProducts
                ?.slice(0, 5)
                .map((product: Product, index: number) => (
                  <li key={index}>
                    <CardProduct
                      imageUrl={product?.image?.[0]?.url ?? ''}
                      alt={product?.name ?? ''}
                      name={product?.name ?? ''}
                      regularPrice={product?.regular_price ?? 0}
                      discountPercent={product?.discount?.toString() ?? '0'}
                      salePrice={(
                        ((product?.regular_price ?? 0) *
                          (product?.discount ?? 0)) /
                        100
                      ).toFixed(2)}
                      savePrice={
                        (product?.regular_price ?? 0) -
                        ((product?.regular_price ?? 0) *
                          (product?.discount ?? 0)) /
                          100
                      }
                      onClick={() => handleClickProduct(product)}
                    />
                  </li>
                ))
            )}
          </ul>
        </article>

        <article>
          <HeadLine
            title='Shop From '
            subTitle='To Categories'
            additionalClass='primary'
            navigateTo='categories'
            onClick={handleNavigateToCategories}
          />
          <ul className='list categories-list'>
            {categoriesLoading ? (
               <Spinner />
            ) : (
              categories?.slice(0, 7).map((item) => (
                <li key={item.id}>
                  <CardCategory
                    imageUrl={item.image}
                    name={item.name}
                    variant='circle'
                    onClick={() => handleClickCategory(item.id)}
                  />
                </li>
              ))
            )}
          </ul>
        </article>

        <article>
          <HeadLine
            title='Top '
            subTitle='Electronic'
            additionalClass='primary'
          />
          <ImageSlider
            additionalClass='banner-list'
            images={brandImages}
            displayCount={3}
          />
        </article>

        <article>
          <HeadLine
            title='Daily '
            subTitle='Essentials'
            additionalClass='primary'
          />
          <ul className='list categories-list'>
            {cardCategorySquare.map((item, index) => (
              <li key={index}>
                <CardCategory
                  imageUrl={item.image}
                  name={item.name}
                  discountPercent={item.discountPercent}
                  variant='square'
                />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}

export default HomePage
