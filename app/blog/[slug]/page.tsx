import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './game-details.module.css'
import { games, posts } from '../../api/data'

const GameDetailsPage = ({ params }) => {
  const { wrapper } = classes

  const post = posts.find((post) => post.slug === params.slug)
  const { content, ...props } = post
  return (
    <>
      <Hero {...props} />
      <main className={wrapper}>{content}</main>
      <CardSection
        news={games}
        title='Featured Games'
        buttonTitle='View all games'
        buttonLink='/game'
      />
    </>
  )
}

export default GameDetailsPage
