import { BASE_URL } from '@constants/baseUrl'
import { Category } from '@services'
import { axiosRequest } from './helper'

export const getCategories = async (): Promise<Category[]> => {
  return axiosRequest<Category[]>(`${BASE_URL}/category`, 'GET')
}
