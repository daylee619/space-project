// Modal.js

import React from "react"
import styled from "@emotion/styled"
import MainReviewModal from "./mainReviewModal/MainReviewModal"

const ReviewModal = (onClose: any) => {
  return (
    <Background>
      <Content>
        <MainReviewModal onClose={onClose} />
      </Content>
    </Background>
  )
}

export default ReviewModal

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`

const Content = styled.div`
  width: 90%;
  margin-top: 30px;
  position: relative;
  overflow: scroll;
  background: gray;
`
