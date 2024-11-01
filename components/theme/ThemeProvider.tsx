'use client'
import { createContext, useContext } from 'react'
import { tokens as designTokens } from './design-tokens'

export type Theme = 'light' | 'dark'
export const ThemeContext = createContext({
  tokens: designTokens.light,
})

const ThemeProvider = ({ theme, children }) => {
  const tokens = designTokens[theme]

  return (
    <ThemeContext.Provider value={{ tokens }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeProvider
