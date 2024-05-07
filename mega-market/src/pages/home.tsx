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
  phoneProduct,
  selectOptions,
  iconTexts,
  cardCategoryCirlce,
  cardCategorySquare
} from '@constants'

import { Footer, Header } from '@layout'

import './home.css'

const HomePage = () => {
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
        <div className=''>
          <HeadLine
            title='Grab the best deal on '
            subTitle='Smartphones'
            additionalClass='primary'
          />
          <ul className='product-list'>
            {phoneProduct.map((product, index) => (
              <li key={index}>
                <CardProduct
                  imageUrl={product.imageUrl}
                  alt={product.alt}
                  name={product.name}
                  salePrice={product.salePrice}
                  regularPrice={product.regularPrice}
                  savePrice={product.savePrice}
                  discountPercent={product.discountPercent}
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
            {cardCategoryCirlce.map((item, index) => (
              <li key={index}>
                <CardCategory imageUrl={item.imageUrl} variant='circle' />
              </li>
            ))}
          </ul>
        </div>

        <div className=''>
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

        <div className=''>
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
        <Copyright year={2022} companyName='Megamart' />
      </footer>
    </>
  )
}

export default HomePage
