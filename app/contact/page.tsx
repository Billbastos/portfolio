import CardSection from '@/components/card/card-section'
import Hero from './hero'
import { news } from '../api/data'

const ContactPage = () => {
  return (
    <>
      <Hero />
      <CardSection
        news={news}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}

export default ContactPage
