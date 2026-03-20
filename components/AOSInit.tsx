'use client'

import { useEffect } from 'react'

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 700,
        once: true,
        offset: 60,
        easing: 'ease-out-cubic',
      })
    }
    initAOS()
  }, [])

  return null
}
