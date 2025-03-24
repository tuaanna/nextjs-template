'use client'

import axios, { AxiosRequestConfig } from 'axios'

export type RequestOptions = AxiosRequestConfig

export const makeApiDefault = (baseURL: string) => {
  const instance = axios.create()
  instance.defaults.baseURL = baseURL
  instance.defaults.timeout = 30000
  return instance
}
