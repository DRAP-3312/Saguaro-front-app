import { saguaroApi } from '@/api/saguaroApi'
import type { RegisterAuth } from '@/interfaces'
import { isAxiosError } from 'axios'

interface LoginError {
  ok: boolean
  message: string
}

interface LoginSuccess {
  ok: boolean
  message: string
}

export const registerAction = async (
  register: RegisterAuth,
): Promise<LoginError | LoginSuccess> => {
  try {
    const request = await saguaroApi.post<LoginSuccess>('/auth/register', register)

    return request.data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log({ axiosErrorrrr: error })
      return {
        ok: false,
        message: 'Creacion fallida',
      }
    }

    throw error
  }
}
