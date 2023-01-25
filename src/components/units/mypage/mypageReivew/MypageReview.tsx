import { useState } from 'react'
import * as S from './MypageReview.style'

const MypageReview = () => {
    const [reviewTitleOption, setReviewTitleOption] = useState<string>('possible_review')

    const reviewTitleOptionHandler = (id: string) => {
        setReviewTitleOption(id)
    }

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
                &&
                <S.ReviewBox>
                    현재 작성 가능한 리뷰가 없습니다.
                </S.ReviewBox>
            }
            {
                reviewTitleOption === 'writed_review'
                &&
                <S.ReviewBox>
                    작성한 리뷰가 없습니다.
                </S.ReviewBox>
            }
        </S.Contain>
    )
}

export default MypageReview