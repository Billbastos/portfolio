import { getPosts } from '@/lib/queries'
import PostList from '@/components/recipes/post-list/post-list'

export const metadata = {
  title: 'Blog',
  description: 'Portfolio blog posts',
}

const BlogPage = async () => {
  const posts = await getPosts()
  return <PostList list={posts} title='Blog' color='var(--blog-bg-color-30)' />
}

export default BlogPage
