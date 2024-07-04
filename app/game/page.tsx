import { games } from '../api/data'
import GamesList from '@/components/recipes/game-list/game-list'

const GamesPage = () => {
  return <GamesList list={games} title='Games' />
}

export default GamesPage
