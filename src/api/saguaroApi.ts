import axios from 'axios'

const saguaroApi = axios.create({
  baseURL: import.meta.env.VITE_SAGUARO_API_URL,
})
