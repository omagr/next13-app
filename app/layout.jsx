import Navbar from '@/components/Navbar.jsx'
import '@/styles/globals.scss'
import Script from 'next/script'

export const metadata = {
  title: 'Next 13 App',
  description: 'jai bajrangbali!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-indigo-950 text-white">
      {/* razorpay script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
