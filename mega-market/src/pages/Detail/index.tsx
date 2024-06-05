import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button, showToast, Toast } from '@components'
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

  const handleAddToCart = useCallback(() => {
    if (!user) navigate('/auth/login')

    const cartKey = `cart_${user?.userName}`
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]')
    const existingProductIndex = cart.findIndex(
      (item: any) => item.id === product.id
    )

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity
    } else {
      cart.push({ ...product, primaryImage, quantity })
    }

    localStorage.setItem(cartKey, JSON.stringify(cart))
    showToast('The product has been added to cart', 'success')
  }, [user, product, primaryImage, quantity, navigate])

  const handleBuyNow = useCallback(() => {
    if (!user) navigate('/auth/login')

    const cartKey = `cart_${user?.userName}`
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]')
    const existingProductIndex = cart.findIndex(
      (item: any) => item.id === product.id
    )

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity
      cart[existingProductIndex].isSelect = true
    } else {
      cart.push({ ...product, primaryImage, quantity, isSelect: true })
    }

    localStorage.setItem(cartKey, JSON.stringify(cart))
    navigate('/cart')
  }, [user, product, primaryImage, quantity, navigate])

  return (
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
                product?.image?.map((image: any, index: string) => (
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
                  product.regular_price -
                  (product.regular_price * product.discount) / 100
                ).toFixed(2)}
              </span>
            </p>
            <p>
              <span className='detail-label'>Save Price: </span>
              <span className='detail-price'>
                ₹
                {(
                  product.regular_price -
                  (product.regular_price * product.discount) / 100
                ).toFixed(2)}
              </span>
            </p>
            <p>
              <span className='detail-label'>Description: </span>
              <span className='detail-description'>{product.description}</span>
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
      <Toast />
    </section>
  )
}

export default DetailPage
