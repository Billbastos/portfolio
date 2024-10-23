'use client'
import { usePathname } from 'next/navigation'
import Link from '../link/link'
import classes from './navigation.module.css'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navigation = () => {
  const { nav } = classes
  return (
    <nav className={nav}>
      <h2>
        <Link href='/'>Gui Bastos</Link>
      </h2>
      <WebLinks />
      <MobileLinks />
    </nav>
  )
}

const MobileLinks = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const {
    'mobile-items': navItems,
    'mobile-nav': mobileNav,
    active,
    about,
    game,
    blog,
    contact,
  } = classes
  return (
    <div className={navItems}>
      <div className={mobileNav}>
        <FaBars
          size={24}
          onClick={() => setOpen(!open)}
          aria-label='Open Navigation'
        />
      </div>
      {open && (
        <ul>
          <li>
            <Link
              className={`${about} ${pathname === '/about' && active}`}
              href='/about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${game} ${pathname.includes('/game') && active}`}
              href='/game'
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              className={`${blog} ${pathname.includes('/blog') && active}`}
              href='/blog'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`${contact} ${pathname === '/contact' && active}`}
              href='/contact'
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

const WebLinks = () => {
  const pathname = usePathname()

  const { 'nav-items': navItems, active, about, game, blog, contact } = classes
  return (
    <ul className={navItems}>
      <li>
        <Link
          className={`${about} ${pathname === '/about' && active}`}
          href='/about'
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={`${game} ${pathname.includes('/game') && active}`}
          href='/game'
        >
          Games
        </Link>
      </li>
      <li>
        <Link
          className={`${blog} ${pathname.includes('/blog') && active}`}
          href='/blog'
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className={`${contact} ${pathname === '/contact' && active}`}
          href='/contact'
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
