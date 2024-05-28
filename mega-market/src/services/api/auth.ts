import { User } from '@services/models/user'
import { RegisterRequest, SignInRequest } from '@services/request/authRequest'

export const registerUser = async (data: RegisterRequest): Promise<User> => {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Register failed')
  }

  return response.json()
}

export const loginUser = async (data: SignInRequest): Promise<User> => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }

  return response.json() 
}
