import './globals.css'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

export const metadata = {
  title: 'Gui Bastos',
  description: 'Gui Bastos portfolio',
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
