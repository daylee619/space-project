import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  StarFilled,
  RightOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons"
import ProductDetailReviewBox from "../productDetail/productDetailReviewBox"
import ReviewStarDropdown from "../productDetailReviewSelect"

export default function ReviewByProduct() {
  const [data, setData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios.get("/data/reviewScore.json").then((res) => {
      setData(res.data)
      //   console.log(data)
    })
  }, [])

  useEffect(() => {
    axios.get("/data/reviewByproduct.json").then((res) => {
      setReviewData(res.data)
      console.log(reviewData)
    })
  }, [])

  const onClickStarHandler = () => {
    setIsOpen((prev) => !prev)
  }

  const average = data.scoreAvg?.map((el) => el.starAVG)
  console.log(average)
  const starAvg = Number(average).toFixed(1)
  console.log(starAvg)

  return (
    <>
      <div style={{ margin: "0 100px" }}>
        <TopWrapper>
          <ReviewTitle>REVIEW</ReviewTitle>
          <TopWrapperRight>
            <AllReview>전체 상품 리뷰 보기</AllReview>
            <Notice>
              공지사항 <span>3</span>
            </Notice>
          </TopWrapperRight>
        </TopWrapper>
        <ConsumerAvg>
          <AverBox>
            <StarFilled
              style={{ fontSize: "30px", color: "#F8E71C", marginTop: "20px" }}
            />
            <StarAverage>
              {data.scoreAvg?.map((el, i) => (
                <div key={el.i}>{Number(el.starAVG).toFixed(1)}</div>
              ))}
            </StarAverage>
          </AverBox>
          <ConsumerLike>
            <span>99%</span>의 구매자가 이 상품을 좋아합니다.
          </ConsumerLike>
        </ConsumerAvg>
        <PhotoVideoWrapper>
          <PhotoWrapper>
            <Photo>포토&동영상</Photo>
            <AllPhoto>
              전체보기 <RightOutlined />
            </AllPhoto>
          </PhotoWrapper>
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
        </PhotoVideoWrapper>
        <div>
          <ReviewMenuWrapper>
            <ReviewMenu>
              <ReviewMenuList>추천순</ReviewMenuList>
              <ReviewMenuList>최신순</ReviewMenuList>
              <ReviewMenuList>별점순</ReviewMenuList>
              <ReviewMenuList>
                <ReviewSearchWrapper>
                  <ReviewSearch
                    type="text"
                    placeholder="리뷰 키워드 검색"
                  />
                  <SearchBtn>
                    <SearchOutlined />
                  </SearchBtn>
                </ReviewSearchWrapper>
              </ReviewMenuList>
            </ReviewMenu>
          </ReviewMenuWrapper>
          <OptionBtnContainer>
            <StarOptionBtn onClick={onClickStarHandler}>
              <StarOptionClick>
                별점
                <DownOutlined
                  style={{ fontSize: "10px", marginLeft: "10px" }}
                />
              </StarOptionClick>
            </StarOptionBtn>
          </OptionBtnContainer>

          {/* <StarOptionContaineriner>
            <StarOptionBtn>
              <StarOptionClick>
                별점
                <DownOutlined
                  style={{ fontSize: "10px", marginLeft: "10px" }}
                />
              </StarOptionClick>
            </StarOptionBtn>
            <StarContainer>
              <StarOptionList>
                <StarResetWrapper>
                  <div>별점</div>
                  <ResetWrapper>
                    <div>초기화 </div>
                    <RedoOutlined style={{ marginLeft: "3px" }} />
                  </ResetWrapper>
                </StarResetWrapper>

                <StarList>
                  <Rate
                    defaultValue={5}
                    disabled
                  />
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                  />
                </StarList>
                <StarList>
                  <Rate
                    defaultValue={4}
                    disabled
                  />
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                  />
                </StarList>
                <StarList>
                  <Rate
                    defaultValue={3}
                    disabled
                  />
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                  />
                </StarList>
                <StarList>
                  <Rate
                    defaultValue={2}
                    disabled
                  />
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                  />
                </StarList>
                <StarList>
                  <Rate
                    defaultValue={1}
                    disabled
                  />
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                  />
                </StarList>
              </StarOptionList>
              <BtnWrapper>
                <OptionSelectBtn>
                  <span>완료</span>
                </OptionSelectBtn>
              </BtnWrapper>
            </StarContainer>
          </StarOptionContaineriner> */}
          {isOpen && (
            <ReviewStarDropdown
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              reviewData={reviewData}
              setReviewData={setReviewData}
            />
          )}
          <ProductDetailReviewBox
            reviewData={reviewData}
            setReviewData={setReviewData}
            data={data}
            setData={setData}
          />
          <ProductDetailReviewBox
            reviewData={reviewData}
            setReviewData={setReviewData}
            data={data}
            setData={setData}
          />
        </div>
      </div>
    </>
  )
}

export const ReviewTitle = styled.div`
  flex-grow: 1;
  line-height: 30px;
  font-size: 20px;
  color: #14161a;
  font-weight: bold;
  margin-left: 10px;
`
export const TopWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #14161a;
  padding: 16px 0;
  width: 100%;
  font-size: 12px;
`
export const TopWrapperRight = styled.div`
  display: flex;
`
export const AllReview = styled.div`
  white-space: nowrap;
  font-size: 14px;
  color: #707680;
  padding: 0 12px 16px;
`
export const Notice = styled.span`
  white-space: nowrap;
  font-size: 14px;
  color: #707680;
  padding: 0 12px 16px;
  span {
    font-weight: bold;
  }
`
export const StarAverage = styled.div`
  margin-left: 4px;
  font-size: 28px;
  font-weight: bold;
  line-height: 72px;
  color: #14161a;
  vertical-align: bottom;
`
export const AverBox = styled.div`
  display: flex;
  justify-content: center;
`
export const ConsumerLike = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #14161a;
  span {
    font-weight: bold;
  }
`
export const ConsumerAvg = styled.div`
  width: 399px;
  min-height: 122px;
  border-right: solid 1px #d8dde5;
  padding: 30px 0;
  font-size: 0;
  /* border-bottom: 1px solid #ebeff5; */
`
export const PhotoVideoWrapper = styled.div`
  padding: 32px 0;
  border-top: 1px solid #ebeff5;
  border-bottom: 1px solid #ebeff5;
`
export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Photo = styled.div`
  font-size: 12px;
  line-height: 24px;
  vertical-align: middle;
  text-align: left;
  color: #14161a;
  margin-left: 10px;
`
export const AllPhoto = styled.div`
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
  padding: 14px 0 14px 14px;
  /* position: absolute; */
  /* top: 20px;
  right: 0; */
  color: #707680;
`
export const ImgBox = styled.div`
  margin: 0 10px;
`
export const ReviewMenuWrapper = styled.div`
  border-bottom: 1px solid #ebeff5;
  display: flex;
  position: relative;
`
// export const StarOptionContainer = styled.div`
//   /* position: relative; */
//   width: 200px;
//   height: 40px;
// `
export const OptionBtnContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #ebeff5;
  padding: 12px 4px;
`
export const StarOptionBtn = styled.button`
  border-color: #14161a;
  border-radius: 4px;
  border: solid 1px #ebeff5;
  background-color: #ffffff;
  /* padding: 8px 12px; */
  margin-left: 10px;
`

export const StarOptionClick = styled.div`
  padding: 8px 12px;
`
// export const StarContainer = styled.div`
//   /* width: 320px; */
//   max-height: 400px;
//   /* top: 788.336px; */
//   top: 738px;
//   /* left: 33.4922px; */
//   left: 100px;
//   position: absolute;
//   z-index: 1;
//   border-radius: 8px;
//   border: 1px solid #ebeff5;
//   background-color: #ffffff;
//   overflow-y: scroll;
//   margin-top: 7px;
// `
// export const StarOptionList = styled.ul`
//   position: relative;
//   /* top: 100px; */
//   background-color: #ffffff;
//   padding: 8px 16px;
// `
// export const StarOptionContaineriner = styled.div``
// export const StarResetWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 14px;
//   font-weight: bold;
//   color: #14161a;
//   padding: 16px 0 12px 0;
//   line-height: 20px;
//   width: 200px;
// `
// export const StarList = styled.li`
//   display: flex;
//   justify-content: space-between;
//   cursor: pointer;
//   position: relative;
//   background-color: white;
//   font-size: 12px;
//   padding: 4px 22px 16px 0;
//   line-height: 18px;
//   border-bottom: 1px solid #ebeff5;
//   width: 200px;
// `
// export const BtnWrapper = styled.div`
//   background-color: white;
//   margin-top: -3px;
//   border-top: 1px solid #ebeff5;
//   padding: 16px;
// `
// export const OptionSelectBtn = styled.button`
//   width: 200px;
//   cursor: pointer;
//   background-color: #14161a;
//   color: white;
//   border-radius: 4px;
//   height: 40px;
//   text-align: center;
//   font-size: 14px;
//   margin-top: 10px;
//   span {
//     line-height: 36px;
//     color: white;
//     text-align: center;
//     font-size: 14px;
//   }
// `
// export const ResetWrapper = styled.div`
//   display: flex;
// `
export const ReviewMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 10px;
`
export const ReviewMenuList = styled.li`
  cursor: pointer;
  /* display: inline-block; */
  padding: 22px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #bcc2cc;

  &:hover {
    color: #14161a;
    font-weight: bold;
  }
`
export const ReviewSearchWrapper = styled.div`
  display: flex;
  position: relative;
  height: 32px;
  width: 238px;
  border: solid 1px #d8dde5;
  border-radius: 4px;
  left: 600px;
`

export const ReviewSearch = styled.input`
  font-size: 12px;
  color: #14161a;
  line-height: 18px;
  border: none;
  margin: 6px 8px 6px 32px;
  text-overflow: ellipsis;
  outline: none;
`
export const SearchBtn = styled.button`
  position: absolute;
  border-radius: 5px;
  background-color: transparent;
  padding: 6px;
  margin: 1px;
  right: 10px;
  border: none;
  top: 4px;
  cursor: pointer;
`
export const ReviewContainer = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid #d8dde5;
`

export const GoodComment = styled.div`
  margin-top: 5px;
`
export const HelpWrapper = styled.div`
  display: flex;
  margin-right: 4px;
  color: #707680;
`

export const Helpful = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
`
export const DisHelp = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
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
