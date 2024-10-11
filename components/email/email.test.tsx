import React from 'react'
import { render } from '@testing-library/react'
import { Email } from './email'

describe('Email Component', () => {
  const props = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'This is a test message.',
  }

  it('renders the email preview correctly', () => {
    const { getByText } = render(<Email {...props} />)
    expect(
      getByText(`${props.name} wants to connect to you [Email: ${props.email}]`)
    ).toBeInTheDocument()
  })

  it('renders the main message correctly', () => {
    const { getByText } = render(<Email {...props} />)
    expect(getByText('Hi Gui,')).toBeInTheDocument()
    expect(getByText(props.message)).toBeInTheDocument()
  })

  it('renders the sender information correctly', () => {
    const { getByText } = render(<Email {...props} />)
    const greeting = getByText((content: string) => {
      return content.includes('Best,')
    })
    const name = getByText((content: string) => {
      return content.includes(props.name) && content.includes('-')
    })
    expect(greeting).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })

  it('renders the footer correctly', () => {
    const { getByText } = render(<Email {...props} />)
    expect(
      getByText("From Gui's GameDev Portfolio. God bless you 🙏🏻")
    ).toBeInTheDocument()
  })

  it('renders the image with correct attributes', () => {
    const { getByAltText } = render(<Email {...props} />)
    const img = getByAltText('Gui avatar')
    expect(img).toHaveAttribute(
      'src',
      'https://www.datocms-assets.com/135735/1720654574-gui-about-animation.gif'
    )
    expect(img).toHaveAttribute('width', '150')
    expect(img).toHaveAttribute('height', '150')
  })
})
