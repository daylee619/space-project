import * as S from "./ProductDetailReview.styles"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  StarFilled,
  RightOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons"
import ProductDetailReviewBox from "../productDetail/productDetailReviewBox/ProductDetailReviewBox"
import ReviewStarDropdown from "../productDetailReviewSelect/ProductDetailReviewSelect"
import { API_IP } from "../../../common/utils/ApiIp"
import { IReviewScore, IReviewByProduct } from "./ProductDetailReview.types"
export default function ReviewByProduct() {
  const [data, setData] = useState<IReviewScore>()
  const [reviewData, setReviewData] = useState<IReviewByProduct[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios.get(`http://${API_IP}:3000/review/score/${ProductId}`).then((res) => {
      setData(res.data)
    })
  }, [])

  useEffect(() => {
    axios
      .get(`http://${API_IP}:3000/review/product/${ProductId}`)
      .then((res) => {
        setReviewData(res.data)
        console.log(reviewData)
      })
  }, [])

  const onClickStarHandler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div style={{ margin: "0 100px" }}>
        <S.TopWrapper>
          <S.ReviewTitle>REVIEW</S.ReviewTitle>
          <S.TopWrapperRight>
            <S.AllReview>전체 상품 리뷰 보기</S.AllReview>
            <S.Notice>
              공지사항 <span>3</span>
            </S.Notice>
          </S.TopWrapperRight>
        </S.TopWrapper>
        <S.ConsumerAvg>
          <S.AverBox>
            <StarFilled
              style={{ fontSize: "30px", color: "#F8E71C", marginTop: "20px" }}
            />
            <S.StarAverage>
              {data?.scoreAvg?.map((el, i) => (
                <div key={i}>{Number(el.starAVG).toFixed(1)}</div>
              ))}
            </S.StarAverage>
          </S.AverBox>
          <S.ConsumerLike>
            <span>99%</span>의 구매자가 이 상품을 좋아합니다.
          </S.ConsumerLike>
        </S.ConsumerAvg>
        <S.PhotoVideoWrapper>
          <S.PhotoWrapper>
            <S.Photo>포토&동영상</S.Photo>
            <S.AllPhoto>
              전체보기 <RightOutlined />
            </S.AllPhoto>
          </S.PhotoWrapper>
          <S.ImgBox>
            <S.ImgFirst src="/images/photo.avif" />
            <S.ImgSecond src="/images/phototest.avif" />
          </S.ImgBox>
        </S.PhotoVideoWrapper>
        <div>
          <S.ReviewMenuWrapper>
            <S.ReviewMenu>
              <S.ReviewMenuList>추천순</S.ReviewMenuList>
              <S.ReviewMenuList>최신순</S.ReviewMenuList>
              <S.ReviewMenuList>별점순</S.ReviewMenuList>
              <S.ReviewMenuList>
                <S.ReviewSearchWrapper>
                  <S.ReviewSearch
                    type="text"
                    placeholder="리뷰 키워드 검색"
                  />
                  <S.SearchBtn>
                    <SearchOutlined />
                  </S.SearchBtn>
                </S.ReviewSearchWrapper>
              </S.ReviewMenuList>
            </S.ReviewMenu>
          </S.ReviewMenuWrapper>
          <S.OptionBtnContainer>
            <S.StarOptionBtn onClick={onClickStarHandler}>
              <S.StarOptionClick>
                별점
                <DownOutlined
                  style={{ fontSize: "10px", marginLeft: "10px" }}
                />
              </S.StarOptionClick>
            </S.StarOptionBtn>
          </S.OptionBtnContainer>

          {isOpen && <ReviewStarDropdown />}
          <ProductDetailReviewBox reviewData={reviewData} />
          <ProductDetailReviewBox reviewData={reviewData} />
        </div>
      </div>
    </>
  )
}
