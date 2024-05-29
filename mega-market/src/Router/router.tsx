import { LoginForm, RegisterForm } from '@pages'
import CartPage from '@pages/Cart'
import CategoriesPage from '@pages/Categories'
import DetailPage from '@pages/Detail'
import HomePage from '@pages/Home'
import ProductPage from '@pages/Products'
import { useRoutes } from 'react-router-dom'

const Router = () => {
  return useRoutes([
    {
      path: '',
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: 'categories',
          element: <CategoriesPage />
        },
        {
          path: 'products/:categoryId',
          element: <ProductPage />
        },
        {
          path: 'products',
          element: <ProductPage />
        },
        {
          path: 'product/:id',
          element: <DetailPage />
        },
        {
          path: 'cart',
          element: <CartPage />
        }
      ]
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <LoginForm />
        },
        {
          path: 'register',
          element: <RegisterForm />
        }
      ]
    }
  ])
}
export default Router
