import DoctorDetailPage from '@pages/doctor-details/doctor'
import HomePage from '@pages/homepage/home'
import Login from '@pages/login/login'
import AllUsers from '@pages/manager/allusers/allusers'
import CreateUser from '@pages/manager/create-user/create-user'
import Manager from '@pages/manager/manager'
import { FC } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const Router: FC = () => {
  return useRoutes([
    {
      path: '',
      element: <HomePage />
    },
    {
      path: 'doctor',
      element: <DoctorDetailPage />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'manager',
      element: <Manager />,
      children: [
        {
          index: true,
          element: <Navigate to='/manager/all-users' replace />
        },
        {
          path: 'all-users',
          element: <AllUsers />
        },
        {
          path: 'create-users',
          element: <CreateUser />
        }
      ]
    }
  ])
}

export default Router
