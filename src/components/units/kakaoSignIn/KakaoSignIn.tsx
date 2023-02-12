import { useRouter } from 'next/router'
import { KakaoButton } from './KakaoSignIn.style'

const KakaoSignIn = () => {
    const router = useRouter()
    const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'
    const CLIENT_ID = 'aa450a92889c4d6d150b3bb844fa6f37'

    console.log(router.query.code)

    const kakaoLoginHandler = () => {
        router.push(`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`)
    }

    return (
        <KakaoButton src='/images/kakao_login.png' onClick={kakaoLoginHandler} />
    )
}

export default KakaoSignIn