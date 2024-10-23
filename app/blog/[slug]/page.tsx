import CardSection from '@/components/card/card-section'
import Hero from './hero'
import classes from './post-details.module.css'
import { getGames, getPosts } from '@/lib/queries'
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'
import Image from '@/components/structured-text/image/image'
import { isCode } from 'datocms-structured-text-utils'
import CodeHighlight from '@/components/structured-text/code/code-highlight'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const posts = await getPosts()
  const post = posts.find((game) => game.slug === params.slug)

  if (!post) {
    notFound()
  }

  const { title, description, image } = post

  return {
    title,
    description,
    image: image.src,
  }
}

const PostDetailsPage = async ({ params }) => {
  const games = await getGames()
  const posts = await getPosts()
  const { wrapper, items } = classes
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const { content, ...props } = post
  return (
    <>
      <Hero {...props} />
      <main className={wrapper}>
        <ul className={items}>
          <li>
            <div>
              <strong>Table of Contents</strong>
            </div>
          </li>
          <li>
            <ul>
              {props.tableOfContents.map((contents) => {
                return <li key={contents}>{contents}</li>
              })}
            </ul>
          </li>
        </ul>
        <div>
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
        </div>
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
