/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect } from 'react'
import { API_IP } from '../../../common/utils/ApiIp'

const KakaoRedirect = () => {
    const router = useRouter()

    const CODE = router.query.code
    const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'
    const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API
    const API = `grant_type=authorization_code&client_id=${CLIENT_ID}&code=${CODE}&redirect_uri=${REDIRECT_URI}`

    useEffect(() => {
        axios.post(`https://kauth.kakao.com/oauth/token?${API}`, {
            headers: {
                'Content-type': "application/x-www-form-urlencoded"
            }
        })
            .then(res => {
                if (res.statusText === "OK") {
                    const platFormToken = async () => {
                        try {
                            await axios.post(`http://${API_IP}:3000/user/kakao`, {
                                access_token: res.data.access_token
                            })
                                .then(res => {
                                    if (res.data.message === 'USER_CREATED') {
                                        localStorage.setItem('access_token', res.data.access_token)
                                        router.push('/')
                                    } else if (res.data.message === "LOGIN_SUCCESS") {
                                        localStorage.setItem('access_token', res.data.access_token)
                                        router.push('/')
                                    } else {
                                        alert('로그인에 실패하셨습니다.')
                                        router.push('/sign-in')
                                    }
                                })
                        } catch (error) {
                            if (error) {
                                console.error(error)
                                router.push('/sign-in')
                            }
                        }
                    }
                    platFormToken();
                }
            })
            .catch(error => { console.log("error : ", error); })
    }, [CODE, CLIENT_ID, REDIRECT_URI])

    return (
        <></>
    )
}

export default KakaoRedirect