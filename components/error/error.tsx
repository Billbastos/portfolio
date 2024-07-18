'use client'

import { FaBomb } from 'react-icons/fa'
import classes from './error.module.css'
import { useEffect, useState } from 'react'
import Button from '../button/button'

const ErrorFallback = ({ error }) => {
  const [continueCount, setContinueCount] = useState(10)
  const {
    wrapper,
    icon,
    'game-over': gameOver,
    'to-continue': toContinue,
    counting,
  } = classes

  useEffect(() => {
    const interval = setInterval(() => {
      setContinueCount((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={wrapper}>
      {continueCount <= 0 ? (
        <>
          <FaBomb size={80} className={icon} />
          <h1 className={gameOver}>GAME OVER</h1>
        </>
      ) : (
        <>
          <h1 className={counting}>{continueCount}</h1>
          <Button as='a' variant='link' href='/'>
            <h1 className={toContinue}>CONTINUE</h1>
          </Button>
        </>
      )}
      <p>{error.message} !</p>
    </div>
  )
}

export default ErrorFallback
