import { BASE_URL } from '@constants/baseUrl'
import { useQuery } from 'react-query'
import { Category } from '@services'
import { axiosRequest } from './helper'

export const getCategories = () => {
  return useQuery<Category[]>('categories', async () => {
    return await axiosRequest<Category[]>(`${BASE_URL}/category`, 'GET')
  })
}
