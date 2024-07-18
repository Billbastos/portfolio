import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface EmailProps {
  name: string
  email: string
  message: string
}

export const Email = ({ name, email, message }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        {name} wants to connect to you [Email: {email}]
      </Preview>
      <Body style={main}>
        <Img
          src='https://www.datocms-assets.com/135735/1720654574-gui-about-animation.gif'
          width='150'
          height='150'
          alt='Gui avatar'
          style={logo}
        />
        <Container style={container}>
          <Hr style={hr} />
          <Text style={paragraph}>Hi Gui, </Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>
            Best,
            <br />
            {name} - <a href={`mailto:${email}`}>{email}</a>
          </Text>
          <Text style={footer}>
            From Gui's GameDev Portfolio. God bless you 🙏🏻
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  backgroundColor: '#f6f6f6',
  margin: '0 auto',
  borderRadius: '0 0 10px 10px',
}

const logo = {
  margin: '0 auto',
  borderRadius: '50%',
  padding: '20px 0',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 20px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '0',
}

const footer = {
  color: '#b9b9b9',
  fontSize: '14px',
  fontWeight: '700',
  padding: '20px',
  backgroundColor: '#292929',
  margin: '0',
  borderRadius: '0 0 10px 10px',
}

export default Email
