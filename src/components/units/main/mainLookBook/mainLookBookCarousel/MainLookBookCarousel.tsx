import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"

import * as S from "./MainLookBookCarousel.styles"
import ModalPortal from "../../../../Portal"

import LookBookModal from "../../../../../lookbookmodal"
import { IMainLookBook } from "./MainLookBookCarousel.types"
// main page에 바로 보이는 lookbook carousel

export default function FocusOnSelect() {
  const [data, setData] = useState<IMainLookBook[]>([])

  // useEffect(() => {
  //   axios.get("/data/mainLookbook.json").then((res) => {
  //     setData(res.data)
  //   })
  // }, [])
  // console.log(data)
  useEffect(() => {
    axios.get("http://172.16.101.103:3000/lookbook/main").then((res) => {
      setData(res.data)
    })
  }, [])

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
  }

  const [modalOn, setModalOn] = useState(false)

  const handleModal = () => {
    setModalOn(!modalOn)
  }
  return (
    <S.Container>
      <Slider {...settings}>
        {data.map((el) => (
          <S.LookbookBox key={el.lookbookId}>
            <div
              key={el.lookbookId}
              onClick={handleModal}
            >
              <S.LookBookImg src={el.thumbnail} />
            </div>
            <ModalPortal>
              {modalOn && <LookBookModal onClose={handleModal} />}
            </ModalPortal>
            <S.LookbookTextWrapper>
              <S.LookbookSubTitle key={el.lookbookId}>
                {el.subTitle}
              </S.LookbookSubTitle>
              <S.LookbookTitle key={el.lookbookId}>
                <span>{el.title}</span>
              </S.LookbookTitle>
            </S.LookbookTextWrapper>
          </S.LookbookBox>
        ))}
      </Slider>
    </S.Container>
  )
}
