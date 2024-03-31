import axiosInstance from '@axios'
import { SignInRequest } from './requests/signInRequest'
import { AuthResponse } from './responses/authResponse'

const signIn = async (signInRequest: SignInRequest): Promise<AuthResponse> => {
  const data = (await axiosInstance.post(
    '/api/v1/auth/sign-in',
    signInRequest
  )) as AuthResponse
  // save access token to local storage and set authorization header
  localStorage.setItem('accessToken', data.accessToken)
  axiosInstance.defaults.headers.common['Authorization'] =
    `Bearer ${data.accessToken}`
  return data
}

export const authService = {
  signIn
}
