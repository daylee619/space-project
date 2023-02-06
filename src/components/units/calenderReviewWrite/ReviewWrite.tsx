import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './ReviewWrite.style'


const CalenderReviewWrite = () => {
    const [userData, setUserData] = useState()
    const [comment, setComment] = useState('')
    const router = useRouter()

    const userInfoData = async () => {
        try {
            await axios.get('api', {
                headers: {
                    'authurrization': localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    setUserData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const commentConfirmHandler = async () => {
        try {
            await axios.post('api', {
                calenderId: router.query.calenderId,
                comment
            })
        } catch (error) {
            console.log(error)
        }
    }

    const commentChangeHandler = (comment: string) => {
        setComment(comment)
    }

    useEffect(() => {
        userInfoData()
    }, [])

    return (
        <S.Contain>
            <S.CommentText>
                댓글 달기
            </S.CommentText>
            <S.CommentBox>
                <S.UserInfoBox>
                    <S.UserIdBox>
                        <S.UserIdLael>이름</S.UserIdLael>
                        <S.UserIdInput type='text' value={userData?.id} />
                    </S.UserIdBox>
                    <S.PasswordBox>
                        <S.PasswordLael>비밀번호</S.PasswordLael>
                        <S.PasswordInput type='password' value={userData?.password} />
                    </S.PasswordBox>
                </S.UserInfoBox>
                <S.CommentCreateBox>
                    <S.CommentCreate onChange={(e) => { commentChangeHandler(e.target.value); }} />
                    <S.CommentConfirm onClick={commentConfirmHandler}>등록</S.CommentConfirm>
                </S.CommentCreateBox>
            </S.CommentBox>
        </S.Contain>
    )
}

export default CalenderReviewWrite