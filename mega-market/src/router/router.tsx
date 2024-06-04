import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { MainLayout } from '@layout'
import PurchaseOrderPage from '@pages/PurchaseOrder'

const HomePage = lazy(() => import('@pages/Home'))
const CategoriesPage = lazy(() => import('@pages/Categories'))
const DetailPage = lazy(() => import('@pages/Detail'))
const ProductPage = lazy(() => import('@pages/Products'))
const CartPage = lazy(() => import('@pages/Cart'))
const LoginForm = lazy(() => import('@pages/Auth/Login'))
const RegisterForm = lazy(() => import('@pages/Auth/Register'))

const Router = () => {
  return useRoutes([
    {
      path: '',
      children: [
        {
          path: '',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'categories',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <CategoriesPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'categories/:categoryId/products',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <ProductPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'products',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <ProductPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'product/:id',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <DetailPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'cart',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <CartPage />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: 'purchase-history',
          element: (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <PurchaseOrderPage />
              </Suspense>
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
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginForm />
            </Suspense>
          )
        },
        {
          path: 'register',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterForm />
            </Suspense>
          )
        }
      ]
    }
  ])
}

export default Router
