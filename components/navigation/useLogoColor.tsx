import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const useLogoColor = () => {
  const pathname = usePathname()

  useEffect(() => {
    let color = 'var(--contact-bg-color-70)'
    if (pathname.includes('/about')) {
      color = 'var(--about-bg-color-70)'
    } else if (pathname.includes('/game')) {
      color = 'var(--game-bg-color-70)'
    } else if (pathname.includes('/blog')) {
      color = 'var(--blog-bg-color-70)'
    }

    document.documentElement.style.setProperty('--nav-custom-color', color)
  }, [pathname])
}

export default useLogoColor
