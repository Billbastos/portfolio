import logoImg from '@/components/assets/header-logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <Image
        src={logoImg}
        alt='A server surrounded by magic sparkles.'
        priority
      />
      <h1>Welcome to this NextJS Course!</h1>
    </header>
  )
}

export default Header
