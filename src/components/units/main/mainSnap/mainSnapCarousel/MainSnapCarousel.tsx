import * as S from "./MainSnapCarousel.styles"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { API_IP } from "../../../../../common/utils/ApiIp"
import { IMainSnap } from "./MainSnapCarousel.types"

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

  const [data, setData] = useState<IMainSnap[]>([])

  useEffect(() => {
    axios.get(`http://${API_IP}:3000/snap/main`).then((res) => {
      setData(res.data)
    })
  }, [])
  console.log(data)
  return (
    <S.Container>
      <Slider {...settings}>
        {data.map((el) => (
          <S.SnapBox key={el.snapId}>
            <S.SnapImg src={el.thumbnail} />
            <S.TagBox>
              <S.HashTag>{el.hashtag}</S.HashTag>

              <S.ProductTag>
                <span>{el.itemName} </span>
                <span>|| 인플루언서</span>
              </S.ProductTag>
            </S.TagBox>
          </S.SnapBox>
        ))}
      </Slider>
    </S.Container>
  )
}
