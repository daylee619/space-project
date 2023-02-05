/* eslint-disable @typescript-eslint/restrict-template-expressions */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Navigation from '../src/components/units/nav/Navigation'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <>
        <Navigation
        />
        <GoogleOAuthProvider clientId="565812112333-j0gg5kh8v1tqcsmqdatm9magfveqg941.apps.googleusercontent.com" >
          <Component {...pageProps} />
        </GoogleOAuthProvider>
      </>
    </>
  )
}