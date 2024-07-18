'use client'
import { usePathname } from 'next/navigation'
import Link from '../link/link'
import classes from './navigation.module.css'

const Navigation = () => {
  const {
    'nav-items': navItems,
    nav,
    active,
    about,
    game,
    blog,
    contact,
  } = classes
  const pathname = usePathname()

  return (
    <nav className={nav}>
      <h2>
        <Link href='/'>Gui Bastos</Link>
      </h2>
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
    </nav>
  )
}

export default Navigation
