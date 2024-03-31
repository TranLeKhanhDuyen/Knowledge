import DoctorDetailPage from '@pages/doctor-details/doctor'
import HomePage from '@pages/homepage/home'
import Login from '@pages/login/login'
import AllUsers from '@pages/manage/allusers/allusers'
import CreateUser from '@pages/manage/create-user/create-user'
import { FC } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Manager from '@pages/manage/manage';

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
      path: 'manage',
      element: <Manager />,
      children: [
        {
          index: true,
          element: <Navigate to='/manage/all-users' replace />
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
