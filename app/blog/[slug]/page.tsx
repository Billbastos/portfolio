import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './post-details.module.css'
import { getGames, getPosts } from '@/lib/queries'
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'
import Image from '@/components/structured-text/image/image'
import { isCode } from 'datocms-structured-text-utils'
import CodeHighlight from '@/components/structured-text/code/code-highlight'
import { notFound } from 'next/navigation'

const PostDetailsPage = async ({ params }) => {
  const games = await getGames()
  const posts = await getPosts()
  const { wrapper } = classes
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const { content, ...props } = post
  return (
    <>
      <Hero {...props} />
      <main className={wrapper}>
        <StructuredText
          data={content}
          customNodeRules={[
            renderNodeRule(isCode, ({ node, key }) => {
              return <CodeHighlight key={key} node={node} />
            }),
          ]}
          renderBlock={({ record }: any) => {
            switch (record.__typename) {
              case 'ImageContentRecord':
                return <Image record={record} />
              default:
                return null
            }
          }}
        />
      </main>
      <CardSection
        cards={games}
        title='Featured Games'
        buttonTitle='View all games'
        buttonLink='/game'
      />
    </>
  )
}

export default PostDetailsPage
