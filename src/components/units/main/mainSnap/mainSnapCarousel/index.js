import styled from "@emotion/styled"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { API_IP } from '../../../../../common/utils/ApiIp'

export default function PauseOnHover() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  }

  const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get("/data/mainSnap.json").then((res) => {
  //     setData(res.data)
  //   })
  // }, [])

  useEffect(() => {
    axios.get(`http://${API_IP}:3000/snap/main`).then((res) => {
      setData(res.data)
    })
  }, [])
  console.log(data)
  return (
    <Container>
      <Slider {...settings}>
        {data.map((el) => (
          <SnapBox key={el.snapId}>
            <SnapImg src={el.thumbnail} />
            <TagBox>
              <HashTag>{el.hashtag}</HashTag>

              <ProductTag>
                <span>{el.itemName} </span>
                <span>|| 인플루언서</span>
              </ProductTag>
            </TagBox>
          </SnapBox>
        ))}
      </Slider>
    </Container>
  )
}
export const Container = styled.div`
  width: 90%;
  padding-left: 180px;

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
    left: -70px;

    &::before {
      content: "<";
    }
  }

  .slick-next {
    right: -30px;

    &::before {
      content: ">";
    }
  }
`
export const SnapImg = styled.img`
  display: flex;
  width: 220px;
  height: 230px;
  cursor: pointer;
  object-fit: cover;
`

export const SnapBox = styled.div`
  position: relative;
  cursor: pointer;
  :hover {
    div {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    img {
      filter: brightness(50%);
    }
  }
`
export const TagBox = styled.div`
  position: absolute;
  color: #fff;

  top: 100px;
  opacity: 0;
`
export const HashTag = styled.div`
  font-size: 14px;
  margin: 0px 40px;
`

export const ProductTag = styled.div`
  margin-top: 80px;
  margin-left: 80px;
  font-size: 12px;
`
