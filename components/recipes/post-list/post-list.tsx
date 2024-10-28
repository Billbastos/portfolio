'use client'
import SectionGroup, {
  SectionContents,
  SectionCopy,
} from '@/components/section'
import { useEffect, useState } from 'react'

import Button from '@/components/button/button'
import Pagination from '@/components/pagination/pagination'
import classes from './post-list.module.css'
import { usePagination } from '@/components/pagination/usePagination'
import { FaArrowRight } from 'react-icons/fa'
import Tag from '@/components/tag/tag'
import { useRouter } from 'next/navigation'

const PostList = ({ title, list, color = 'currentColor' }) => {
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
        <SectionGroup key={item.id}>
          <SectionContents
            image={item.image}
            title={item.title}
            isLinkHovered={itemHovered[index]}
            onMouseEnter={() => handleItemHovered(true, index)}
            onMouseLeave={() => handleItemHovered(false, index)}
            onClick={() => router.push(item.url)}
            style={{ cursor: 'pointer' }}
          />
          <SectionCopy>
            {item.categories && (
              <div>
                {item.categories.map((category) => (
                  <Tag key={category.title}>{category.title}</Tag>
                ))}
              </div>
            )}
            <h2 className={heading}>{item.title}</h2>
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
      <Pagination
        pages={pages}
        currentPage={currentPage}
        hasNext={next}
        hasPrevious={previous}
      />
    </main>
  )
}

export default PostList
