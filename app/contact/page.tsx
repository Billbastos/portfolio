import CardSection from '@/components/card/card-section'
import Hero from './hero'
import { getPosts } from '@/lib/queries'

const ContactPage = async () => {
  const posts = await getPosts()
  return (
    <>
      <Hero />
      <CardSection
        cards={posts}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}

export default ContactPage
