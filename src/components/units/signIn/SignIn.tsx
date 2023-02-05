import axios from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import GoogleSignIn from '../googleSignIn/GoogleSignIn'
import KakaoSignIn from '../kakaoSignIn/KakaoSignIn'
import * as S from './SignIn.style'

const SignIn = () => {
    const [userId, setUserId] = useState<string>("")
    const [errorId, setErrorId] = useState('')
    const [userPassword, setUserPassword] = useState<string>('')
    const [errorPassword, setErrorPassword] = useState('')
    const router = useRouter()

    // Id Change State Handler
    const idChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.currentTarget.value)
        if (e.currentTarget.value) {
            setErrorId("")
        }
    }

    // Password Change State Handler
    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.currentTarget.value)
        if (e.currentTarget.value) {
            setErrorPassword("")
        }
    }

    const SignInHandler = async () => {
        try {
            if (userId && userPassword) {
                await axios.post('http://172.16.101.103:3000/user/login', {
                    email: userId,
                    password: userPassword
                })
                    .then(res => {
                        console.log(res)
                        if (res.data.access_token) {
                            localStorage.setItem('access_token', res.data.access_token)
                        }
                    })
                    .then(async () =>
                        await router.push('/')
                    )

            }
            if (!userId) {
                setErrorId("ID를 입력해 주세요.")
            }
            if (!userPassword) {
                setErrorPassword("Password를 입력해 주세요.")
            }
        } catch (error) {
            console.log(error.message)
            console.error(error)
        }
    }

    return (
        <S.Contain>
            <S.Box>
                <S.LoginTitle>로그인</S.LoginTitle>
                <S.SignInBox>
                    <div>
                        <S.SignInInput type="text" onChange={idChangeHandler} />
                        <S.SignInErrorMessage>{errorId}</S.SignInErrorMessage>
                    </div>
                    <div>
                        <S.PasswordInput type="password" onChange={passwordChangeHandler} />
                        <S.PasswordErrorMessage>{errorPassword}</S.PasswordErrorMessage>
                    </div>
                    <S.LoginButton onClick={SignInHandler}>로그인</S.LoginButton>
                    <S.SignUpButton
                        onClick={async () => await router.push('/sign-up')}
                    >
                        회원가입
                    </S.SignUpButton>
                    <S.SocialLogInBox>
                        <KakaoSignIn />
                        <GoogleSignIn />
                    </S.SocialLogInBox>
                </S.SignInBox>
            </S.Box>
        </S.Contain>
    )
}

export default SignIn