import { isEqual } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

export type UseLocalStorageReturn<T> = {
  state: T
  canReset: boolean
  resetState: () => void
  setState: (updateState: T | Partial<T>) => void
  setField: (name: keyof T, updateValue: T[keyof T]) => void
}

/**
 * Custom hook to manage state with local storage.
 *
 * @template T - The type of the state.
 * @param {string} key - The key to store the state in local storage.
 * @param {T} initialState - The initial state value.
 * @returns {UseLocalStorageReturn<T>} An object containing the state and functions to manipulate it.
 *
 * @example
 * ```typescript
 * const { state, setState, setField, resetState, canReset } = useLocalStorage('user', { name: '', age: 0 });
 *
 * // Update the entire state
 * setState({ name: 'John', age: 30 });
 *
 * // Update a specific field
 * setField('name', 'Jane');
 *
 * // Reset the state to initial value
 * resetState();
 *
 * // Check if the state can be reset
 * console.log(canReset); // true or false
 * ```
 */

export const useLocalStorage = <T>(key: string, initialState: T): UseLocalStorageReturn<T> => {
  const [state, set] = useState(initialState)

  const multiValue = initialState && typeof initialState === 'object'

  const canReset = !isEqual(state, initialState)

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
          setStorage<T>(key, { ...prevValue, ...updateState })
          return { ...prevValue, ...updateState }
        })
      } else {
        setStorage<T>(key, updateState as T)
        set(updateState as T)
      }
    },
    [key, multiValue]
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
    set(initialState)
    removeStorage(key)
  }, [initialState, key])

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

export const getStorage = (key: string) => {
  try {
    const result = localStorage.getItem(key)

    if (result) {
      return JSON.parse(result)
    }
  } catch (error) {
    console.error('Error while getting from storage:', error)
  }

  return null
}

export const setStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value)
    window.localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.error('Error while setting storage:', error)
  }
}

export const removeStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error('Error while removing from storage:', error)
  }
}
