import classes from './hero.module.css'
import { FC } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import {
  FaStopwatch20,
  FaCode,
  FaDev,
  FaHandSparkles,
  FaIcons,
  FaArrowLeft,
} from 'react-icons/fa'
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

const ICON_SIZE = 20
const ICON_COLOR = `var(--palette-grey-30)`

const iconProps = {
  size: ICON_SIZE,
  color: ICON_COLOR,
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
                <FaCode {...iconProps} />
                <strong>Programming Languages:</strong>
                <div>{programmingLanguages}</div>
              </div>
            </li>
            <li>
              <div>
                <FaDev {...iconProps} />
                <strong>Platforms:</strong>
                <div>{platforms}</div>
              </div>
            </li>
            <li>
              <div>
                <FaIcons {...iconProps} />
                <strong>Genres:</strong>
                <div>{genres}</div>
              </div>
            </li>
            <li>
              <div>
                <FaHandSparkles {...iconProps} />
                <strong>Contributions:</strong>
                <div>{contributions}</div>
              </div>
            </li>
            <li>
              <div>
                <FaStopwatch20 {...iconProps} />
                <strong>Time to Develop:</strong>
                <div>{timeToDevelop}</div>
              </div>
            </li>
          </ul>
          <div className={heading}>
            <Button as='a' variant='secondary' href='/game' reverse>
              <FaArrowLeft />
              Back to Games
            </Button>
          </div>
        </div>
        <div className={avatar}>
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
