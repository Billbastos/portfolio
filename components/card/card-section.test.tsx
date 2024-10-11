import React from 'react'
import { render, screen } from '@testing-library/react'
import CardSection from './card-section'
import { useRouter } from 'next/navigation'

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))
describe('CardSection', () => {
  const mockPush = jest.fn()

  const mockCards = [
    { id: 1, title: 'Card 1', content: 'Content 1' },
    { id: 2, title: 'Card 2', content: 'Content 2' },
  ]
  const mockTitle = 'Test Title'
  const mockButtonTitle = 'Test Button'
  const mockButtonLink = '/test-link'

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the title', () => {
    render(
      <CardSection
        cards={mockCards}
        title={mockTitle}
        buttonTitle={mockButtonTitle}
        buttonLink={mockButtonLink}
      />
    )
    expect(screen.getByText(mockTitle)).toBeInTheDocument()
  })

  test('renders the correct number of cards', () => {
    render(
      <CardSection
        cards={mockCards}
        title={mockTitle}
        buttonTitle={mockButtonTitle}
        buttonLink={mockButtonLink}
      />
    )
    expect(screen.getAllByRole('article')).toHaveLength(mockCards.length)
  })

  test('renders the button with correct title and link', () => {
    render(
      <CardSection
        cards={mockCards}
        title={mockTitle}
        buttonTitle={mockButtonTitle}
        buttonLink={mockButtonLink}
      />
    )
    const button = screen.getByRole('link', {
      name: `${mockButtonTitle}`,
    })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', mockButtonLink)
  })
})
