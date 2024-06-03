import { MainLayout } from '@layout'
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
          element: (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )
        },
        {
          path: 'categories',
          element: (
            <MainLayout>
              <CategoriesPage />
            </MainLayout>
          )
        },
        {
          path: 'products/:categoryId',
          element: (
            <MainLayout>
              <ProductPage />
            </MainLayout>
          )
        },
        {
          path: 'products',
          element: (
            <MainLayout>
              <ProductPage />
            </MainLayout>
          )
        },
        {
          path: 'product/:id',
          element: (
            <MainLayout>
              <DetailPage />
            </MainLayout>
          )
        },
        {
          path: 'cart',
          element: (
            <MainLayout>
              <CartPage />
            </MainLayout>
          )
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
