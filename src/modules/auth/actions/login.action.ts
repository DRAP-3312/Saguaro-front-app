import { saguaroApi } from '@/api/saguaroApi'
import { isAxiosError } from 'axios'
import type { AuthResponse, UserRes } from '../interfaces'
import type { LoginAuth } from '@/interfaces'

interface LoginError {
  ok: false
  message: string
}

interface LoginSuccess {
  ok: true
  user: UserRes
  token: string
}

export const loginAction = async (login: LoginAuth): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await saguaroApi.post<AuthResponse>('/auth/login', login)

    return {
      ok: true,
      user: data.user,
      token: data.token,
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
        message: 'Usuario o contraseña incorrectos',
      }
    }

    console.log(error)
    throw new Error('No se pudo realizar la petición')
  }
}
