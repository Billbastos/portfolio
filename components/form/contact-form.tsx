'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './input'
import Textarea from './textarea'
import classes from './contact-form.module.css'
import Button from '../button/button'
import { FaChevronRight } from 'react-icons/fa'

type FormValues = {
  email: string
  name: string
  message: string
}

const schema = z.object({
  email: z.string().min(1, { message: 'email required.' }),
  name: z.string().min(1, { message: 'name required.' }),
  message: z.string().min(1, { message: 'message required.' }),
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const { wrapper, form, 'success-message': successMessage } = classes
  const onSubmit = handleSubmit((data) => {
    console.log(data)
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
          <h2>Thank you for your message!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
