import './globals.css'
import Footer from '@/components/footer'
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
        <Footer />
      </body>
    </html>
  )
}
