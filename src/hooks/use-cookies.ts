import { isEqual } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

export type UseCookiesReturn<T> = {
  state: T
  canReset: boolean
  resetState: () => void
  setState: (updateState: T | Partial<T>) => void
  setField: (name: keyof T, updateValue: T[keyof T]) => void
}

/**
 * Custom hook to manage state with cookies.
 *
 * @template T - The type of the state.
 * @param {string} key - The key to store the state in cookies.
 * @param {T} initialState - The initial state value.
 * @param {T} defaultValues - The default values to reset the state.
 * @param {Object} [options] - Optional settings.
 * @param {number} [options.daysUntilExpiration] - Number of days until the cookie expires.
 * @returns {UseCookiesReturn<T>} - An object containing the state and functions to manipulate it.
 *
 * @example
 * ```typescript
 * const { state, setState, setField, resetState, canReset } = useCookies('user', { name: '', age: 0 }, { name: '', age: 0 });
 *
 * // Update the entire state
 * setState({ name: 'John', age: 30 });
 *
 * // Update a specific field
 * setField('name', 'Jane');
 *
 * // Reset the state to default values
 * resetState();
 *
 * // Check if the state can be reset
 * console.log(canReset); // true or false
 * ```
 */

export const useCookies = <T>(
  key: string,
  initialState: T,
  defaultValues: T,
  options?: {
    daysUntilExpiration?: number
  }
): UseCookiesReturn<T> => {
  const [state, set] = useState(initialState)

  const multiValue = initialState && typeof initialState === 'object'

  const canReset = !isEqual(state, defaultValues)

  useEffect(() => {
    const restoredValue: T = getStorage(key)

    if (restoredValue) {
      if (multiValue) {
        set((prevValue) => ({ ...prevValue, ...restoredValue }))
      } else {
        set(restoredValue)
      }
    }
  }, [key, multiValue])

  const setState = useCallback(
    (updateState: T | Partial<T>) => {
      if (multiValue) {
        set((prevValue) => {
          setStorage<T>(key, { ...prevValue, ...updateState }, options?.daysUntilExpiration)
          return { ...prevValue, ...updateState }
        })
      } else {
        setStorage<T>(key, updateState as T, options?.daysUntilExpiration)
        set(updateState as T)
      }
    },
    [key, multiValue, options?.daysUntilExpiration]
  )

  const setField = useCallback(
    (name: keyof T, updateValue: T[keyof T]) => {
      if (multiValue) {
        setState({ [name]: updateValue } as Partial<T>)
      }
    },
    [multiValue, setState]
  )

  const resetState = useCallback(() => {
    removeStorage(key)
    set(defaultValues)
  }, [defaultValues, key])

  const memoizedValue = useMemo(
    () => ({
      state,
      setState,
      setField,
      resetState,
      canReset,
    }),
    [canReset, resetState, setField, setState, state]
  )

  return memoizedValue
}

const getStorage = (key: string) => {
  try {
    const keyName = `${key}=`

    const cDecoded = decodeURIComponent(document.cookie)

    const cArr = cDecoded.split('; ')

    let res

    cArr.forEach((val) => {
      if (val.indexOf(keyName) === 0) res = val.substring(keyName.length)
    })

    if (res) {
      return JSON.parse(res)
    }
  } catch (error) {
    console.error('Error while getting from cookies:', error)
  }

  return null
}

const setStorage = <T>(key: string, value: T, daysUntilExpiration: number = 0) => {
  try {
    const serializedValue = encodeURIComponent(JSON.stringify(value))
    let cookieOptions = `${key}=${serializedValue}; path=/`

    if (daysUntilExpiration > 0) {
      const expirationDate = new Date(Date.now() + daysUntilExpiration * 24 * 60 * 60 * 1000)
      cookieOptions += `; expires=${expirationDate.toUTCString()}`
    }

    document.cookie = cookieOptions
  } catch (error) {
    console.error('Error while setting cookie:', error)
  }
}

const removeStorage = (key: string) => {
  try {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  } catch (error) {
    console.error('Error while removing cookie:', error)
  }
}
