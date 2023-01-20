/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import axios from "axios"
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import ProductItem from "../../../common/libraries/productItem/ProductItem"
import styled from "@emotion/styled"
import { Pagination } from "antd"

export default function ProductList() {
  const [data, setData] = useState([])
  const [wish, setWist] = useState([])
  //   const [check, setCheck] = useState(false)
  //   const wishHandler = (e) => {
  //     if (check === true && !wish.includes(e.target.value)) {
  //       setWist(wish.concat(e.target.value))
  //     }
  //     if (wish.includes(e.target.value)) {
  //       setWist(wish.filter((el) => !el === e.target.value))
  //     }
  //   }

  useEffect(() => {
    axios.get("./data/productlist.json").then((res) => {
      setData(res.data)
    })
    getData()
  }, [])

  const getData = async () => {
    try {
      axios.get(`http://172.20.10.7:3000/product/list?offset=1`).then((res) => {
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const [countIndex, setCountIndex] = useState()
  const handleOnClick = (e, idx) => {
    setCountIndex(idx)
  }

  // menu option function
  const optionBox = []
  const size = []
  const optionTotal = []
  const optionFn = data.forEach((el) =>
    el.color.map((item) => {
      optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
      item?.size?.forEach((element) => size.push(element.sizeName))
    })
  )
  for (let i = 0; i < optionBox.length; i++) {
    optionTotal.push(optionBox[i] + size[i])
  }

  return (
    <ProductListWrapper>
      <ProductListBox>
        <MenuTitle>Women</MenuTitle>
        <Category>
          <MenuCategoryBox>
            <MenuCategoryList>신상품</MenuCategoryList>
            <MenuCategoryList>상품명</MenuCategoryList>
            <MenuCategoryList>낮은가격</MenuCategoryList>
            <MenuCategoryList>높은가격</MenuCategoryList>
            <MenuCategoryList>제조사</MenuCategoryList>
            <MenuCategoryList>인기상품</MenuCategoryList>
            <MenuCategoryList>사용후기</MenuCategoryList>
            <MenuCategoryList>조회수</MenuCategoryList>
            <MenuCategoryList>좋아요</MenuCategoryList>
          </MenuCategoryBox>
          <ItemNumber>872 Items</ItemNumber>
        </Category>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "980px",
            flexWrap: "wrap",
          }}
        >
          {data.map((el, idx) => (
            <div
              key={el.id}
              style={{ margin: "10px" }}
            >
              <ProductItem
                imgWidth="280px"
                imgHeight="400px"
                menuWidth="200px"
                bottom="403px"
                imgUrl={el.thumbnail}
                data={optionTotal}
              />
              <ItemDescription>
                <ItemTitle>
                  <ItemName>{el.name}</ItemName>
                  <HeartButton onClick={(e) => handleOnClick(e, idx)}>
                    {countIndex === idx ? (
                      <HeartFilled style={{ color: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )}
                  </HeartButton>
                </ItemTitle>

                <ItemPrice>{el.price}</ItemPrice>
                <ColorDisplay>
                  {el.color.map((el) => (
                    <Color
                      color={el.colorName}
                      key={el.id}
                    ></Color>
                  ))}
                </ColorDisplay>
                <Review>리뷰 0건</Review>
              </ItemDescription>
            </div>
          ))}
        </div>
      </ProductListBox>

      <Pagination
        defaultCurrent={1}
        total={50}
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      />
    </ProductListWrapper>
  )
}

export const ProductListWrapper = styled.div`
  float: right;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
  width: 100%;
  margin-top: 100px;
`
export const ProductListBox = styled.div`
  float: right;
`
export const MenuTitle = styled.div`
  margin: 15px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
`

export const Category = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #e5e5e5;
  width: 878px;
  margin-left: 10px;
  margin-bottom: 35px;
`

export const MenuCategoryBox = styled.ul`
  display: flex;
  width: 76%;
  float: left;
  padding: 10px;
`
export const MenuCategoryList = styled.li`
  font-size: 12px;
  font-weight: 400;
  color: #707070;
  margin-right: 20px;
  cursor: pointer;
`

export const ItemNumber = styled.div`
  /* width: 50%; */
  font-size: 12px;
  color: #707070;
  border-left: 1px solid #e5e5e5;

  margin-left: 35px;
  padding: 10px;
`

export const Review = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 10px;
`
export const ItemDescription = styled.div`
  padding: 20px 0;
`
export const ItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ItemName = styled.div`
  font-size: 12px;
  color: #1a1a1a;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
  cursor: pointer;
`

export const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 500;
`
export const ColorDisplay = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin: 12px 0 0;
  margin-right: 3px;
`

export const HeartButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
