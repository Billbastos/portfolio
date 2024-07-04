'use client'
import SectionGroup, {
  SectionContents,
  SectionCopy,
} from '@/components/section'
import { useState } from 'react'

import Button from '@/components/button/button'

import classes from './game-list.module.css'

const GameList = ({ title, list, reverse = false, preview = false }) => {
  const [itemHovered, setItemHovered] = useState<boolean[]>(
    Array(list.length).fill(false)
  )

  const handleItemHovered = (isHovered: boolean, index: number) => {
    setItemHovered((prevState) => {
      const newState = [...prevState]
      newState[index] = isHovered
      return newState
    })
  }

  const { wrapper } = classes
  return (
    <main className={wrapper}>
      <h1>{title}</h1>
      {list.map((item, index) => (
        <SectionGroup key={item.id} reverse={index % 2 && reverse}>
          <SectionContents
            image={item.image}
            title={item.title}
            isLinkHovered={itemHovered[index]}
            reverse={index % 2 && reverse}
          />
          <SectionCopy
            title={item.title}
            description={item.content}
            url={item.url}
            link={item.link}
            setIsHovered={(hovered: boolean) =>
              handleItemHovered(hovered, index)
            }
          />
        </SectionGroup>
      ))}
      {preview ? (
        <Button variant='secondary' href='/game' as='a'>
          View all game projects
        </Button>
      ) : (
        <div>add pagination if necessary</div>
      )}
    </main>
  )
}

export default GameList
