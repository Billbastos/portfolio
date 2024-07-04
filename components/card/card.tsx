'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import classes from './card.module.css'

interface CardProps {
  id: string
  image: string
  title: string
  description: string
  link: string
}

const Card: FC<CardProps> = ({
  image: cardImage,
  title: cardTitle,
  description: cardContent,
  link,
}) => {
  const { item, image, 'image-wrapper': imageWrapper, title, content } = classes
  const router = useRouter()

  return (
    <article className={item} onClick={() => router.push(link)}>
      <div className={imageWrapper}>
        <Image
          src={cardImage}
          alt={cardTitle}
          priority
          fill
          className={image}
        />
      </div>
      <h2 className={title}>{cardTitle}</h2>
      <p className={content}>{cardContent}</p>
    </article>
  )
}

export default Card
