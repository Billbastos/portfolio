import { posts } from '../api/data'
import PostList from '@/components/recipes/post-list/post-list'

const GamesPage = () => {
  return <PostList list={posts} title='Blog' />
}

export default GamesPage
