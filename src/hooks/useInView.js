import { useEffect, useRef, useState, useCallback } from 'react'

// Shared IntersectionObserver instance — all useInView hooks share a single
// observer to avoid creating many separate observers that each trigger
// independent layout calculations on mount (a major forced-reflow source).
const callbacks = new Map()
let sharedObserver = null

function getSharedObserver() {
  if (sharedObserver) return sharedObserver
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const cb = callbacks.get(entry.target)
        if (cb && entry.isIntersecting) {
          cb()
          sharedObserver.unobserve(entry.target)
          callbacks.delete(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  return sharedObserver
}

export default function useInView() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = useCallback(() => setIsVisible(true), [])

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = getSharedObserver()
    callbacks.set(current, handleVisible)
    observer.observe(current)

    return () => {
      observer.unobserve(current)
      callbacks.delete(current)
    }
  }, [handleVisible])

  return [ref, isVisible]
}
