import Navigation from '../navigation/navigation'
import classes from './header.module.css'

const Header = () => {
  const { header } = classes
  return (
    <header className={header}>
      <Navigation />
    </header>
  )
}

export default Header
