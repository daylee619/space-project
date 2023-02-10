/* eslint-disable @typescript-eslint/restrict-template-expressions */
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { GoogleOAuthProvider } from "@react-oauth/google"
import Navigation from "../src/components/units/nav/Navigation"
import Footer from '../src/components/units/footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <>
        <Navigation
        />
        <GoogleOAuthProvider clientId="id" >
          <Component {...pageProps} />
        </GoogleOAuthProvider>
        <Footer />
      </>
    </>
  )
}
