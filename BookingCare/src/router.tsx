import { AuthGuard, GuestGuard, RoleBasedGuard } from '@guards'
import Login from '@pages/authen/login'
import Register from '@pages/authen/register'
import DoctorDetailPage from '@pages/doctor-details/doctor'
import HomePage from '@pages/homepage/home'
import AllUsers from '@pages/manage/all-users/all-users'
import CreateUser from '@pages/manage/create-user/create-user'
import DoctorSchedule from '@pages/manage/doctor-schedule/doctor-schedule'
import Manager from '@pages/manage/manage'
import { UserRole } from '@services/models/user-role'
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
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        }
      ]
    },
    {
      path: 'manage',
      element: (
        <AuthGuard>
          <RoleBasedGuard
            accessibleRoles={[
              UserRole.ADMIN,
              UserRole.SUPER_ADMIN,
              UserRole.DOCTOR
            ]}
          >
            <Manager />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        {
          index: true,
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <Navigate to='/manage/all-users' replace />
            </RoleBasedGuard>
          )
        },
        {
          path: 'all-users',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <AllUsers />
            </RoleBasedGuard>
          )
        },
        {
          path: 'create-users',
          element: (
            <RoleBasedGuard
              accessibleRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}
            >
              <CreateUser />
            </RoleBasedGuard>
          )
        },
        {
          path: 'doctor-schedule',
          element: (
            <RoleBasedGuard
              accessibleRoles={[
                UserRole.ADMIN,
                UserRole.SUPER_ADMIN,
                UserRole.DOCTOR
              ]}
            >
              <DoctorSchedule />
            </RoleBasedGuard>
          )
        }
      ]
    }
  ])
}

export default Router
