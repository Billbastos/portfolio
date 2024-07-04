import classes from './hero.module.css'
import { FC } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import Button from '@/components/button/button'

export interface GameDetailsPageProps {
  title: string
  tableOfContents: string[]
  description: string
  image: StaticImageData
}

const Hero: FC<GameDetailsPageProps> = ({
  title,
  description,
  tableOfContents,
  image,
}) => {
  const {
    hero,
    content,
    avatar,
    wrapper,
    section,
    'hero-image': heroImage,
    items,
    heading,
  } = classes
  return (
    <div className={wrapper}>
      <h1>{title}</h1>
      <div className={hero}>
        <div className={content}>
          <ul className={items}>
            <li>
              <div>
                <strong>Table of Contents</strong>
              </div>
            </li>
            <li>
              <ul>
                {tableOfContents.map((contents) => {
                  return <li key={contents}>{contents}</li>
                })}
              </ul>
            </li>
          </ul>
          <div className={heading}>
            <p>{description}</p>
            <Button as='a' variant='secondary' href='/blog' reverse>
              <FaArrowLeft />
              Back to Blog
            </Button>
          </div>
        </div>
        <div className={avatar}>
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
