import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom'
import CategoriesPage from '.'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}))

describe('CategoriesPage', () => {
  test('renders categories list', () => {
    const categories = [
      { id: 1, name: 'Category 1', image: 'category1.jpg', products: [] },
      { id: 2, name: 'Category 2', image: 'category2.jpg', products: [] },
    ]
    useLocation.arguments({ state: { categories } })
    render(<CategoriesPage />, { wrapper: MemoryRouter })

    expect(screen.getByText('Categories List Of')).toBeInTheDocument()
    expect(screen.getByText('Category 1')).toBeInTheDocument()
    expect(screen.getByText('Category 2')).toBeInTheDocument()
  })

  test('navigates to products page on category click', () => {
    const categories = [
      { id: 1, name: 'Category 1', image: 'category1.jpg', products: [] },
      { id: 2, name: 'Category 2', image: 'category2.jpg', products: [] },
    ]
    const navigate = jest.fn()
    useLocation.arguments({ state: { categories } })
    useNavigate.arguments(navigate)
    render(<CategoriesPage />, { wrapper: MemoryRouter })

    fireEvent.click(screen.getByText('Category 1'))
    expect(navigate).toHaveBeenCalledWith('/products/1', { state: { products: [] } })

    fireEvent.click(screen.getByText('Category 2'))
    expect(navigate).toHaveBeenCalledWith('/products/2', { state: { products: [] } })
  })
})
