import NextLink, { LinkProps } from 'next/link'
import { FC, HTMLProps } from 'react'
import classes from './link.module.css'

interface LinkBaseProps extends LinkProps {
  variant?: 'cta' | 'link'
}

const Link: FC<HTMLProps<HTMLAnchorElement> & LinkBaseProps> = ({
  variant = 'link',
  href,
  children,
  className,
  ...rest
}) => {
  const { link, cta } = classes
  return (
    <span className={`${variant === 'link' ? link : cta} ${className}`}>
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    </span>
  )
}

export default Link
