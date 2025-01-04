import { saguaroApi } from '@/api/saguaroApi'
import type { CheckStatusResponse } from '../interfaces'
import { isAxiosError } from 'axios'

interface CheckError {
  ok: false
}

export const checkStatusAction = async (): Promise<CheckStatusResponse | CheckError> => {
  try {
    const localToken = localStorage.getItem('token')
    const { data } = await saguaroApi.get<CheckStatusResponse>('/auth/check-status')

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
      }
    }
    console.log(error)
    throw error
  }
}
