import { getGames } from '@/lib/queries'
import GamesList from '@/components/recipes/game-list/game-list'

export const metadata = {
  title: 'Games',
  description: 'Games list',
}

const GamesPage = async () => {
  const games = await getGames()
  return (
    <GamesList list={games} title='Games' color='var(--game-bg-color-30)' />
  )
}

export default GamesPage
