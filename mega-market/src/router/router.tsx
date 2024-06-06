import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { MainLayout } from '@layout'
import PurchaseOrderPage from '@pages/PurchaseOrder'
import { useUser } from '@services'
import { Spinner } from '@components'

const HomePage = lazy(() => import('@pages/Home'))
const CategoriesPage = lazy(() => import('@pages/Categories'))
const DetailPage = lazy(() => import('@pages/Detail'))
const ProductPage = lazy(() => import('@pages/Products'))
const CartPage = lazy(() => import('@pages/Cart'))
const LoginForm = lazy(() => import('@pages/Auth/Login'))
const RegisterForm = lazy(() => import('@pages/Auth/Register'))

const Router = () => {
  const { user } = useUser()
  return useRoutes([
    {
      path: '',
      children: [
        {
          path: '',
          element: (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'categories',
          element: (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <CategoriesPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'categories/:categoryId/products',
          element: (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <ProductPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'products',
          element: (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <ProductPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'product/:id',
          element: (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <DetailPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'cart',
          element: user ? (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <CartPage />
              </Suspense>
            </MainLayout>
          ) : (
            <Navigate to='/auth/login' replace />
          )
        },
        {
          path: 'purchase-history',
          element: user ? (
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <PurchaseOrderPage />
              </Suspense>
            </MainLayout>
          ) : (
            <Navigate to='/auth/login' replace />
          )
        }
      ]
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <Suspense fallback={<Spinner />}>
              <LoginForm />
            </Suspense>
          )
        },
        {
          path: 'register',
          element: (
            <Suspense fallback={<Spinner />}>
              <RegisterForm />
            </Suspense>
          )
        }
      ]
    }
  ])
}

export default Router
