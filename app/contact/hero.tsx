import Image from 'next/image'
import classes from './hero.module.css'
import assetGif from './assets/asset.gif'
import ContactForm from '@/components/form/contact-form'

const Hero = () => {
  const { hero, content, avatar, wrapper } = classes
  return (
    <div className={wrapper}>
      <h1>Contact</h1>
      <div className={hero}>
        <div className={content}>
          <ContactForm />
        </div>
        <div className={avatar}>
          <Image src={assetGif} width={320} height={320} alt='animated robot' />
        </div>
      </div>
    </div>
  )
}

export default Hero
