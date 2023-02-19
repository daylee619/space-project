import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { API_IP } from '../../../common/utils/ApiIp'
import * as S from './CalenderReviewList.style'

interface IReviewsType {
    commentId: number,
    comment: string
    created_at: string
    nickname: string
}

interface ICommentDataType {
    reviews: IReviewsType[]
    count: {
        count: string
    }
}

interface ICalendarReviewListPropsType {
    message: string | undefined
}

const CalenderReviewList = (props: ICalendarReviewListPropsType) => {
    const { message } = props
    const [commentData, setCommentData] = useState<ICommentDataType>()
    console.log('commentData : ', commentData)
    const router = useRouter()

    const calendarId = router.query.calenderId && router.query.calenderId

    const commentDataHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/review/calendar/${calendarId}`)
                .then(res => {
                    const { data } = res
                    if (data) setCommentData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        commentDataHandler()
    }, [message, router])


    return (
        <S.Contain>
            <S.Title>댓글({commentData?.count?.count})</S.Title>
            <S.CommentListBox>
                {
                    commentData?.reviews?.map(el =>
                        <S.CommentItemBox key={el.commentId}>
                            <S.CommentItemUserBox>
                                <S.CommentItemUser>{el.nickname}</S.CommentItemUser>
                                <S.CommentDate>{el.created_at}</S.CommentDate>
                            </S.CommentItemUserBox>
                            <S.Comment>
                                {el.comment}
                            </S.Comment>
                        </S.CommentItemBox>
                    )
                }
            </S.CommentListBox>
        </S.Contain>
    )
}

export default CalenderReviewList