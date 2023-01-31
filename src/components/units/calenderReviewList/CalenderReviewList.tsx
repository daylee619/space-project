import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './CalenderReviewList.style'


interface ICommentDataType {
    id: number
    user: string
    create_at: string
    comment: string
}

const CalenderReviewList = () => {
    const [commentData, setCommentData] = useState<ICommentDataType[]>([])
    const router = useRouter()

    const commentDataHandler = async () => {
        try {
            await axios.get('/data/data.json', {
                headers: {
                    "authorization": localStorage.getItem('access_token'),
                    "calenderId": router.query.calenderId
                }
            })
                .then(res => {
                    const { data } = res
                    setCommentData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        commentDataHandler()
    }, [])

    return (
        <S.Contain>
            <S.Title>댓글({commentData.length})</S.Title>
            <S.CommentListBox>
                {
                    commentData.map(el =>
                        <S.CommentItemBox key={el.id}>
                            <S.CommentItemUserBox>
                                <S.CommentItemUser>{el.user}</S.CommentItemUser>
                                <S.CommentDate>{el.create_at}</S.CommentDate>
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