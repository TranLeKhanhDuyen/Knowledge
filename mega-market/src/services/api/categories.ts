import { BASE_URL } from '@constants/baseUrl'
import { Category } from '@services/models/category'
import axios from 'axios'

export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get(`${BASE_URL}/category`)

  if (response.status !== 200) {
    throw new Error('Get categories failed')
  }
  return response.data
}
