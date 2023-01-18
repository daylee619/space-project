import axios from "axios"
import { HeartOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import ProductItem from "../../../common/libraries/productItem/ProductItem"
import styled from "@emotion/styled"

export default function ProductList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("./data/productlist.json").then((res) => {
      setData(res.data)
    })
  }, [])

  //   console.log(data)

  const dataBox = data.map((el) => el.color.map((el) => el.size))
  console.log(dataBox)
  return (
    <>
      <div>Women</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "985px",
          flexWrap: "wrap",
        }}
      >
        {data.map((el) => (
          <div
            key={el.id}
            style={{ margin: "10px" }}
          >
            <ProductItem
              imgWidth="300px"
              imgHeight="400px"
              menuWidth="150px"
              bottom="400px"
              imgUrl={el.thumbnail}
              data={dataBox}
            />
            <div>
              <ItemName>{el.name}</ItemName>
              <HeartOutlined />
              <ItemPrice>{el.price}</ItemPrice>
              <div>
                {el.color.map((el) => (
                  <div key={el.id}>{el.colorId}</div>
                ))}
              </div>
              <div>리뷰 0건</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const ItemName = styled.div`
  font-size: 16px;
  color: #1a1a1a;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
`
export const ItemPrice = styled.div`
  font-size: 22px;
  font-weight: 500;
`
