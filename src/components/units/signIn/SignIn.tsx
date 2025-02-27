import axios from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { API_IP } from '../../../common/utils/ApiIp'
import { ID_REG_EX, PASSWORD_REG_EX } from '../../../common/utils/RegEx'
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

    // key down
    const loginForEnter = (key: string) => {
        if (key === "Enter") {
            SignInHandler()
        }
    }

    const SignInHandler = async () => {
        try {
            console.log('1')
            if (userId && userPassword && ID_REG_EX.test(userId) && PASSWORD_REG_EX.test(userPassword)) {
                console.log('2')
                await axios.post(`http://${API_IP}:3000/user/login`, {
                    email: userId,
                    password: userPassword
                })
                    .then(res => {
                        console.log('3')
                        if (res.data.access_token) {
                            localStorage.setItem('access_token', res.data.access_token)
                        }
                    })
                    .then(async () =>
                        await router.push('/')
                    )
                console.log('4')
                if (!userId) {
                    console.log('sss')
                    setErrorId("ID를 입력해 주세요.")
                }
                if (!userPassword) {
                    setErrorPassword("Password를 입력해 주세요.")
                }
                if (!ID_REG_EX.test(userId)) {
                    alert('아이디를 다시 확인해 주세요')
                }
                if (!PASSWORD_REG_EX.test(userPassword)) {
                    alert('비밀번호를 다시 확인해 주세요')
                }
            }
        } catch (error) {
            console.error(error)
            alert(error)
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
                        <S.PasswordInput
                            type="password"
                            onChange={passwordChangeHandler}
                            onKeyPress={(e) => { loginForEnter(e.key); }}
                        />
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