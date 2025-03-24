'use client'

import { localStore } from '@/utils/localStore'
import { get, set } from 'lodash'
import { cookieStore } from '../../cookie'

// Default request interceptors
export const defaultRequestInterceptors = (options: any) => {
  return options
}

// Access token request interceptors
export const accessTokenRequestInterceptors = (options: any) => {
  const token = cookieStore.getCookie('accessToken')
  if (token) {
    set(options, ['headers', 'Authorization'], 'Bearer ' + token)
  }
  return options
}

export const successResponseInterceptors = (response: any) => {
  return response
}

export const errorResponseInterceptors = (error: any) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const status = get(error, 'response.status')

  if (status === 401) {
    setTimeout(() => {
      localStore.setItem('accessToken', null)
      window.location.href = '/login'
    }, 1000)
  }
  return Promise.reject(error)
}
