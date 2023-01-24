import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import { CloseOutlined } from "@ant-design/icons"

import MainLookBookDetailCarousel from "../mainLookBookDetailCarousel"

// carousel을 클릭해서 들어가 볼 수 있는 portal창

export default function MainLookBookDetail(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("/data/mainLookbookDetail.json").then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <>
      <MainLookBookDetailWrapper>
        <MainLookBookDetailCarousel
          data={data}
          style={{ display: "flex", float: "left", width: "50%" }}
        />
        {data.map((el) => (
          <DetailWrapper key={el.id}>
            <DetailContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  key={el.id}
                  style={{
                    fontSize: "15px",
                    color: "#909090",
                    width: "90%",
                  }}
                >
                  {el.subTitle}
                </div>
                <div>
                  <CloseOutlined
                    style={{
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={props.onClose}
                  />
                </div>
              </div>

              <div
                key={el.id}
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  margin: "15px 0 35px",
                  width: "90%",
                }}
              >
                {el.title}
              </div>
              <div
                key={el.id}
                style={{ fontSize: "15px", color: "#909090", width: "100%" }}
              >
                {el.content}
              </div>
            </DetailContent>
            <div style={{ width: "100%" }}>
              <div>연관상품</div>
              <div
                style={{
                  display: "flex",
                  width: "550px",
                  // flexWrap: "nowrap",
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                }}
              >
                {el.productInfo.map((el) => (
                  <div key={el.productId}>
                    <img
                      src={el.thumbnail}
                      style={{
                        width: "150px",
                        height: "230px",
                        marginRight: "20px",
                      }}
                    />
                    <div style={{ marginTop: "10px" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          fontWeight: "400",
                        }}
                      >
                        {el.productName}
                      </div>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: "500x",
                        }}
                      >
                        {el.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DetailWrapper>
        ))}
      </MainLookBookDetailWrapper>
    </>
  )
}

export const MainLookBookDetailWrapper = styled.div`
  display: flex;
  width: 90%;
`
export const DetailWrapper = styled.div`
  float: right;
  /* padding: 70px 0 0 5%; */
  margin: 23px;
  width: 45%;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const DetailContent = styled.div`
  /* position: absolute; */
  width: 90%;
  /* height: 300px; */
  overflow: hidden;
  margin-bottom: 50px;
`
