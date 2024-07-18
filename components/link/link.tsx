import NextLink from 'next/link'
import { FC, HTMLProps } from 'react'
import classes from './link.module.css'

const Link: FC<HTMLProps<HTMLAnchorElement> & LinkBaseProps> = ({
  href,
  children,
  ...rest
}) => {
  const { link } = classes
  return (
    <span className={link}>
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    </span>
  )
}

export default Link
