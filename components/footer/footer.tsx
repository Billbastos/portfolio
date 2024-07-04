import Link from '../link/link'
import classes from './footer.module.css'
import Social from './social'

const Footer = () => {
  const { footer, divider } = classes

  return (
    <footer className={footer}>
      <div>
        <Link href='/'>
          <h2>Gui Bastos</h2>
        </Link>
        <ul>
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
      </div>
      <div className={divider} />
      <Social />
    </footer>
  )
}

export default Footer
