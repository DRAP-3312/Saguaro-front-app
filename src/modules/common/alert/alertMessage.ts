import { POSITION, TYPE, useToast } from 'vue-toastification'
import type { ToastOptions } from 'vue-toastification/dist/types/types'

const toast = useToast()
const config: Partial<ToastOptions> = {
  position: POSITION.TOP_CENTER,
}
const success = (message: string) => {
  return toast.success(message, { ...config, type: TYPE.SUCCESS })
}

const warning = (message: string) => {
  return toast.warning(message, { ...config, type: TYPE.WARNING })
}

const info = (message: string) => {
  return toast.info(message, { ...config, type: TYPE.INFO })
}

const error = (message: string) => {
  return toast.error(message, { ...config, type: TYPE.ERROR })
}
const welcome = (message: string) => {
  return toast.success(message, { ...config, type: TYPE.SUCCESS, timeout: 1000, icon: false })
}

export const toastCustom = {
  success,
  warning,
  info,
  error,
  welcome,
}
