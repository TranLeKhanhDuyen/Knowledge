import LoginForm from '@pages/Authen/Login'
import RegisterForm from '@pages/Authen/Register'
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
