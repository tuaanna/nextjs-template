import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes when necessary.
 *
 * @param {...ClassValue[]} inputs - An array of class names or arrays of class names to be combined.
 * @returns {string} - A single string containing the combined class names.
 */
/**
 * Combines multiple class names into a single string.
 *
 * @param {...ClassValue[]} inputs - The class names to combine.
 * @returns {string} The combined class names.
 *
 * @example
 * ```typescript
 * const className = cn('bg-red-500', 'text-white', 'p-4', 'hover:bg-red-700');
 * console.log(className); // Outputs: "bg-red-500 text-white p-4 hover:bg-red-700"
 * ```
 */

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
