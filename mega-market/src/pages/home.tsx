import { useEffect, useState } from 'react'
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

import { Category, getCategories, Product } from '@services'


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
            subTitle='Electrictonic'
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

      <footer className='footer'>
        <Footer />
        <Copyright year={2024} companyName='Megamart' />
      </footer>
    </>
  )
}

export default HomePage
