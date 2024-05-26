import LoginForm from '@pages/auth/login'
import RegisterForm from '@pages/auth/register'
import HomePage from '@pages/home'
import { useRoutes } from 'react-router-dom'

const Router = () => {
  return useRoutes([
    {
      path: '',
      element: <HomePage />
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
