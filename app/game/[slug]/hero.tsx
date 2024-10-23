import classes from './hero.module.css'
import { FC } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import Button from '@/components/button/button'

export interface GameDetailsPageProps {
  title: string
  programmingLanguages: string[]
  platforms: string[]
  genres: string[]
  contributions: string[]
  timeToDevelop: string
  image: StaticImageData
}

const Hero: FC<GameDetailsPageProps> = ({
  title,
  programmingLanguages,
  platforms,
  genres,
  contributions,
  timeToDevelop,
  image,
}) => {
  const {
    hero,
    content,
    'section-image': sectionImage,
    wrapper,
    section,
    'hero-image': heroImage,
    items,
    'return-link': returnLink,
  } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>{title}</h1>
          <ul className={items}>
            <li>
              <div>
                <strong>Programming Languages:</strong>
                <div>{programmingLanguages}</div>
              </div>
            </li>
            <li>
              <div>
                <strong>Platforms:</strong>
                <div>{platforms}</div>
              </div>
            </li>
            <li>
              <div>
                <strong>Genres:</strong>
                <div>{genres}</div>
              </div>
            </li>
            <li>
              <div>
                <strong>Contributions:</strong>
                <div>{contributions}</div>
              </div>
            </li>
            <li>
              <div>
                <strong>Time to Develop:</strong>
                <div>{timeToDevelop}</div>
              </div>
            </li>
          </ul>
          <div className={returnLink}>
            <Button as='a' variant='link' href='/game' reverse animate mono>
              <FaArrowLeft />
              Back to Games
            </Button>
          </div>
        </div>
        <div className={sectionImage}>
          <section className={section}>
            <picture>
              <Image
                src={image.src}
                alt={title}
                className={heroImage}
                width={image.width}
                height={image.height}
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
