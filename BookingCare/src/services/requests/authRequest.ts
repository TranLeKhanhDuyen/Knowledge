export interface SignInRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  userName: string
  firstName?: string
  lastName?: string
  phoneNumber?: string
  address?: string
  birthday?: string
  gender?: string
  avatar?: string
  role?: string
  title?: string

}
