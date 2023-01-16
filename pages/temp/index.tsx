import GoogleSignIn from '../../src/components/units/googleSignIn/GoogleSignIn'
import { GoogleOAuthProvider } from '@react-oauth/google'

const GooglePage = () => {
    return (
        <GoogleOAuthProvider clientId=''>
            <GoogleSignIn />
        </GoogleOAuthProvider>
    )
}

export default GooglePage