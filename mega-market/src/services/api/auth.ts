import { User, RegisterRequest, SignInRequest } from '@services'
import { axiosRequest } from './helper'

export const registerUser = async (data: RegisterRequest): Promise<User> => {
  return axiosRequest<User>('/api/register', 'POST', data)
}

export const loginUser = async (data: SignInRequest): Promise<User> => {
  return axiosRequest<User>('/api/login', 'POST', data)
}
