import axios from 'axios'

const saguaroApi = axios.create({
  baseURL: import.meta.env.VITE_SAGUARO_API_URL,
})

saguaroApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
export { saguaroApi }
