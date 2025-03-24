const getItem = (key: string) => {
  if (typeof window === 'undefined') return
  return localStorage.getItem(key)
}

const setItem = (key: string, value: any) => {
  if (typeof window === 'undefined') return

  return localStorage.setItem(key, value)
}

const removeItem = (key: string) => {
  if (typeof window === 'undefined') return

  return localStorage.removeItem(key)
}

const getJson = (key: string) => {
  if (typeof window === 'undefined') return

  const value = getItem(key)
  try {
    return value ? JSON.parse(value) : null
  } catch {
    return null
  }
}

const setJson = (key: string, value: any) => {
  if (typeof window === 'undefined') return

  return setItem(key, JSON.stringify(value))
}

const clearStore = () => {
  removeItem('accessToken')
  removeItem('refreshToken')
}

export const localStore = { clearStore, getItem, getJson, removeItem, setItem, setJson }
