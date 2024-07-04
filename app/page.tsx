import CardSection from '@/components/card/card-section'
import Hero from './home/hero'
import { games, news } from './api/data'
import GamesList from '@/components/recipes/game-list/game-list'

export default function Home() {
  return (
    <>
      <Hero />
      <GamesList
        list={games}
        title='Featured Games'
        reverse={true}
        preview={true}
      />
      <CardSection
        news={news}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}
