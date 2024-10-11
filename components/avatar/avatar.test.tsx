import React from 'react'
import { render } from '@testing-library/react'
import Avatar from './avatar'

describe('Avatar Component', () => {
  it('renders correctly with default size', () => {
    const { getByAltText } = render(<Avatar src='/path/to/image.jpg' />)
    const image = getByAltText('avatar')
    expect(image).toBeInTheDocument()
    expect(image).toHaveStyle('object-fit: cover')
  })

  it('renders correctly with custom size', () => {
    const { getByAltText, container } = render(
      <Avatar size='150px' src='/path/to/image.jpg' />
    )
    const image = getByAltText('avatar')
    expect(image).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle('width: 150px')
    expect(container.firstChild).toHaveStyle('height: 150px')
  })

  it('applies the correct class', () => {
    const { container } = render(<Avatar src='/path/to/image.jpg' />)
    expect(container.firstChild).toHaveClass('avatar')
  })
})
