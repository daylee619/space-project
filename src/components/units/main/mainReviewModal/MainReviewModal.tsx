import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import styled from "@emotion/styled"
import {
  StarFilled,
  LikeOutlined,
  DislikeOutlined,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
} from "@ant-design/icons"
import { Rate } from "antd"
import moment from "moment"
import * as S from "./MainReviewModal.styles"
import { API_IP } from "../../../../common/utils/ApiIp"
import {
  IMainReviewModal,
  IMainReviewModalProps,
} from "./MainReviewModal.types"
export default function MainReviewModal(props: IMainReviewModalProps) {
  const [data, setData] = useState<IMainReviewModal>()
  useEffect(() => {
    axios.get(`http://${API_IP}:3000/review/main/${reviewId}`).then((res) => {
      setData(res.data)
      //   console.log(data)
    })
  }, [])

  const createDate = data?.detailReview?.created_at
  const createdDate = moment(createDate).format("YYYY.MM.DD")

  const a = data?.productInfo?.map((el) => Number(el.starAverage)).join()
  console.log(a)

  const [like, setLike] = useState(0)
  const [unLike, setUnLike] = useState(0)

  const settings = {
    customPaging: function (i: number) {
      return data?.productInfo.map((el) => (
        <a key={el.id}>
          <img src={el.thumbnail} />
        </a>
      ))
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
  }
  return (
    <S.MainReviewModalWrapper>
      <S.ReviewLeftModal>
        <S.LeftWrapper>
          <S.LeftIcon>
            <LeftOutlined
              style={{
                cursor: "pointer",
                marginLeft: "30px",
                position: "absolute",
                top: "50%",
                color: "#bcc2cc",
              }}
            />
          </S.LeftIcon>
          <ProductReview {...settings}>
            {data?.productInfo?.map((el) => (
              <S.ReviewImgWrapper key={el.id}>
                <S.ReviewImg src={el.thumbnail} />
              </S.ReviewImgWrapper>
            ))}
          </ProductReview>
          <S.RightIcon>
            <RightOutlined
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                color: "#bcc2cc",
                right: "500px",
              }}
            />
          </S.RightIcon>
        </S.LeftWrapper>

        <S.ProductInfoWrapper>
          {data?.productInfo?.map((el) => (
            <S.ProductInfoBox key={el.id}>
              <div key={el.id}>
                <S.ReviewThumbnail src={el.thumbnail}></S.ReviewThumbnail>
              </div>
              <S.ProductInfoTop>
                <S.Name key={el.id}>
                  {el.name}
                  <CloseOutlined
                    style={{ marginLeft: "20px", cursor: "pointer" }}
                    onClick={props.onClose}
                  />
                </S.Name>

                <div key={el.id}>
                  <S.StarContainer>
                    <div>
                      <StarFilled
                        style={{
                          color: "#F8E71C",
                          fontSize: "10px",
                          marginRight: "6px",
                        }}
                      />
                    </div>

                    <S.StarWrapper>
                      <S.StarAverage key={el.id}>
                        {Number(el.starAverage)}
                      </S.StarAverage>
                      <S.ReviewCount>리뷰 {el.reviewCount}</S.ReviewCount>
                    </S.StarWrapper>
                  </S.StarContainer>
                </div>
              </S.ProductInfoTop>
            </S.ProductInfoBox>
          ))}
          <S.ReviewContainer>
            <S.ReviewBox>
              <S.StarBox>
                <Rate
                  value={3}
                  style={{ fontSize: "8px", marginRight: "8px" }}
                />

                <S.Good>아주 좋아요</S.Good>
              </S.StarBox>
              <S.CreatedDate>{createdDate}</S.CreatedDate>
            </S.ReviewBox>
            <S.ReviewWrapper>
              <S.NicknameBox>
                <S.Nickname>{data?.detailReview?.nickname}</S.Nickname>
                님의 리뷰입니다.
              </S.NicknameBox>
              <S.DetailReviewContent>
                {data?.detailReview?.content}
              </S.DetailReviewContent>
            </S.ReviewWrapper>

            <S.HelpfulContainer>
              <S.HelpWrapper
                onClick={() => {
                  setLike(like + 1)
                }}
              >
                <LikeOutlined />
                <S.Helpful>도움돼요</S.Helpful>
                <S.HelpfulCount>{data?.detailReview?.helpful}</S.HelpfulCount>
                <span style={{ marginRight: "4px" }}>{like}</span>
              </S.HelpWrapper>
              <S.UnHelpfulWrapper
                onClick={() => {
                  setUnLike(unLike - 1)
                }}
              >
                <DislikeOutlined />
                <S.Unhelpful>도움안돼요</S.Unhelpful>
                <S.UnhelpfulCount>
                  {data?.detailReview?.unhelpful}
                </S.UnhelpfulCount>
              </S.UnHelpfulWrapper>
            </S.HelpfulContainer>
            <S.DifferentReviewWrapper>
              <S.DifferentReview>이 상품의 다른 리뷰</S.DifferentReview>
            </S.DifferentReviewWrapper>
          </S.ReviewContainer>
        </S.ProductInfoWrapper>
      </S.ReviewLeftModal>
    </S.MainReviewModalWrapper>
  )
}

export const ProductReview = styled(Slider)`
  .slick-list {
    overflow: inherit;
  }
`
