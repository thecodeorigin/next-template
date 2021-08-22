import axios from 'axios'
import dev from '~/core/utils/dev'
import { jsonSafeParse } from './json'

// Pass auth instance with token to options when want to add Authorization header
export const http = (options) => {
  // Create a custom axios instance
  const _axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {},
  })
  // Add a request interceptor
  _axios.interceptors.request.use(
    (config) => {
      if (options?.auth) {
        config.headers.Authorization = 'Bearer ' + options?.auth?.token
      }
      dev.log('API executed', config)
      // Must return config
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    }
  )
  _axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (options?.auth) {
        // TODO: Handle token expired
      }
      return Promise.reject(error)
    }
  )

  return _axios
}

export const getAuthFromContext = (context) => {
  const auth = context?.req?.cookies?.auth || context?.ctx?.req?.cookies?.auth || null

  return jsonSafeParse(auth) || auth
}