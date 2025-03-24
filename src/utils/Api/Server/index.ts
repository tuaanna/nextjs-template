/**
 * Fetches a resource from the network with a specified timeout.
 *
 * @template T - The expected response type.
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options={}] - The options for the fetch request.
 * @param {number} [timeout=5000] - The timeout duration in milliseconds.
 * @returns {Promise<T>} A promise that resolves with the fetched data or rejects with an error.
 *
 * @throws {Error} If the response status is not OK (2xx).
 * @throws {Error} If the request times out.
 *
 * @example
 * fetchWithTimeout<User>('https://api.example.com/user', { method: 'GET' }, 3000)
 *   .then((data) => console.log(data))
 *   .catch((error) => console.error(error));
 */

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
