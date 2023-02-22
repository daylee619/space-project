import * as S from "./ProductListBottomRecommend.styles"
import axios from "axios"
import { API_IP } from "../../../common/utils/ApiIp"
import { useEffect, useState } from "react"
import { RightOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import { IReviewRecommend } from "./ProductListBottomRecommend.types"
export default function ProductListRecommend() {
  const [data, setData] = useState<IReviewRecommend[]>([])
  const router = useRouter()

  useEffect(() => {
    axios
      .get(`http://${API_IP}:3000/product/recommend?offset=1`)
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <S.ReviewRecommendContainer>
      <S.RecommendReviewTitleWrapper>
        <S.RecommendReviewTitle>Recommended by REVIEW</S.RecommendReviewTitle>
      </S.RecommendReviewTitleWrapper>

      <S.RecommendItemWrapper>
        {data.map((el) => (
          <S.RecommendItem key={el.id}>
            <S.RecommendItemImgBox
              key={el.id}
              onClick={async () => await router.push("/productdetail")}
            >
              <S.RecommendItemImg src={el.thumbnail} />

              <S.Star star={el.star}>
                {el.star !== null ? `평점 ${Number(el.star).toFixed(1)}` : ""}
              </S.Star>
            </S.RecommendItemImgBox>
            <S.RecommendItemInfo>
              <S.RecommendItemName key={el.id}>{el.name}</S.RecommendItemName>
              <S.RecommendItemPrice key={el.id}>
                {el.price}
              </S.RecommendItemPrice>

              <S.InfoBottomWrapper>
                <S.ReviewContent key={el.id}>
                  {el.reviewInform?.content === null
                    ? "작성된 리뷰가 없습니다."
                    : `${el.reviewInform?.content}`}
                </S.ReviewContent>
                <S.ReviewCount>
                  {el.reviewCount !== null
                    ? `${el.reviewCount}개 리뷰 모두 보기`
                    : null}

                  <span>
                    {el.reviewCount !== null ? (
                      <RightOutlined style={{ fontSize: "10px" }} />
                    ) : null}
                  </span>
                </S.ReviewCount>
              </S.InfoBottomWrapper>
            </S.RecommendItemInfo>
          </S.RecommendItem>
        ))}
      </S.RecommendItemWrapper>
    </S.ReviewRecommendContainer>
  )
}
