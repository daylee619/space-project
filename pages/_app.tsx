import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Navigation from '../src/components/units/nav/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <>
        <Navigation />
        <GoogleOAuthProvider clientId="Google Oauth ID" >
          <Component {...pageProps} />
        </GoogleOAuthProvider>
      </>
    </>
  )
}