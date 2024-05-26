import { Category } from './category'
import { Media } from './media'

export interface Product {
  id: number
  name?: string
  image?: Media[]
  category?: Category[]
  description?: string
  sale_price?: number
  regular_price?: number
  save_price: number
  discount?: number
  content_badge?: string
}
