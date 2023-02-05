import axios from 'axios'
import { useEffect, useState } from 'react'
import * as S from './PossibleUserReview.style'

interface IPossibleListDataType {
    id: number
    thumbnail: string
    productName: string
    productId: number
}

const CreateReviewPossibleList = () => {
    const [listData, setListData] = useState<IPossibleListDataType[]>([])

    const possibleListDataHandler = async () => {
        try {
            await axios.get('http://172.16.101.103:3000/review/creation', {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    const { data } = res
                    setListData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        possibleListDataHandler()
    }, [])

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
                            <S.ReviewWrite>리뷰 작성하기</S.ReviewWrite>
                            <S.ReviewHide>숨기기</S.ReviewHide>
                        </S.ReviewBox>
                    </S.InContain>
                )
            }
        </S.Contain>
    )
}

export default CreateReviewPossibleList