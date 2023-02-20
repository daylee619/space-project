import * as S from "./ProductDetailReviewBox.styles"
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons"
import { Rate } from "antd"
import moment from "moment"
import axios from "axios"
import { API_IP } from "../../../../common/utils/ApiIp"
import { IProductDetailReviewBoxProps } from "./ProductDetailReviewBox.types"
export default function ProductDetailReviewBox(
  props: IProductDetailReviewBoxProps
) {
  const helpfulHandler = async (reviewId: number) => {
    try {
      await axios.post(
        `http://${API_IP}:3000`,
        {
          review_id: reviewId,
          state: "helpful",
        },
        {
          headers: {
            authorization: `${localStorage.getItem("access_token")}`,
          },
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  const unhelpfulHandler = async (reviewId: number) => {
    try {
      await axios.post(
        `http://${API_IP}:3000`,
        {
          review_id: reviewId,
          state: "unhelpful",
        },
        {
          headers: {
            authorization: `${localStorage.getItem("access_token")}`,
          },
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {props.reviewData.map((el) => (
        <S.Contain key={el.id}>
          <S.ReviewBox>
            <S.StarDateBox>
              <S.Star>
                <Rate
                  defaultValue={el.star}
                  disabled
                />
              </S.Star>
              <S.Date>{moment(el.created_at).format("YYYY.MM.DD")}</S.Date>
            </S.StarDateBox>
            <S.Content>{el.content}</S.Content>
            <S.ImgBox>
              <S.Img src="/images/photo.avif" />
              <S.Img src="/images/phototest.avif" />
            </S.ImgBox>

            <S.HelpBox>
              <S.Helpful>
                <LikeOutlined style={{ color: "#bcc2cc", cursor: "pointer" }} />
                도움돼요{el.helpful}
              </S.Helpful>
              <S.UnHelpful>
                <DislikeOutlined
                  style={{ color: "#bcc2cc", cursor: "pointer" }}
                />
                도움안돼요{el.unhelpful}
              </S.UnHelpful>
            </S.HelpBox>
          </S.ReviewBox>
          <S.WhoReivewBox>
            <S.NickName>
              <span>{el.nickname}</span>님의 리뷰입니다.
            </S.NickName>
          </S.WhoReivewBox>
        </S.Contain>
      ))}
    </>
  )
}
