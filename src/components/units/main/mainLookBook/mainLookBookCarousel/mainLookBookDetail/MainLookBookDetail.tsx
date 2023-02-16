import * as S from "./MainLookBookDetail.styles"
import axios from "axios"
import { useEffect, useState } from "react"
import { CloseOutlined } from "@ant-design/icons"

import MainLookBookDetailCarousel from "../mainLookBookDetailCarousel/MainLookBookDetailCarousel"
import { API_IP } from "../../../../../../common/utils/ApiIp"

// carousel을 클릭해서 들어가 볼 수 있는 portal창

export default function MainLookBookDetail(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`http://${API_IP}:3000/lookbook/main/${lookbookId}`)
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <>
      <S.MainLookBookDetailWrapper>
        <MainLookBookDetailCarousel
          data={data}
          style={{ display: "flex", float: "left", width: "50%" }}
        />
        {data.map((el) => (
          <S.DetailWrapper key={el.id}>
            <S.DetailContent>
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
            </S.DetailContent>
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
          </S.DetailWrapper>
        ))}
      </S.MainLookBookDetailWrapper>
    </>
  )
}
