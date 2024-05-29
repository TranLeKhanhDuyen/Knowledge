import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
} from '@constants'
import { Category, getCategories, Product } from '@services'
import { MainLayout } from '@layout'
import './home.css'

const HomePage = () => {
  const navigate = useNavigate()
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])
  const [categoryName, setCategoryName] = useState<string>('')
  const [categories, setCategories] = useState<Category[]>([])

  // call api category
  useEffect(() => {
    getCategories().then(async (data) => {
      setCategories(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (data != null) {
        const firstCategory = data[0]
        setCategoryName(firstCategory.name || '')
        setCategoryProducts(firstCategory.products || [])
      }
    })
  }, [])

  const handleClickCategory = (id: number) => {
    const category = categories.find((data) => data.id === id)
    setCategoryName(category?.name || '')
    setCategoryProducts(category?.products || [])
  }

  const handleNavigateToCategories = () => {
    navigate('/categories', { state: { categories } })
  }

  const handleNavigateProduct = () => {
    navigate('/products', { state: { products: categoryProducts } })
  }

  const handleClickProduct = (product: Product) => {
    console.log("product", product);
    navigate(`/product/${product.id}`, { state: { product } })
  }

  return (
    <MainLayout>
      <section className='select-container'>
        <div className='container select-wrapper'>
          {selectOptions.map((option, index) => (
            <Select
              key={index}
              options={[option]}
              onSelect={(value) => console.log(value)}
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
            {categoryProducts.map(
              (product, index) =>
                index < 5 && (
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
                )
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
            {categories.map(
              (item, index) =>
                index < 7 && (
                  <li key={index}>
                    <CardCategory
                      imageUrl={item.image}
                      name={item.name}
                      variant='circle'
                      onClick={() => handleClickCategory(item.id)}
                    />
                  </li>
                )
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
                  imageUrl={item.imageUrl}
                  name={item.name}
                  discountPercent={item.discountPercent}
                  variant='square'
                />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </MainLayout>
  )
}

export default HomePage
