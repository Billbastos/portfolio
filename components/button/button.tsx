'use client'
import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import classes from './button.module.css'
import Link from 'next/link'

interface LinkProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  variant: 'primary' | 'secondary' | 'link'
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  href?: string
  as?: 'button' | 'a'
  reverse?: boolean
  animate?: boolean
}
const Button: FC<PropsWithChildren<LinkProps>> = ({
  children,
  variant,
  as = 'button',
  href = '#',
  className = '',
  reverse = false,
  animate = false,
  ...rest
}) => {
  const {
    button,
    primary,
    secondary,
    link,
    wrapper,
    'animate-back': animateBack,
    animate: animateClass,
  } = classes
  let addAnimation = animate ? reverse ? animateBack : animateClass : ''
  let btnStyle = `${button} ${addAnimation}`

  btnStyle = variant === 'primary' ? `${btnStyle} ${primary}` : btnStyle
  btnStyle = variant === 'secondary' ? `${btnStyle} ${secondary}` : btnStyle
  btnStyle = variant === 'link' ? `${btnStyle} ${link}` : btnStyle
  btnStyle = reverse ? `${btnStyle} ${animateBack}` : btnStyle

  return as === 'button' ? (
    <button className={`${btnStyle} ${className}`} {...rest}>
      {children}
    </button>
  ) : (
    <Link href={href} className={btnStyle}>
      <div className={`${wrapper} ${className}`} {...rest}>
        {children}
      </div>
    </Link>
  )
}

export default Button
