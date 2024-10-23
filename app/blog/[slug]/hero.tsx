import classes from './hero.module.css'
import { FC } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { FaArrowLeft, FaCalendarDay } from 'react-icons/fa'
import Button from '@/components/button/button'
import Tag from '@/components/tag/tag'
import Avatar from '@/components/avatar/avatar'

interface Author {
  name: string
  role: string
  image: string
}
export interface GameDetailsPageProps {
  title: string
  description: string
  image: StaticImageData
  dateCreated: string
  authors: Author[]
  categories: string[]
}

const Hero: FC<GameDetailsPageProps> = ({
  title,
  description,
  authors,
  dateCreated,
  categories,
  image,
}) => {
  const {
    hero,
    content,
    'image-wrapper': imageWrapper,
    wrapper,
    section,
    'hero-image': heroImage,
    items,
    heading,
    date,
    'meta-data': metaData,
    author,
    avatar,
    title: titleClass,
    and,
  } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1 className={titleClass}>{title}</h1>
          <div className={author}>
            {authors.map((author: any, index) => {
              return (
                <div key={author.name} className={avatar}>
                  <Avatar size='2.5rem' src={author.avatar.url} />
                  <div style={{ flexGrow: 1 }}>{author.name} </div>
                  {index < authors.length - 1 && <span>,</span>}
                </div>
              )
            })}
          </div>
          <div className={date}>
            <div>Posted on {dateCreated}</div>
          </div>
          <div className={metaData}>
            {categories && (
              <div>
                {categories.map((category: any) => (
                  <Tag key={category} color='#ffffff'>
                    {category.title}
                  </Tag>
                ))}
              </div>
            )}
          </div>
          <div className={heading}>
            <p>{description}</p>
            <Button as='a' variant='link' href='/blog' reverse animate mono>
              <FaArrowLeft />
              Back to Blog
            </Button>
          </div>
        </div>
        <div className={imageWrapper}>
          <section className={section}>
            <picture>
              <Image
                src={image}
                alt={title}
                className={heroImage}
                style={{
                  objectFit: 'cover',
                }}
              />
            </picture>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero
