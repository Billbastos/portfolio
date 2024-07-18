import { FormValues } from '@/components/form/contact-form'

const sendEmail = async (data: FormValues) => {
  const apiEndpoint = '/api/email'
  try {
    const result = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())

    return result
  } catch (error) {
    console.error('error', error)
    return { error }
  }
}

export { sendEmail }
