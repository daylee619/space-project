import * as S from './WritedUserReview.style'
import { IWritedUserReveiwPropsType } from '../../Mypage.type';

const WritedUserReview = (props: IWritedUserReveiwPropsType) => {
    const { writedData } = props

    return (
        <S.Contain>
            {writedData.map(el =>
                <S.InContain key={el.id}>
                    <S.ReviewInfoBox>
                        <S.ReviewInfoTitleBox>
                            <S.ReviewInfoImg src={el.thumbnail} alt={el.title} />
                            <S.ReviewInfoTitle>{el.title}</S.ReviewInfoTitle>
                        </S.ReviewInfoTitleBox>
                        <S.ReviewInfoConfirmBox>
                            <S.ReviewInfoModify>수정</S.ReviewInfoModify>
                            <S.ReviewInfoDelete>삭제</S.ReviewInfoDelete>
                        </S.ReviewInfoConfirmBox>
                    </S.ReviewInfoBox>
                    <S.ReviewContentBox>
                        <S.ReviewGradeBox>
                            <S.RateCss disabled defaultValue={Number(el.star)} />
                            <S.ReviewDate>{el.created_at}</S.ReviewDate>
                        </S.ReviewGradeBox>
                        <S.ReviewContent>{el.content}</S.ReviewContent>
                    </S.ReviewContentBox>
                </S.InContain>
            )}
        </S.Contain>
    )
}

export default WritedUserReview