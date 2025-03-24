import { env } from '@/configs/env'
import {
  accessTokenRequestInterceptors,
  defaultRequestInterceptors,
  errorResponseInterceptors,
  successResponseInterceptors,
} from './interceptor'
import { makeApiDefault } from './make'

export const api = makeApiDefault(env.ROOT_URL)

api.interceptors.request.use(defaultRequestInterceptors)
api.interceptors.request.use(accessTokenRequestInterceptors)

api.interceptors.response.use(successResponseInterceptors)
api.interceptors.response.use(errorResponseInterceptors)
