import logo from '@/components/assets/header-logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo.src} alt='A server surrounded by magic sparkles.' />
      <h1>Welcome to this NextJS Course!</h1>
    </header>
  )
}

export default Header
