import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const useLogoColor = () => {
  const pathname = usePathname()

  useEffect(() => {
    let color = 'var(--contact-bg-color-60)'
    if (pathname.includes('/about')) {
      color = 'var(--about-bg-color-60)'
    } else if (pathname.includes('/game')) {
      color = 'var(--game-bg-color-60)'
    } else if (pathname.includes('/blog')) {
      color = 'var(--blog-bg-color-60)'
    }

    document.documentElement.style.setProperty('--nav-custom-color', color)
  }, [pathname])
}

export default useLogoColor
