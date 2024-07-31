import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './game-details.module.css'
import { getGames, getPosts } from '@/lib/queries'
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'
import Image from '@/components/structured-text/image/image'
import { isCode } from 'datocms-structured-text-utils'
import CodeHighlight from '@/components/structured-text/code/code-highlight'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const games = await getGames()
  const game = games.find((game) => game.slug === params.slug)
  
  if (!game) {
    notFound()
  }
  
  const { title, description, image } = game

  return {
    title,
    description,
    image: image.src,
  }
}

const GameDetailsPage = async ({ params }) => {
  const { wrapper } = classes
  const games = await getGames()
  const posts = await getPosts()
  const game = games.find((game) => game.slug === params.slug)
  
  if (!game) {
    notFound()
  }
  
  const { content, ...props } = game

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
        cards={posts}
        title='Latest News'
        buttonTitle='View all posts'
        buttonLink='/blog'
      />
    </>
  )
}

export default GameDetailsPage
