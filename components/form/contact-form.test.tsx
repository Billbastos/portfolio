import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from './contact-form'
import { sendEmail } from '@/lib/send-email'

// Mock the sendEmail function
jest.mock('@/lib/send-email', () => ({
  sendEmail: jest.fn(),
}))

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders the form with all fields', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Send me a message')).toBeInTheDocument()
    expect(screen.getByText('Send')).toBeInTheDocument()
  })

  test('shows validation errors when fields are empty', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByText('Send'))

    await waitFor(() => {
      expect(screen.getByText('Email is required.')).toBeInTheDocument()
      expect(screen.getByText('Name is required.')).toBeInTheDocument()
      expect(screen.getByText('Message is required.')).toBeInTheDocument()
    })
  })

  test('shows validation error for invalid email', async () => {
    render(<ContactForm />)

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: { value: 'invalid-email' },
    })
    fireEvent.click(screen.getByText('Send'))

    await waitFor(() => {
      expect(screen.getByText('Invalid email.')).toBeInTheDocument()
    })
  })

  test('submits the form successfully', async () => {
    ;(sendEmail as jest.Mock).mockResolvedValue({})

    render(<ContactForm />)

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.input(screen.getByPlaceholderText('Name'), {
      target: { value: 'John Doe' },
    })
    fireEvent.input(screen.getByPlaceholderText('Send me a message'), {
      target: { value: 'This is a test message.' },
    })

    fireEvent.click(screen.getByText('Send'))

    await waitFor(() => {
      expect(
        screen.getByText('Thank you for your message!')
      ).toBeInTheDocument()
      expect(
        screen.getByText('We will get back to you as soon as possible.')
      ).toBeInTheDocument()
    })
  })

  test('shows error message when email sending fails', async () => {
    ;(sendEmail as jest.Mock).mockResolvedValue({
      error: 'Error sending email',
    })

    render(<ContactForm />)

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.input(screen.getByPlaceholderText('Name'), {
      target: { value: 'John Doe' },
    })
    fireEvent.input(screen.getByPlaceholderText('Send me a message'), {
      target: { value: 'This is a test message.' },
    })

    fireEvent.click(screen.getByText('Send'))

    await waitFor(() => {
      expect(
        screen.getByText('There was an error sending your message.')
      ).toBeInTheDocument()
      expect(screen.getByText('Please try again later.')).toBeInTheDocument()
    })
  })
})
