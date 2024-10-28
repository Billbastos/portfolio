'use client'

import { FaBomb } from 'react-icons/fa'
import classes from './error.module.css'

const ErrorFallback = ({ error }) => {
  const { wrapper, icon, 'game-over': gameOver } = classes

  return (
    <div className={wrapper}>
      <FaBomb size={80} className={icon} />
      <h1 className={gameOver}>GAME OVER</h1>
      <p>{error.message} !</p>
    </div>
  )
}

export default ErrorFallback
