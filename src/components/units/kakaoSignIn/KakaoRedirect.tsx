/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect } from 'react'

const KakaoRedirect = () => {
    const router = useRouter()
    const REDIRECT = router.query.code
    const REST_API = ""
    const REDIRECT_URI = ""
    const QUERY_STRING = `grant_type=authorization_code&client_id=${REST_API}&code=${REDIRECT}&redirect_uri=${REDIRECT_URI}`

    useEffect(() => {
        axios.post(`https://kauth.kakao.com/oauth/token?${QUERY_STRING}`, {
            headers: {
                'Content-type': "application/x-www-form-urlencoded"
            }
        })
            .then(res => {
                if (res.statusText === "OK") {
                    console.log('Access_Token : ', res.data.access_token)
                    const platFormToken = async () => {
                        try {
                            await axios.post('http://192.168.182.162:3000/user/kakao', {
                                access_token: res.data.access_token
                            })
                                .then(res => {
                                    if (res.data.message === 'USER_CREATED') {
                                        console.log(res);
                                        localStorage.setItem('Access_token', res.data.access_token)
                                        router.push('/')
                                    } else {
                                        alert('로그인에 실패하셨습니다.')
                                        router.push('/login')
                                    }
                                })
                        } catch (error) {
                            if (error)
                                console.error(error)
                        }
                    }
                    platFormToken();
                }
            })
            .catch(error => { console.log(error); })
    }, [REDIRECT, REST_API, REDIRECT_URI])

    return (
        <></>
    )
}

export default KakaoRedirect