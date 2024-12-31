import type { User } from './user.interfaces'

export interface RegisterAuth {
  userName: string
  password: string
  user: User
}
