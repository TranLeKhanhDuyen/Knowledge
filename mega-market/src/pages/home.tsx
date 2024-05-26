import {
  CardProduct,
  IconText,
  BannerSlider,
  Select,
  ImageSlider,
  CardCategory,
  HeadLine,
  Copyright
} from '@components'

import {
  bannerImages,
  brandImages,
  selectOptions,
  iconTexts,
  cardCategorySquare
} from '@constants'
import { Footer, Header } from '@layout'
import { Category } from '@services/models/category'
import { useEffect, useState } from 'react'
import { getCategories } from '@services/api/categories'
import { Product } from '@services/models/product'

import './home.css'

const HomePage = () => {
  // call api category
  const [categories, setCategories] = useState<Category[]>([])
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

  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])
  const [categoryName, setCategoryName] = useState<string>('')

  const handleClickCategory = (id: number) => {
    const category = categories.find((data) => data.id === id)
    setCategoryName(category?.name || '')
    setCategoryProducts(category?.products || [])
  }

  return (
    <>
      <div className='topbar'>
        <div className='container topbar-container '>
          <span className='topbar-title'>Welcome to worldwide Megamart! </span>
          <article className='topbar-contents'>
            {iconTexts.map((item, index) => (
              <IconText
                key={index}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
                additionalClass={item.additionalClass}
                type='primary'
              />
            ))}
          </article>
        </div>
      </div>

      <Header />

      <div className='select-container'>
        <div className='container select-wrapper'>
          {selectOptions.map((option, index) => (
            <Select
              key={index}
              options={[option]}
              onSelect={(value) => console.log(value)}
            />
          ))}
        </div>
      </div>

      <BannerSlider imageUrls={bannerImages} />

      <div className='container products'>
        <div>
          <HeadLine
            title='Grab the best deal on '
            subTitle={categoryName}
            additionalClass='primary'
          />
          <ul className='product-list'>
            {categoryProducts.map((product, index) => (
              <li key={index}>
                <CardProduct
                  imageUrl={product?.image?.[0]?.url ?? ''}
                  alt={product?.name ?? ''}
                  name={product?.name ?? ''}
                  salePrice={(
                    ((product?.regular_price ?? 0) * (product?.discount ?? 0)) /
                    100
                  ).toFixed(2)}
                  regularPrice={product?.regular_price ?? 0}
                  savePrice={product.save_price}
                  discountPercent={product?.discount?.toString() ?? '0'}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className=''>
          <HeadLine
            title='Shop From '
            subTitle='To Categories'
            additionalClass='primary'
          />
          <ul className='product-list categories-list'>
            {categories.map(
              (item, index) =>
                index < 6 && (
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
        </div>

        <div>
          <HeadLine
            title='Top '
            subTitle='Electrictonic'
            additionalClass='primary'
          />
          <ImageSlider
            additionalClass='banner-list'
            images={brandImages}
            displayCount={3}
          />
        </div>

        <div>
          <HeadLine
            title='Daily '
            subTitle='Essentials'
            additionalClass='primary'
          />
          <ul className='product-list categories-list'>
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
        </div>
      </div>

      <footer className='footer'>
        <Footer />
        <Copyright year={2024} companyName='Megamart' />
      </footer>
    </>
  )
}

export default HomePage
