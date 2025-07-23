import './globals.css'
import NavBar from './components/navigationBar/navBar.jsx';
import { Inter, Newsreader } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', weight: ['400', '600', '700'] });

export const metadata = {
  title: 'Antonella | Front-end Developer',
  description: 'Portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}