import axios from '../axios'

export const handleLoginApi = async (email: string, password: string) => {
  try {
    const res = await axios.post('/api/login', { email, password })
    console.log('res: ', res)
    return res
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
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
