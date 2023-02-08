import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios';
import { useRouter } from 'next/router'
import { API_IP } from '../../../common/utils/ApiIp';

const GoogleSignIn = () => {
    const router = useRouter()

    return (
        <>
            <GoogleLogin
                onSuccess={async (credentialResponse) => {
                    try {
                        // console.log(credentialResponse);
                        await axios.post(`http://${API_IP}:3000/user/google`, {
                            credentialResponse
                        })
                            .then(res => {
                                if (res.data.message === "USER_CREATED") {
                                    alert('회원가입이 완료 되었습니다.')
                                    console.log(res);
                                    localStorage.setItem('Access_token', res.data.access_token)
                                    router.push('/')
                                }
                                if (res.data.message === "USER_LOGIN") {
                                    alert('로그인이 완료 되었습니다.')
                                    console.log(res);
                                    localStorage.setItem('access_token', res.data.access_token)
                                    router.push('/')
                                }
                                // console.log(res);
                                // localStorage.setItem('Access_token', res.data.access_token)
                            })
                            .catch(error => {
                                console.log(error);
                                alert('로그인이 실패 하셨습니다.1')
                                router.push('/error')
                            })
                    } catch (error) {
                        console.log(error)
                        alert('로그인이 실패 하셨습니다.2')
                        router.push('/error404')
                    }

                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </>
    )
}

export default GoogleSignIn