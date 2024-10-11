import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './button'

describe('Button component', () => {
  it('renders a primary button', () => {
    render(<Button variant='primary'>Primary Button</Button>)
    const buttonElement = screen.getByText('Primary Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('primary')
  })

  it('renders a secondary button', () => {
    render(<Button variant='secondary'>Secondary Button</Button>)
    const buttonElement = screen.getByText('Secondary Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('secondary')
  })

  it('renders a link button', () => {
    render(<Button variant='link'>Link Button</Button>)
    const buttonElement = screen.getByText('Link Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('link')
  })

  it('renders a button with animation', () => {
    render(
      <Button variant='primary' animate>
        Animated Button
      </Button>
    )
    const buttonElement = screen.getByText('Animated Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('animate')
  })

  it('renders a button with reverse animation', () => {
    render(
      <Button variant='primary' animate reverse>
        Reverse Animated Button
      </Button>
    )
    const buttonElement = screen.getByText('Reverse Animated Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('animate-back')
  })

  it('renders a monochromatic button', () => {
    render(
      <Button variant='primary' mono>
        Monochromatic Button
      </Button>
    )
    const buttonElement = screen.getByText('Monochromatic Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('monochromatic')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(
      <Button variant='primary' onClick={handleClick}>
        Clickable Button
      </Button>
    )
    const buttonElement = screen.getByText('Clickable Button')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
