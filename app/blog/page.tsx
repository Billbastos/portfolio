import { getPosts } from '@/lib/queries'
import PostList from '@/components/recipes/post-list/post-list'

export const metadata = {
  title: 'Blog',
  description: 'Portfolio blog posts',
}

const GamesPage = async () => {
  const posts = await getPosts()
  return (
      <PostList list={posts} title='Blog' />
  )
}

export default GamesPage
