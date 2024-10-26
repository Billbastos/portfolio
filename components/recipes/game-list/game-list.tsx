'use client'
import SectionGroup, {
  SectionContents,
  SectionCopy,
} from '@/components/section'
import { useEffect, useState } from 'react'
import Button from '@/components/button/button'
import classes from './game-list.module.css'
import Pagination from '@/components/pagination/pagination'
import { usePagination } from '@/components/pagination/usePagination'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const GameList = ({
  title,
  list,
  reverse = false,
  preview = false,
  color = 'currentColor',
}) => {
  const { pages, currentPage, items, previous, next } = usePagination(list)
  const router = useRouter()

  const [itemHovered, setItemHovered] = useState<boolean[]>(
    Array(list.length).fill(false)
  )

  useEffect(() => {
    document.documentElement.style.setProperty('--custom-color', color)
  }, [color])

  const handleItemHovered = (isHovered: boolean, index: number) => {
    setItemHovered((prevState) => {
      const newState = [...prevState]
      newState[index] = isHovered
      return newState
    })
  }

  const { wrapper, heading, button } = classes
  return (
    <main className={wrapper}>
      <h1>{title}</h1>
      {items.map((item, index) => (
        <SectionGroup key={item.id} reverse={index % 2 && reverse}>
          <SectionContents
            image={item.image}
            title={item.title}
            isLinkHovered={itemHovered[index]}
            reverse={index % 2 && reverse}
            onMouseEnter={() => handleItemHovered(true, index)}
            onMouseLeave={() => handleItemHovered(false, index)}
            onClick={() => router.push(item.url)}
            style={{ cursor: 'pointer' }}
          />
          <SectionCopy>
            <h2
              className={heading}
              style={{ after: { backgroundColor: color } }}
            >
              {item.title}
            </h2>
            <p>{item.description}</p>
            <Button
              href={item.url}
              as='a'
              variant='link'
              animate={itemHovered[index]}
              onMouseEnter={() => handleItemHovered(true, index)}
              onMouseLeave={() => handleItemHovered(false, index)}
            >
              {item.link}
              <FaArrowRight />
            </Button>
          </SectionCopy>
        </SectionGroup>
      ))}
      {preview ? (
        <div className={button}>
          <Button variant='secondary' href='/game' as='a'>
            View all game projects
          </Button>
        </div>
      ) : (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          hasNext={next}
          hasPrevious={previous}
        />
      )}
    </main>
  )
}

export default GameList
