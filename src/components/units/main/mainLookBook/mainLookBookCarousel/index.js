import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"

import styled from "@emotion/styled"
import ModalPortal from "../../../../Portal"

import LookBookModal from "../../../../../lookbookmodal"

// main page에 바로 보이는 lookbook carousel

export default function FocusOnSelect() {
  const [data, setData] = useState([])

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
  // const onClickLookBook = () => {
  //   setIsOpen(true)
  // }

  const [modalOn, setModalOn] = useState(false)

  const handleModal = () => {
    setModalOn(!modalOn)
  }
  return (
    <Container>
      <Slider {...settings}>
        {data.map((el) => (
          <LookbookBox key={el.lookbookId}>
            <div
              key={el.lookbookId}
              onClick={handleModal}
            >
              <LookBookImg src={el.thumbnail} />
            </div>
            <ModalPortal>
              {modalOn && <LookBookModal onClose={handleModal} />}
            </ModalPortal>
            <LookbookTextWrapper>
              <LookbookSubTitle key={el.lookbookId}>
                {el.subTitle}
              </LookbookSubTitle>
              <LookbookTitle key={el.lookbookId}>
                <span>{el.title}</span>
              </LookbookTitle>
            </LookbookTextWrapper>
          </LookbookBox>
        ))}
      </Slider>
    </Container>
  )
}

export const Container = styled.div`
  width: 90%;
  margin-left: 120px;
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
    right: 50px;

    &::before {
      content: ">";
    }
  }
`
export const LookbookBox = styled.div`
  max-width: 400px;
  transition: all 0, 2s linear;
  overflow: hidden;

  :hover {
    cursor: pointer;
    :hover {
      img {
        filter: brightness(50%);
        transform: scale(1.2);
        transition: transform 0.5s;
      }
    }
  }
`
export const LookBookImg = styled.img`
  width: 400px;
  height: 250px;
  display: flex;
  object-fit: cover;
`
export const LookbookTextWrapper = styled.div`
  position: relative;
`

export const LookbookSubTitle = styled.div`
  position: absolute;
  top: -250px;
  color: white;
  font-weight: 700;
  padding: 20px;
`
export const LookbookTitle = styled.div`
  position: absolute;
  top: -130px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  color: #ffffff;
  padding: 20px;
`
