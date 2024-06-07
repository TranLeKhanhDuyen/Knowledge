import { Category } from '@services/models/category'
import axios, { Method } from 'axios'

export const axiosRequest = async <T>(
  url: string,
  method: Method,
  data?: Category
): Promise<T> => {
  const response = await axios({
    url,
    method,
    data,
    headers: { 'Content-Type': 'application/json' }
  })
  console.log('response', response)

  if (response.status !== 200) {
    throw new Error(
      `${method} request to ${url} failed: ${response.statusText}`
    )
  }

  return response.data
}
