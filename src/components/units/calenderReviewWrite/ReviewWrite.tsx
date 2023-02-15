import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { API_IP } from '../../../common/utils/ApiIp'
import CalenderReviewList from '../calenderReviewList/CalenderReviewList'
import * as S from './ReviewWrite.style'


const CalenderReviewWrite = () => {
    const [comment, setComment] = useState('')
    const [message, setMessage] = useState<string | undefined>('')
    const router = useRouter()

    const commentConfirmHandler = async () => {
        try {
            await axios.post(`http://${API_IP}:3000/review/calendar`, {
                calendarId: router.query.calenderId,
                comment
            }, {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    const { data } = res
                    setMessage(data.message)
                    setComment('')
                })
        } catch (error) {
            console.log(error)
        }
    }

    const commentChangeHandler = (comment: string) => {
        setComment(comment)
    }

    return (
        <>
            <S.Contain>
                <S.CommentText>
                    댓글 달기
                </S.CommentText>
                <S.CommentBox>
                    <S.CommentCreateBox>
                        <S.CommentCreate value={comment} onChange={(e) => { commentChangeHandler(e.target.value); }} />
                        <S.CommentConfirm onClick={commentConfirmHandler}>등록</S.CommentConfirm>
                    </S.CommentCreateBox>
                </S.CommentBox>
            </S.Contain>
            <CalenderReviewList message={message} />
        </>
    )
}

export default CalenderReviewWrite