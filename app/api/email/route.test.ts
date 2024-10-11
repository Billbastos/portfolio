/**
 * @jest-environment node
 */
import { POST } from './route'
import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

jest.mock('nodemailer')
jest.mock('@react-email/components')

const mockRequest = {
  json: jest.fn().mockResolvedValue({
    email: 'test@example.com',
    name: 'Test User',
    message: 'This is a test message',
  }),
} as unknown as NextRequest

describe('POST /api/email', () => {
  const mockSendMail = jest.fn()
  const mockCreateTransport = nodemailer.createTransport as jest.Mock

  beforeEach(() => {
    mockCreateTransport.mockReturnValue({
      sendMail: mockSendMail,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should send an email and return a success response', async () => {
    mockSendMail.mockImplementation((_, callback) => {
      callback(null)
    })

    const response = await POST(mockRequest)
    const responseJson = await response.json()

    expect(mockRequest.json).toHaveBeenCalled()
    expect(mockSendMail).toHaveBeenCalled()
    expect(responseJson).toEqual({ message: 'Email sent' })
  })

  it('should return an error response if sending email fails', async () => {
    mockSendMail.mockImplementation((_, callback) => {
      callback(new Error('Failed to send email'))
    })

    const response = await POST(mockRequest)
    const responseJson = await response.json()

    expect(mockRequest.json).toHaveBeenCalled()
    expect(mockSendMail).toHaveBeenCalled()
    expect(responseJson.error).toEqual('Failed to send email')
    expect(responseJson.status).toBe(500)
  })
})
