import cookie from 'js-cookie'

const setCookie = (name: string, value: any, days?: number) => {
  if (typeof window === 'undefined') return
  cookie.set(name, value, { path: '/', expires: days })
}

const removeCookie = (name: string) => {
  if (typeof window === 'undefined') return
  cookie.remove(name)
}

const getCookie = (name: string) => {
  if (typeof window === 'undefined') return
  return cookie.get(name)
}

const clearCookie = () => {
  removeCookie('accessToken')
  removeCookie('refreshToken')
}

const getCookieJson = (name: string) => {
  try {
    const value = getCookie(name)
    if (value) {
      return JSON.parse(value)
    }
    return null
  } catch {
    return null
  }
}

const setCookieJson = (name: string, value: any, days?: number) => {
  if (typeof window === 'undefined') return
  setCookie(name, JSON.stringify(value), days)
}

export const cookieStore = {
  setCookie,
  removeCookie,
  getCookie,
  clearCookie,
  getCookieJson,
  setCookieJson,
}
