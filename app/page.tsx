import CardSection from '@/components/card/card-section'
import Hero from './home/hero'
import GamesList from '@/components/recipes/game-list/game-list'
import { getGames, getPosts } from '@/lib/queries'
import ThemeProvider from '../components/theme/ThemeProvider'

const Home = async () => {
  const games = await getGames()
  const posts = await getPosts()

  return (
    <ThemeProvider theme='dark'>
      <Hero />
      <GamesList
        list={games.slice(0, 3)}
        title='Featured Games'
        reverse={true}
        preview={true}
        color='var(--contact-bg-color-40)'
      />
      <CardSection
        cards={posts}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </ThemeProvider>
  )
}

export default Home
