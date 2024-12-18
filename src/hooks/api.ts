export const fetchWithTimeout = <T>(url: string, options: RequestInit = {}, timeout: number = 5000): Promise<T> => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    fetch(url, {
      ...options,
      signal: controller.signal,
    })
      .then((response) => {
        clearTimeout(timeoutId)
        if (!response.ok) {
          return reject(new Error(`HTTP error! Status: ${response.status}`))
        }
        return response.json()
      })
      .then(resolve)
      .catch((error) => {
        clearTimeout(timeoutId)
        if (error.name === 'AbortError') {
          return reject(new Error(`Request timed out after ${timeout}ms`))
        }
        return reject(error)
      })
  })
}
