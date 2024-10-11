import React from 'react'
import { render } from '@testing-library/react'
import ErrorFallback from './error'

describe('ErrorFallback Component', () => {
  it('should render the error message', () => {
    const error = { message: 'Something went wrong' }
    const { getByText } = render(<ErrorFallback error={error} />)

    expect(getByText('Something went wrong !')).toBeInTheDocument()
  })

  it('should render the GAME OVER text', () => {
    const error = { message: 'Something went wrong' }
    const { getByText } = render(<ErrorFallback error={error} />)

    expect(getByText('GAME OVER')).toBeInTheDocument()
  })

  it('should render the FaBomb icon', () => {
    const error = { message: 'Something went wrong' }
    const { container } = render(<ErrorFallback error={error} />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
