import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />)
    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toBeInTheDocument()
  })

  it('renders all the links', () => {
    render(<Footer />)
    const aboutLink = screen.getByText('About')
    const gamesLink = screen.getByText('Games')
    const blogLink = screen.getByText('Blog')
    const contactLink = screen.getByText('Contact')

    expect(aboutLink).toBeInTheDocument()
    expect(gamesLink).toBeInTheDocument()
    expect(blogLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('renders the Social component', () => {
    render(<Footer />)
    const socialComponent = screen.getByTestId('social-component')
    expect(socialComponent).toBeInTheDocument()
  })
})
