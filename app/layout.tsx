import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans"
});

export const metadata = {
  title: 'Sevanadhara Home Care Service | Professional Home Care You Can Trust',
  description: 'Sevanadhara provides trusted home care services including elderly care, home nurses, baby care, patient care, and non-emergency patient transportation in Chengannur, Thiruvalla, Haripad, and Mavelikkara.',
  keywords: 'home care, elderly care, home nurses, baby care, patient care, Chengannur, Thiruvalla, Kerala, home healthcare',
  openGraph: {
    title: 'Sevanadhara Home Care Service',
    description: 'Professional home care services you can trust',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#0891b2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
