'use client'
import Link from '@/components/link/link'
import classes from './hero.module.css'
import { useTheme } from '@/components/theme/ThemeProvider'

const Hero = () => {
  const { tokens } = useTheme()

  const { hero, content, wrapper } = classes
  return (
    <div className={wrapper}>
      <div className={hero}>
        <div className={content}>
          <h1>Quick intro</h1>
          <p>
            This portfolio highlights both my technical expertise and
            creativity. It features blog posts on various tech topics, along
            with game development ideas that showcase my approach to designing
            fun and immersive experiences.
            <Link href='/about' tokens={tokens}>
              Read more about me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
