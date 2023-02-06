import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios"
import styled from "@emotion/styled"
import ProductItem from "../../../../../common/libraries/ProductItem"
export default function PauseOnHover() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: (
      <button
        type="button"
        className="slick-prev"
      >
        Previous
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next"
      >
        Next
      </button>
    ),
  }

  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get("/data/mainNewProduct.json").then((res) => {
  //     setData(res.data)
  //   })
  // }, [])
  // console.log(data)

  useEffect(() => {
    axios.get("http://172.16.101.103:3000/product/new").then((res) => {
      setData(res.data)
    })
  }, [])

  // const optionBox = []
  // const size = []
  // const optionTotal = []
  // const optionFn = data?.forEach((el) =>
  //   el.stockCheck?.map((item) => {
  //     optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
  //     item?.opt?.forEach((element) => size.push(element.sizeName))
  //   })
  // )
  // for (let i = 0; i < optionBox.length; i++) {
  //   optionTotal.push(optionBox[i] + size[i])
  // }

  return (
    <Container>
      <Slider {...settings}>
        {data.map((el) => (
          <NewProductWrapper key={el.id}>
            <img
              src={el.thumbnail}
              alt={el.thumbnail}
              style={{ width: "200px", height: "300px" }}
            />
            {/* <ProductItem
              imgWidth="250px"
              imgHeight="400px"
              menuWidth="200px"
              bottom="403px"
              imgUrl={el.thumbnail}
              data={optionTotal}
            /> */}
            <DescriptionWrapper>
              <TitleTop>
                <ItemName>{el.name}</ItemName>
              </TitleTop>

              <Price>{el.price}</Price>
              <ColorBox>
                {el.productColor?.map((el, idx) => (
                  <Color
                    key={el.idx}
                    color={el}
                  ></Color>
                ))}
              </ColorBox>
              <Review>리뷰 {el.review}건</Review>
            </DescriptionWrapper>
          </NewProductWrapper>
        ))}
      </Slider>
    </Container>
  )
}

export const Container = styled.div`
  width: 90%;
  margin-left: 100px;

  .slick-arrow {
    z-index: 10;
    display: flex;
    width: 20px;
    height: 20px;

    &::before {
      color: black;
    }
  }

  .slick-prev {
    left: -50px;

    &::before {
      content: "<";
    }
  }

  .slick-next {
    right: 10px;

    &::before {
      content: ">";
    }
  }
`
export const NewProductWrapper = styled.div`
  cursor: pointer;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
export const TitleTop = styled.div`
  display: flex;

  img {
    display: flex;
  }
`
export const ItemName = styled.div`
  font-size: 12px;
`

export const Price = styled.div`
  font-size: 17px;
  font-weight: 500;
`
export const Review = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 18px;
`
export const ColorBox = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin-right: 2px;
`
