import styled from "@emotion/styled"
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons"
import { Rate } from "antd"
import moment from "moment"
import { useState } from "react"
export default function ProductDetailReviewBox(props) {
  const userNickName = props.reviewData?.map((el) => el.nickname)
  console.log(userNickName)
  const content = props.reviewData?.map((el) => el.content)
  console.log(content)
  const ReviewDateCreated = props.reviewData?.map((el) =>
    moment(el.created_at).format("YYYY.MM.DD")
  )

  return (
    <>
      {props.reviewData.map((el) => (
        <Contain key={el.id}>
          <ReviewBox>
            <StarDateBox>
              <Star>
                <Rate
                  defaultValue={el.star}
                  disabled
                />
              </Star>
              <Date>{moment(el.created_at).format("YYYY.MM.DD")}</Date>
            </StarDateBox>
            <Content>{el.content}</Content>
            <ImgBox>
              <Img src="/images/photo.avif" />
              <Img src="/images/phototest.avif" />
            </ImgBox>

            <HelpBox>
              <Helpful>
                <LikeOutlined style={{ color: "#bcc2cc", cursor: "pointer" }} />
                도움돼요{el.helpful}
              </Helpful>
              <UnHelpful>
                <DislikeOutlined
                  style={{ color: "#bcc2cc", cursor: "pointer" }}
                />
                도움안돼요{el.unhelpful}
              </UnHelpful>
            </HelpBox>
          </ReviewBox>
          <WhoReivewBox>
            <NickName>
              <span>{el.nickname}</span>님의 리뷰입니다.
            </NickName>
          </WhoReivewBox>
        </Contain>
      ))}
    </>
  )
}

const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid lightgray;
`

const ReviewBox = styled.div`
  width: 80%;
  padding: 20px;
`

const StarDateBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const Star = styled.div``

const Date = styled.div`
  color: #707680;
  padding: 1px 0;
  font-size: 12px;
  line-height: 18px;
`

const Content = styled.div`
  margin: 15px 0;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
  color: #14161a;
`

const ImgBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  img {
    &:hover {
      opacity: 0.5;
    }
  }
`

const Img = styled.img`
  width: 160px;
  height: 180px;
  margin-right: 10px;
  object-fit: cover;
`

const HelpBox = styled.div`
  display: flex;
`

const Helpful = styled.div`
  margin-right: 10px;
  /* margin-right: 4px; */
  color: #707680;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    color: #14161a;
    font-weight: bold;
  }
`

const UnHelpful = styled.div`
  color: #707680;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    color: #14161a;
    font-weight: bold;
  }
`

const WhoReivewBox = styled.div`
  padding: 20px;
  border-left: 1px solid lightgray;
`

const NickName = styled.div`
  margin-bottom: 4px;
  color: #14161a;
  overflow: hidden;

  font-size: 12px;
  line-height: 18px;

  span {
    font-weight: bold;
    color: #14161a;
  }
`
