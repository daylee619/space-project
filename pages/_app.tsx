import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../src/components/units/nav/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
