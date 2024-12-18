import { useEffect, useState } from 'react'

import { RefObject } from 'react'

/**
 * Custom hook to observe when a target element is in view using the Intersection Observer API.
 *
 * @template T - The type of the target element, extending from Element.
 * @param {RefObject<T>} target - A React ref object pointing to the target element to be observed.
 * @param {IntersectionObserverInit} [options={}] - Optional configuration options for the Intersection Observer.
 * @returns {boolean} - A boolean value indicating whether the target element is intersecting with the root.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * const isInView = useInView(ref, { threshold: 0.5 });
 *
 * useEffect(() => {
 *   if (isInView) {
 *     console.log('Element is in view');
 *   }
 * }, [isInView]);
 */

export const useInView = <T extends Element>(target: RefObject<T>, options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      setIsIntersecting(entries?.[0]?.isIntersecting)
    }

    observer?.disconnect()

    if (target?.current) {
      const _observer = new IntersectionObserver(callback, options)
      _observer.observe(target?.current)
      setObserver(_observer)
    }

    return () => {
      observer?.disconnect()
    }
  }, [options?.root, options?.rootMargin, options?.threshold, observer, target, options])

  return isIntersecting
}
