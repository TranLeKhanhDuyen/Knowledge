import axios from '../axios'
import { User } from './models/user'

export const handleLoginApi = (email: string, password: string) => {
  return axios.post('/api/login', { email, password })
}

export const getAllUsers = (inputId: string) => {
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

export const CreateNewUserServiceAPI = (data: string) => {
  return axios.post('/api/create-new-user', data)
}

export const DeleteUserServiceAPI = (userId: string) => {
  return axios.delete('/api/delete-user', {
    data: {
      id: userId
    }
  })
}

export const EditUserServiceAPI = (dataEdit: string) => {
  return axios.put('/api/edit-user', dataEdit)
}

const getProfile = async (): Promise<User> => {
  return axios.get(`/api/v1/users/me`)
}

export const userService = { getProfile }