import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Slider, { Settings } from 'react-slick'
import { MainLayout } from '@layout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@components'
import { useUser } from '@services'
import './Detail.css'

const DetailPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useUser()
  const { product } = location.state || { product: {} }
  const [primaryImage, setPrimaryImage] = useState(
    product?.image?.[0]?.url ?? ''
  )
  const [quantity, setQuantity] = useState(1)

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 3000
  }

  const handleAddToCart = () => {
    if (!user) {
      const confirmLogin = window.confirm(
        'Please log in to add to cart products. Do you want to log in now?'
      )
      if (confirmLogin) {
        navigate('/auth/login')
      }
      return
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push({ ...product, quantity })
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('The product has been added to cart')
  }

  const handleBuyNow = () => {
    if (!user) {
      const confirmLogin = window.confirm(
        'Please log in to buy products. Do you want to log in now?'
      )
      if (confirmLogin) {
        navigate('/auth/login')
      }
      return
    }
    alert('update later')
  }

  return (
    <MainLayout>
      <section className='container detail-page'>
        {product ? (
          <div className='detail-product'>
            <article className='image-product-container'>
              <figure className='image-primary-product-container'>
                <img
                  className='image-primary-product'
                  src={primaryImage}
                  alt={product.name}
                />
              </figure>

              <Slider {...settings}>
                {product?.image &&
                  product?.image?.map((image: any, index: any) => (
                    <img
                      className='image-product'
                      key={index}
                      src={image?.url ?? ''}
                      alt={product.name}
                      onClick={() => setPrimaryImage(image.url)}
                    />
                  ))}
              </Slider>
            </article>

            <article className='detail-content'>
              <h1 className='detail-title'>{product.name}</h1>
              <p>
                <span className='detail-label'>Regular Price: </span>
                <span className='detail-price regular-price'>
                  ₹{product.regular_price}
                </span>
              </p>
              <p>
                <span className='detail-label'>Discount: </span>
                <span className='detail-price'>{product.discount}%</span>
              </p>
              <p>
                <span className='detail-label'> Sale Price: </span>
                <span className='detail-price'>
                  ₹
                  {(
                    ((product?.regular_price ?? 0) * (product?.discount ?? 0)) /
                    100
                  ).toFixed(2)}
                </span>
              </p>
              <p>
                <span className='detail-label'>Save Price: </span>
                <span className='detail-price'>
                  ₹
                  {(product?.regular_price ?? 0) -
                    ((product?.regular_price ?? 0) * (product?.discount ?? 0)) /
                      100}
                </span>
              </p>
              <p>
                <span className='detail-label'>Description: </span>
                <span className='detail-description'>
                  {product.description}
                </span>
              </p>

              <article className='quantity-container'>
                <Button
                  label='-'
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                  additionalClass='quantity-btn quantity-btn-reduce'
                />
                <span className='quantity'>{quantity}</span>
                <Button
                  label='+'
                  onClick={() => setQuantity(quantity + 1)}
                  additionalClass='quantity-btn quantity-btn-increase'
                />
              </article>

              <article className='detail-actions'>
                <Button
                  additionalClass='secondary'
                  label='Add to cart'
                  onClick={handleAddToCart}
                />
                <Button
                  additionalClass='primary'
                  label='Buy now'
                  onClick={handleBuyNow}
                />
              </article>
            </article>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </section>
    </MainLayout>
  )
}

export default DetailPage
