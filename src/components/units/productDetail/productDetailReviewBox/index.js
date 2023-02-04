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

  const help = props.reviewData?.map((el, i) => (
    <span key={i}>{el.helpful}</span>
  ))
  const disHelp = props.reviewData?.map((el) => el.unhelpful)
  // console.log(disHelp)

  return (
    <div>
      <ReviewWrapper>
        <ReviewContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              minHeight: "20px",
            }}
          >
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <Rate
                disabled
                defaultValue={4}
              />
              <GoodComment>맘에 들어요</GoodComment>
            </div>
            <ReviewDateBox>
              <ReviewDate>{ReviewDateCreated[0]}</ReviewDate>
            </ReviewDateBox>
          </div>
          <ReviewContentBox>
            <ReviewContent>{content[0]}</ReviewContent>
          </ReviewContentBox>

          <ImgBox>
            <img
              src="/images/photo.avif"
              style={{
                width: "160px",
                height: "180px",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <img
              src="/images/phototest.avif"
              style={{ width: "160px", height: "180px", objectFit: "cover" }}
            />
          </ImgBox>

          <div style={{ display: "flex", marginTop: "20px", height: "20px" }}>
            <HelpWrapper>
              <HelpContainer>
                <LikeOutlined style={{ color: "#bcc2cc", cursor: "pointer" }} />
                <Helpful>
                  도움돼요 <span>{help !== null ? help : ""}</span>
                </Helpful>
              </HelpContainer>
              <DisHelpContainer>
                <DislikeOutlined
                  style={{ color: "#bcc2cc", cursor: "pointer" }}
                />
                <DisHelp>
                  도움안돼요 <span>{disHelp[0]}</span>
                </DisHelp>
              </DisHelpContainer>
            </HelpWrapper>
            <CommentBox>
              <Commnet>댓글</Commnet>
              <CommentCount>0</CommentCount>
            </CommentBox>
          </div>
        </ReviewContainer>
        <UserReviewDetail>
          <UserNickname>
            <span>{userNickName[0]}</span>님의 리뷰입니다.
          </UserNickname>
          <UserDetailInfo>
            <div>
              <DetailTitle>키</DetailTitle> <DetailContent>160cm</DetailContent>
            </div>
            <div>
              <DetailTitle>몸무게</DetailTitle>{" "}
              <DetailContent>48kg</DetailContent>
            </div>
            <div>
              <DetailTitle>Color</DetailTitle>
              <DetailContent>(51)LIGHT BLUE</DetailContent>
            </div>
            <div>
              <DetailTitle>Size</DetailTitle>
              <DetailContent>S(085)</DetailContent>
            </div>
          </UserDetailInfo>
        </UserReviewDetail>
      </ReviewWrapper>
    </div>
  )
}

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px solid #d8dde5;
`
export const ImgBox = styled.div`
  margin: 0 10px;
`
export const ReviewContainer = styled.div`
  /* padding: 32px 0;
  border-bottom: 1px solid #d8dde5; */

  display: inline-block;
  border-right: 1px solid #d8dde5;
  padding-right: 40px;
  vertical-align: top;
  box-sizing: border-box;
  width: 75%;
`
export const ReviewDate = styled.div`
  color: #707680;
  padding: 1px 0;
  font-size: 12px;
  line-height: 18px;
`
export const ReviewDateBox = styled.div`
  position: relative;
  float: right;
`
export const ReviewContentBox = styled.div`
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
  color: #14161a;
  padding: 20px;
`
export const ReviewContent = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #14161a;
  max-height: 54px;
`

export const GoodComment = styled.div`
  margin-top: 5px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: #14161a;
  white-space: nowrap;
`

export const HelpWrapper = styled.div`
  display: flex;
  margin-right: 4px;
  color: #707680;
  margin-left: 10px;
`

export const Helpful = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
  &:hover {
    color: #14161a;
    font-weight: bold;
  }
`
export const DisHelp = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
  &:hover {
    color: #14161a;
    font-weight: bold;
  }
`
export const HelpContainer = styled.div`
  padding: 16px 0 16px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #707680;
`

export const DisHelpContainer = styled.div`
  padding: 16px 0 16px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #707680;
`
export const CommentBox = styled.div`
  /* border-left: 1px solid #d8dde5; */

  padding-left: 8px;
  padding: 16px 16px 16px 0;
  color: #707680;
  &:hover {
    color: #14161a;
    font-weight: bold;
  }
`
export const Commnet = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #707680;
  cursor: pointer;
`
export const CommentCount = styled.span`
  margin-left: 4px;
  margin-right: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #707680;
  cursor: pointer;
`
const UserReviewDetail = styled.div`
  padding-left: 40px;
  margin-top: 100px;
  width: 25%;
`
const UserNickname = styled.div`
  margin-bottom: 4px;
  color: #14161a;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 18px;

  span {
    font-weight: bold;
    color: #14161a;
  }
`
const UserDetailInfo = styled.div`
  margin-top: 4px;
`

const DetailTitle = styled.span`
  margin-right: 4px;
  font-weight: bold;
  line-height: 18px;
  color: #707680;
  font-size: 12px;
`
const DetailContent = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #707680;
`
