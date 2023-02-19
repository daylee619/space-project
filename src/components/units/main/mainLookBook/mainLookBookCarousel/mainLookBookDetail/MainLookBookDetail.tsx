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
    <div>
      <S.MainLookBookDetailWrapper>
        <MainLookBookDetailCarousel
          data={data}
          style={{ display: "flex", float: "left", width: "50%" }}
        />
        {data.map((el) => (
          <S.DetailWrapper key={el.id}>
            <S.DetailContent>
              <S.ContentWrapper>
                <S.SubTitle key={el.id}>{el.subTitle}</S.SubTitle>
                <div>
                  <CloseOutlined
                    style={{
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={props.onClose}
                  />
                </div>
              </S.ContentWrapper>

              <S.Title key={el.id}>{el.title}</S.Title>
              <S.Content key={el.id}>{el.content}</S.Content>
            </S.DetailContent>
            <div style={{ width: "100%" }}>
              <div>연관상품</div>
              <S.ProductInfoContainer>
                {el.productInfo.map((el) => (
                  <div key={el.productId}>
                    <S.ProductImage src={el.thumbnail} />
                    <S.DetailBox>
                      <S.ProductName>{el.productName}</S.ProductName>
                      <S.Price>{el.price}</S.Price>
                    </S.DetailBox>
                  </div>
                ))}
              </S.ProductInfoContainer>
            </div>
          </S.DetailWrapper>
        ))}
      </S.MainLookBookDetailWrapper>
    </div>
  )
}
