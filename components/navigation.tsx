import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <h2>Gui Bastos</h2>
          </Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/game'>Games</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
