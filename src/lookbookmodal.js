// Modal.js

import React from "react"
import styled from "@emotion/styled"
import MainLookBookDetail from "./components/units/main/mainLookBook/mainLookBookCarousel/mainLookBookDetail"

const LookBookModal = ({ onClose }) => {
  return (
    <Background>
      <Content>
        <MainLookBookDetail onClose={onClose} />
      </Content>
    </Background>
  )
}

export default LookBookModal

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: gray;
`

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: white;
`
