'use client'

import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      id="scrollTop"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 text-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-all z-50 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <i className="fas fa-arrow-up text-sm"></i>
    </button>
  )
}
