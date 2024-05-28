export interface SignInRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  userName: string
  confirmPassword?: string
}
