export interface AuthResponse {
  id: string
  userName: string
  password: string
  user: UserRes
  rol: RolRes
  token: string
}

export interface RolRes {
  id: string
  name: string
}

export interface UserRes {
  id: string
  name: string
  lastname: string
  gender: string
  aboutme: string
  workspace: RolRes[]
}
