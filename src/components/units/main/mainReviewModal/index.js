import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
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
import styled from "@emotion/styled"
import { API_IP } from '../../../../common/utils/ApiIp'

export default function MainReviewModal(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://${API_IP}:3000/review/main/${reviewId}`).then((res) => {
      setData(res.data)
      //   console.log(data)
    })
  }, [])

  const createDate = data.detailReview?.created_at
  const createdDate = moment(createDate).format("YYYY.MM.DD")

  const a = data.productInfo?.map((el) => Number(el.starAverage)).join()
  console.log(a)

  const [like, setLike] = useState(0)
  const [unLike, setUnLike] = useState(0)

  const settings = {
    customPaging: function (i) {
      return data.map((el) => {
        el.productInfo.map((el) => (
          <a key={el.id}>
            <img src={el.thumbnail} />
          </a>
        ))
      })
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  }
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        // top: "-120px",
        // left: "-500px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // backgroundColor: "rgba(20,22,26,0.8)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 50px",
          }}
        >
          <div style={{ width: "96px" }}>
            <LeftOutlined
              style={{
                cursor: "pointer",
                marginLeft: "30px",
                position: "absolute",
                top: "50%",
                color: "#bcc2cc",
              }}
            />
          </div>
          <ProductReview {...settings}>
            {data.productInfo?.map((el) => (
              <div
                key={el.id}
                style={{ marginLeft: "20px" }}
              >
                <img
                  src={el.thumbnail}
                  style={{
                    width: "474px",
                    // position: "relative",
                    // margin: "80px 80px",
                  }}
                />
              </div>
            ))}
          </ProductReview>
          <div style={{ width: "96px" }}>
            <RightOutlined
              style={{
                cursor: "pointer",
                // marginRight: "30px",
                position: "absolute",
                top: "50%",
                color: "#bcc2cc",
                right: "500px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            // width: "164px",
            // position: "relative",
            top: "-510px",
            left: "310px",
            backgroundColor: "#ffffff",
          }}
        >
          {data.productInfo?.map((el) => (
            <div
              key={el.id}
              style={{
                display: "flex",
                padding: "16px 0 16px 24px",
              }}
            >
              <div key={el.id}>
                <img
                  src={el.thumbnail}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "15px",
                    border: "1px solid #d8dde5",
                  }}
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <div
                  key={el.id}
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    width: "200px",
                  }}
                >
                  {el.name}
                  <CloseOutlined
                    style={{ marginLeft: "20px", cursor: "pointer" }}
                    onClick={props.onClose}
                  />
                </div>
                {/* <CloseOutlined /> */}
                <div key={el.id}>
                  <div style={{ display: "flex" }}>
                    <div>
                      <StarFilled
                        style={{
                          color: "#F8E71C",
                          fontSize: "10px",
                          marginRight: "6px",
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", marginRight: "10px" }}>
                      <div
                        key={el.id}
                        style={{ fontSize: "10px", marginTop: "10px" }}
                      >
                        {Number(el.starAverage)}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          marginLeft: "20px",
                          marginTop: "10px",
                        }}
                      >
                        리뷰 {el.reviewCount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              width: "274px",
              padding: "22px 20px",
              borderTop: "1px solid #ebeff5",
              borderBottom: "1px solid #ebeff5",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                width: "224px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Rate
                  value={3}
                  style={{ fontSize: "8px", marginRight: "8px" }}
                />

                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    marginRight: "8px",
                  }}
                >
                  아주 좋아요
                </span>
              </div>
              <div style={{ fontSize: "10px", marginLeft: "30px" }}>
                {/* {data.detailReview?.created_at} */}
                {createdDate}
              </div>
            </div>
            <div style={{ border: "1px solid #ebeff5" }}>
              <div
                style={{
                  fontSize: "10px",
                  padding: "6px",
                  width: "250px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {data.detailReview?.nickname}
                </span>
                님의 리뷰입니다.
              </div>
              <div
                style={{
                  width: "250px",
                  fontSize: "10px",
                  lineHeight: "1.43",
                  padding: "20px",
                }}
              >
                {data.detailReview?.content}
              </div>
            </div>

            <div style={{ cursor: "pointer", display: "flex" }}>
              <div
                style={{ padding: "16px 0", fontSize: "10px" }}
                onClick={() => setLike(like + 1)}
              >
                <LikeOutlined />
                <span style={{ margin: "0 4px" }}>도움돼요</span>
                <span style={{ fontWeight: "bold" }}>
                  {data.detailReview?.helpful}
                </span>
                <span style={{ marginRight: "4px" }}>{like}</span>
              </div>
              <div
                style={{ padding: "16px 0", fontSize: "10px" }}
                onClick={() => setUnLike(unLike - 1)}
              >
                <DislikeOutlined />
                <span style={{ margin: "0 4px" }}>도움안돼요</span>
                <span style={{ fontWeight: "bold" }}>
                  {data.detailReview?.unhelpful - unLike}
                </span>
              </div>
            </div>
            <div style={{ padding: "24px 20px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  height: "20px",
                  margin: "2px 0",
                  lineHeight: "1.5",
                }}
              >
                이 상품의 다른 리뷰
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProductReview = styled(Slider)`
  .slick-list {
    overflow: inherit;
  }
`
