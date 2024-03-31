import { Gender } from './gender'
import { UserRole } from './user-role'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  title?: string
  address: string
  phoneNumber: string
  dob?: Date
  role: UserRole
  gender: Gender
  avatar?: string
  specialtyId?: number
  createdAt: Date
  updatedAt: Date
}
