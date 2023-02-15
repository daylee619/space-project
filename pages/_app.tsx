/* eslint-disable @typescript-eslint/restrict-template-expressions */
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { GoogleOAuthProvider } from "@react-oauth/google"
import Navigation from "../src/components/units/nav/Navigation"
import Footer from '../src/components/units/footer/Footer'

export default function App({ Component, pageProps }: AppProps) {

  setTimeout(function () {
    console.log('Works!');
  }, 30000);


  return (
    <>
      <>
        <Navigation
        />
        <GoogleOAuthProvider clientId="565812112333-s6o4gfpnrig2i55gukb4098i35fqmke6.apps.googleusercontent.com" >
          <Component {...pageProps} />
        </GoogleOAuthProvider>
        <Footer />
      </>
    </>
  )
}
