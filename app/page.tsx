import CardSection from '@/components/card/card-section'
import Hero from './home/hero'
import GamesList from '@/components/recipes/game-list/game-list'
import { getGames, getPosts } from '@/lib/queries'

const Home = async () => {
  const games = await getGames()
  const posts = await getPosts()

  return (
    <>
      <Hero />
      <GamesList
        list={games.slice(0, 3)}
        title='Featured Games'
        reverse={true}
        preview={true}
      />
      <CardSection
        cards={posts}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}

export default Home
