import classes from './hero.module.css'
import ContactForm from '@/components/form/contact-form'

const Hero = () => {
  const { hero, content, wrapper } = classes
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
