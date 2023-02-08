import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_IP } from '../../../../common/utils/ApiIp'
import { IWritedReviewDataType } from '../Mypage.type'
import WritedUserReview from './getUserReview/WritedUserReview'
import * as S from './MypageReview.style'
import CreateReviewPossibleList from './possibleUserReview/PossibleUserReview'

const MypageReview = () => {
    const [reviewTitleOption, setReviewTitleOption] = useState<string>('writed_review')
    const [writedReviewData, setWritedReviewData] = useState<IWritedReviewDataType[]>([])

    const reviewTitleOptionHandler = (id: string) => {
        setReviewTitleOption(id)
    }

    const writedReviewDataHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/review/user`, {
                headers: {
                    "authorization": `${localStorage.getItem("access_token")}`
                }
            })
                .then(res => {
                    const { data } = res
                    setWritedReviewData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        writedReviewDataHandler()
    }, [])

    return (
        <S.Contain>
            <S.PageTitle>마이리뷰</S.PageTitle>
            <S.TegReviewTitle>
                <S.PossibleReview
                    option={reviewTitleOption}
                    onClick={() => { reviewTitleOptionHandler('possible_review'); }}
                >
                    작성가능한 리뷰 0
                </S.PossibleReview>
                <S.WritedReview
                    option={reviewTitleOption}
                    onClick={() => { reviewTitleOptionHandler('writed_review'); }}
                >
                    내가 작성한 리뷰 0
                </S.WritedReview>
            </S.TegReviewTitle>
            {
                reviewTitleOption === 'possible_review'
                    ?
                    <CreateReviewPossibleList />
                    :
                    reviewTitleOption === 'possible_review'
                    &&
                    <S.ReviewBox>
                        현재 작성 가능한 리뷰가 없습니다.
                    </S.ReviewBox>
            }
            {
                reviewTitleOption === 'writed_review'
                    &&
                    writedReviewData
                    ?
                    <WritedUserReview
                        writedData={writedReviewData}
                    />
                    :
                    reviewTitleOption === 'writed_review'
                    &&
                    <S.ReviewBox>
                        작성한 리뷰가 없습니다.
                    </S.ReviewBox>
            }
        </S.Contain >
    )
}

export default MypageReview