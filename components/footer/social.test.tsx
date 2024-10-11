import React from 'react'
import { render, screen } from '@testing-library/react'
import Social from './social'

describe('Social component', () => {
  test('renders Social component', () => {
    render(<Social />)
    const socialComponent = screen.getByTestId('social-component')
    expect(socialComponent).toBeInTheDocument()
  })

  test('renders LinkedIn link', () => {
    render(<Social />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/guibastos'
    )
  })

  test('renders Twitter link', () => {
    render(<Social />)
    const twitterLink = screen.getByRole('link', { name: /twitter/i })
    expect(twitterLink).toHaveAttribute('href', 'https://x.com/guigasbastos')
  })

  test('renders GitHub link', () => {
    render(<Social />)
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Billbastos')
  })
})
