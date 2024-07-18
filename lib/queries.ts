import { table } from 'console'
import apolloClient from './apollo-client'
import { gql } from '@apollo/client'

const client = apolloClient()

export const getGames = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        allGames {
          _createdAt
          id
          title
          description
          thumbnail {
            url
            width
            height
            filename
          }
          engine
          content {
            value
            blocks {
              id
              image {
                url
                width
                height
              }
            }
            links
          }
          genre
          participation
          developmentTime
          slug
          programmingLanguages {
            id
            language
          }
        }
      }
    `,
  })

  const games = data.allGames.map((game) => ({
    id: game.id,
    slug: game.slug,
    title: game.title,
    image: {
      src: game.thumbnail.url,
      width: game.thumbnail.width,
      height: game.thumbnail.height,
    },
    description: game.description,
    content: game.content,
    url: `/game/${game.slug}`,
    link: 'View Game',
    platforms: [game.engine],
    genres: [game.genre],
    contributions: [game.participation],
    timeToDevelop: game.developmentTime,
    programmingLanguages: game.programmingLanguages.map(
      (lang) => lang.language
    ),
  }))

  return games
}

export const getPosts = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        allPosts {
          id
          title
          slug
          description
          thumbnail {
            url
            width
            height
          }
          category {
            title
          }
          content {
            value
            blocks {
              id
              image {
                url
                width
                height
              }
            }
            links
          }
          featured
          dateCreated
          author {
            name
            role
            avatar {
              url
            }
          }
        }
      }
    `,
  })

  const posts = data.allPosts.map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    image: {
      src: blog.thumbnail.url,
      width: blog.thumbnail.width,
      height: blog.thumbnail.height,
    },
    description: blog.description,
    content: blog.content,
    url: `/blog/${blog.slug}`,
    link: 'View blog',
    categories: blog.category,
    featured: blog.featured,
    dateCreated: blog.dateCreated,
    authors: blog.author,
    tableOfContents: ['Table of Contents'],
  }))

  console.log(posts)

  return posts
}
