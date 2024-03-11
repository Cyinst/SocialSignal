import axios from "axios"

const backend = process.env.NEXT_PUBLIC_BACKEND || "/api"

const instance = axios.create({ baseURL: backend, timeout: 2000 })
instance.interceptors.response.use(
  (response) => response.data,
  (err) => {
    Promise.reject(err)
  }
)

export default instance
