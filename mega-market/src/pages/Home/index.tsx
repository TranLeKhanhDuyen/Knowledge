import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import {
  CardProduct,
  BannerSlider,
  Select,
  ImageSlider,
  CardCategory,
  HeadLine
} from '@components'
import {
  bannerImages,
  brandImages,
  selectOptions,
  cardCategorySquare
} from '@mocks'
import { getCategories, Product } from '@services'
import { calculateSalePrice, calculateSavePrice } from '@utils/price'
import './Home.css'

const HomePage = () => {
  const navigate = useNavigate()
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])
  const [categoryName, setCategoryName] = useState<string>('')

  const { data: categories } = getCategories()

  useEffect(() => {
    if (categories && categories.length > 0) {
      const firstCategory = categories[0]
      setCategoryName(firstCategory?.name || '')
      setCategoryProducts(firstCategory?.products || [])
    }
  }, [categories])

  const handleClickCategory = (id: number) => {
    const category = categories?.find((data) => data.id === id)
    setCategoryName(category?.name || '')
    setCategoryProducts(category?.products || [])
  }

  const handleNavigateToCategories = useCallback(() => {
    navigate('/categories', { state: { categories } })
  }, [navigate, categories])

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
            subTitle={categoryName}
            additionalClass='primary'
            onClick={handleNavigateProduct}
          />
          <ul className='list products-list'>
            {categoryProducts
              ?.slice(0, 5)
              .map((product: Product, index: number) => (
                <li key={index}>
                  <CardProduct
                    imageUrl={product?.image?.[0]?.url ?? ''}
                    alt={product?.name ?? ''}
                    name={product?.name ?? ''}
                    regularPrice={product?.regular_price ?? 0}
                    discountPercent={product?.discount?.toString() ?? '0'}
                    salePrice={calculateSalePrice(
                      product?.regular_price ?? 0,
                      product?.discount ?? 0
                    )}
                    savePrice={calculateSavePrice(
                      product?.regular_price ?? 0,
                      product?.discount ?? 0
                    )}
                    onClick={() => handleClickProduct(product)}
                  />
                </li>
              ))}
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
            {categories?.slice(0, 7).map((item) => (
              <li key={item.id}>
                <CardCategory
                  imageUrl={item.image}
                  name={item.name}
                  variant='circle'
                  onClick={() => handleClickCategory(item.id)}
                />
              </li>
            ))}
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
