'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './input'
import Textarea from './textarea'
import classes from './contact-form.module.css'
import Button from '../button/button'
import { sendEmail } from '@/lib/send-email'
import { useState } from 'react'

export type FormValues = {
  email: string
  name: string
  message: string
}

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Invalid email.' }),
  name: z.string().min(2, { message: 'Name is required.' }),
  message: z.string().min(10, { message: 'Message is required.' }),
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const [emailSent, setEmailSent] = useState<{ error?: string }>({})
  const { wrapper, form, 'success-message': successMessage } = classes

  const onSubmit = handleSubmit(async (data) => {
    const result = await sendEmail(data)
    setEmailSent(result)
  })

  return (
    <div className={wrapper}>
      {!isSubmitSuccessful ? (
        <form onSubmit={onSubmit} className={form}>
          <Input
            {...register('email')}
            placeholder='Email'
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />

          <Input
            {...register('name')}
            placeholder='Name'
            error={!!errors?.name}
            helperText={errors?.name?.message}
          />

          <Textarea
            id='message'
            label='Send me a message'
            placeholder='Send me a message'
            rows={4}
            error={!!errors?.message}
            helperText={errors?.message?.message}
            {...register('message')}
          />

          <Button variant='primary'>Send</Button>
        </form>
      ) : (
        <div className={successMessage}>
          {emailSent && emailSent.error ? (
            <>
              <h2>There was an error sending your message.</h2>
              <p>Please try again later.</p>
            </>
          ) : (
            <>
              <h2>Thank you for your message!</h2>
              <p>We will get back to you as soon as possible.</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default ContactForm
