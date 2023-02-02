import { useRouter } from 'next/router'
import { KAKAO_AUTH_URL } from './KakaoAuth'
import { KakaoButton } from './KakaoSignIn.style'

const KakaoSignIn = () => {
    const router = useRouter()

    const kakaoLoginHandler = () => {
        router.push(KAKAO_AUTH_URL)
    }

    return (
        <KakaoButton src='/images/kakao_login.png' onClick={kakaoLoginHandler} />
    )
}

export default KakaoSignIn