import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ImageSlider from '.'

jest.mock('react-slick', () => {
  const Slider = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
  return Slider
})

jest.mock('@components/SliderDots', () => {
  return {
    __esModule: true,
    default: ({ images, currentSlide, handleDotClick }: any) => (
      <div>
        {images.map((_: any, index: number) => (
          <button
            key={index}
            data-testid={`dot-${index}`}
            onClick={() => handleDotClick(index)}
          >
            {currentSlide === index ? '●' : '○'}
          </button>
        ))}
      </div>
    )
  }
})

describe('ImageSlider component', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

  test('renders correctly with default props', () => {
    const { container, getByAltText } = render(<ImageSlider images={images} />)
    expect(container.firstChild).toHaveClass('slider-container')
    images.forEach((image, index) => {
      expect(getByAltText(`Slide ${index}`)).toHaveAttribute('src', image)
    })
  })

  test('renders the correct number of images', () => {
    const displayCount = 2
    const { container } = render(
      <ImageSlider images={images} displayCount={displayCount} />
    )
    const imageElements = container.querySelectorAll('img')
    expect(imageElements.length).toBe(images.length)
  })

  test('handleDotClick changes the current slide', () => {
    const { getByTestId } = render(<ImageSlider images={images} />)
    const dot = getByTestId('dot-1')
    fireEvent.click(dot)
    expect(dot.textContent).toBe('●')
  })

  test('renders SliderDots component correctly', () => {
    const { getByTestId } = render(<ImageSlider images={images} />)
    images.forEach((_, index) => {
      expect(getByTestId(`dot-${index}`)).toBeInTheDocument()
    })
  })
})
