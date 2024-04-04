import axiosInstance from '@axios'
import { RegisterRequest, SignInRequest } from './requests/authRequest'
import { AuthResponse } from './responses/authResponse'

export const ACCESS_STORAGE_KEY = 'ACCESS_TOKEN'

const signIn = async (signInRequest: SignInRequest): Promise<AuthResponse> => {
  const data = (await axiosInstance.post(
    '/api/v1/auth/sign-in',
    signInRequest
  )) as AuthResponse
  // save access token to local storage and set authorization header
  localStorage.setItem(ACCESS_STORAGE_KEY, data.accessToken)
  axiosInstance.defaults.headers.common['Authorization'] =
    `Bearer ${data.accessToken}`
  return data
}

const register = async (
  registerRequest: RegisterRequest
): Promise<AuthResponse> => {
  const response = await axiosInstance.post(
    '/api/v1/auth/register',
    registerRequest
  )
  const data: AuthResponse = response.data

  localStorage.setItem(ACCESS_STORAGE_KEY, data.accessToken)
  axiosInstance.defaults.headers.common['Authorization'] =
    `Bearer ${data.accessToken}`

  return data
}

export const authService = {
  signIn,
  register
}
