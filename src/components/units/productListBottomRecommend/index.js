import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import { RightOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"

export default function ProductListRecommend() {
  const [data, setData] = useState([])
  const router = useRouter()
  useEffect(() => {
    axios.get("/data/BottomReview.json").then((res) => {
      setData(res.data)
      //   console.log(data)
    })
  }, [])

  //   const a = data.map((el) => el.reviews)
  //   console.log(a)

  return (
    <>
      <RecommendReviewTitleWrapper>
        <RecommendReviewTitle>Recommended by REVIEW</RecommendReviewTitle>
      </RecommendReviewTitleWrapper>

      <RecommendItemWrapper>
        {data.map((el) => (
          <RecommendItem key={el.productId}>
            <RecommendItemImgBox
              key={el.productId}
              onClick={() => router.push("/productdetail")}
            >
              <RecommendItemImg src={el.thumbnail} />
              {/* <div>{el}</div> */}
            </RecommendItemImgBox>
            <RecommendItemInfo>
              <RecommendItemName key={el.productId}>
                {el.name}
              </RecommendItemName>
              <RecommendItemPrice key={el.productId}>
                {el.price}
              </RecommendItemPrice>
              {/* <div>
                {el.reviews?.map((el) => (
                  <div key={el.productId}>{el.content}</div>
                ))}
              </div> */}
              <ReviewCount>
                {el.reviewCount !== null
                  ? `${el.reviewCount}개 리뷰 모두 보기`
                  : null}

                <span>
                  {el.reviewCount !== null ? (
                    <RightOutlined style={{ fontSize: "10px" }} />
                  ) : null}
                </span>
              </ReviewCount>
            </RecommendItemInfo>
          </RecommendItem>
        ))}
      </RecommendItemWrapper>
    </>
  )
}
export const RecommendReviewTitleWrapper = styled.div`
  text-align: center;
`
export const RecommendReviewTitle = styled.div`
  color: #000000;
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: bold;

  /* text-align: center; */
  /* width: 100vw;
  display: table-cell; */
`
export const RecommendItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  line-height: 1.3;
`
export const RecommendItem = styled.div`
  /* margin: 0 10px; */
  margin-right: 16px;
  cursor: pointer;
`
export const RecommendItemImgBox = styled.div`
  position: relative;
`
export const RecommendItemImg = styled.img`
  width: 230px;
  height: 350px;
`
export const RecommendItemName = styled.div`
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  font-size: 13px;
  font-weight: normal;
  color: #0d0d0d;
  line-height: 1.3;
  /* letter-spacing: -0.5px; */
  margin-top: 12px;
  margin-bottom: 5px;
`
export const RecommendItemPrice = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #171717;
`
export const RecommendItemInfo = styled.div`
  text-align: left;
  border: 1px solid #e8e8ea;

  padding: 0 16px 20px 16px;
`
export const ReviewCount = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #525355;
  line-height: 18px;
  margin-top: 20px;
  span {
    margin-left: 5px;
  }
`
