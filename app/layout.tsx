import './globals.css'
import Navigation from '@/components/navigation'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
