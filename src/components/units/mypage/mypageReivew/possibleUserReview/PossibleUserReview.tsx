import { useRouter } from 'next/router'
import * as S from './PossibleUserReview.style'

interface IPossibleListDataType {
    id: number
    thumbnail: string
    productName: string
    productId: number
}

interface ICreateReviewPossibleListPropsType {
    listData: IPossibleListDataType[]
}

const CreateReviewPossibleList = (props: ICreateReviewPossibleListPropsType) => {
    const { listData } = props

    const router = useRouter()

    return (
        <S.Contain>
            {
                listData.map(el =>
                    <S.InContain key={el.id}>
                        <S.ImgBox>
                            <S.ProductImg
                                src={el.thumbnail}
                                alt={el.productName}
                            />
                        </S.ImgBox>
                        <S.ProductContentBox>
                            <S.ProductNameBox>
                                <S.ProductName>{el.productName}</S.ProductName>
                                <S.ProductSubName>{el.productName}</S.ProductSubName>
                            </S.ProductNameBox>
                            <S.PostEndDate>
                                {el.productId}
                            </S.PostEndDate>
                        </S.ProductContentBox>
                        <S.ReviewBox>
                            <S.ReviewWrite
                                onClick={async () => await router.push(`/review/create/${el.productId}`)}
                            >
                                리뷰 작성하기</S.ReviewWrite>
                            <S.ReviewHide>숨기기</S.ReviewHide>
                        </S.ReviewBox>
                    </S.InContain>
                )
            }
        </S.Contain>
    )
}

export default CreateReviewPossibleList