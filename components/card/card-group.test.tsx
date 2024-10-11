import React from 'react'
import { render } from '@testing-library/react'
import CardGroup from './card-group'

describe('CardGroup Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CardGroup size={3}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </CardGroup>
    )

    expect(getByText('Child 1')).toBeInTheDocument()
    expect(getByText('Child 2')).toBeInTheDocument()
    expect(getByText('Child 3')).toBeInTheDocument()
  })

  it('applies correct gridTemplateColumns style based on size prop', () => {
    const { container } = render(
      <CardGroup size={3}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </CardGroup>
    )

    const divElement = container.firstChild
    expect(divElement).toHaveStyle('grid-template-columns: auto auto auto')
  })

  it('applies correct className from CSS module', () => {
    const { container } = render(
      <CardGroup size={3}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </CardGroup>
    )

    const divElement = container.firstChild
    expect(divElement).toHaveClass('wrapper')
  })
})
