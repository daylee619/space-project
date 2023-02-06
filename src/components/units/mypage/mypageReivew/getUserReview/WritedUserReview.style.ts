import styled from "@emotion/styled"
import { Rate } from "antd"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
`

export const InContain = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
`

export const ReviewInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReviewInfoTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ReviewInfoImg = styled.img`
  width: 50px;
  margin-right: 20px;
`

export const ReviewInfoTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`

export const ReviewInfoConfirmBox = styled.div``

export const ReviewInfoModify = styled.button`
  width: 40px;
  height: 20px;
  background-color: rgb(45, 45, 45);
  color: white;
  font-size: 13px;
  border: 1px solid lightgray;

  &:hover {
    cursor: pointer;
  }
`

export const ReviewInfoDelete = styled.button`
  width: 40px;
  height: 20px;
  background-color: rgb(245, 245, 245);
  color: black;
  font-size: 13px;
  border: 1px solid lightgray;

  &:hover {
    cursor: pointer;
  }
`

export const ReviewContentBox = styled.div`
  margin-top: 20px;
`

export const ReviewGradeBox = styled.div`
  display: flex;
  align-items: center;
`

export const ReviewDate = styled.div`
  font-size: 13px;
  color: lightgray;
  margin-left: 20px;
`

export const ReviewContent = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const RateCss = styled(Rate)`
  font-size: 15px;
`
