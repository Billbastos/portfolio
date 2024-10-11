import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import Card from './card'

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Card component', () => {
  const mockPush = jest.fn()
  const cardProps = {
    id: '1',
    image: '/test-image.jpg',
    title: 'Test Title',
    description: 'Test Description',
    url: '/test-url',
  }

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the card with correct content', () => {
    render(<Card {...cardProps} />)

    expect(screen.getByAltText(cardProps.title)).toBeInTheDocument()
    expect(screen.getByText(cardProps.title)).toBeInTheDocument()
    expect(screen.getByText(cardProps.description)).toBeInTheDocument()
  })

  it('navigates to the correct URL when clicked', () => {
    render(<Card {...cardProps} />)

    fireEvent.click(screen.getByRole('article'))

    expect(mockPush).toHaveBeenCalledWith(cardProps.url)
  })
})
