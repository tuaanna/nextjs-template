import { useEffect, useState } from 'react'

import { RefObject } from 'react'

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
