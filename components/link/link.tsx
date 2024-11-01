'use client'
import NextLink from 'next/link'
import { FC, HTMLProps, useEffect, useState } from 'react'
import classes from './link.module.css'
import { tokens as designTokens } from '@/components/theme/design-tokens'
import { Theme } from '../theme/ThemeProvider'
import styled from 'styled-components'

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  theme?: Theme
  tokens?: (typeof designTokens)[Theme]
}

const Link: FC<LinkProps> = ({
  theme = 'light',
  href,
  children,
  tokens,
  ...rest
}) => {
  const { link } = classes

  return (
    <span className={link}>
      <StyledLink $tokens={tokens} href={href} {...rest}>
        {children}
      </StyledLink>
    </span>
  )
}

const StyledLink = styled(NextLink)<{
  $tokens?: LinkProps['tokens']
  theme?: Theme
}>`
  color: ${({ $tokens }) =>
    ($tokens && $tokens.text.color) || 'var(--link-color)'};
  text-decoration: ${({ $tokens }) =>
    ($tokens && $tokens.text.decoration) || 'none'};
` as any

export default Link
