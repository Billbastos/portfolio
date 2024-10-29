import Image from 'next/image'
import classes from './hero.module.css'
import assetGif from './assets/asset.gif'
import ContactForm from '@/components/form/contact-form'

const Hero = () => {
  const { hero, content, avatar, wrapper } = classes
  return (
    <main className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>Contact</h1>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default Hero
