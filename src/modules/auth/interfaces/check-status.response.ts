import type { UserRes } from './login.response'

export interface CheckStatusResponse {
  ok: boolean
  message: string
  user: UserRes
  token: string
}
