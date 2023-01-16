import { GoogleLogin } from '@react-oauth/google'

const GoogleSignIn = () => {
    return (
        <>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    // 해당 부분은 후에 들어오는 토큰에 대해서 디코딩 하는 부분이다. // const decodeding = jwt_decode(credentialResponse.credential);
                    // console.log(decodeding)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </>
    )
}

export default GoogleSignIn