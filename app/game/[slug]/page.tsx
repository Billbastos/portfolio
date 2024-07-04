import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './game-details.module.css'
import { news, games } from '../../api/data'

const GameDetailsPage = ({ params }) => {
  const { wrapper } = classes

  const game = games.find((game) => game.slug === params.slug)
  const { content, ...props } = game
  return (
    <>
      <Hero {...props} />
      <main className={wrapper}>{content}</main>
      <CardSection
        news={news}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}

export default GameDetailsPage
