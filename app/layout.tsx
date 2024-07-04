import './globals.css'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
