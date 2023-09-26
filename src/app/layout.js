import HeaderComponent from './components/header/header';
import { ThemeProvider } from './components/theme/theme-provider';
import './globals.css';

export const metadata = {
  title: 'Divyesh Dharjiya',
  description: 'It is my portfolio responsive websites (dark & light mode). which i have created with using next.js 13.4, react.js, tailwind, react-type-animation, react-icons.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
