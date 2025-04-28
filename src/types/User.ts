export type User = {
  username: string
  password: string
  fullName: string
  email: string
}

export interface UserPublic {
  username: string
  fullName: string
  email: string
}