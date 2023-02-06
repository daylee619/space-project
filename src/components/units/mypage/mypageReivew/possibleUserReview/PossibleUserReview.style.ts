import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
`

export const InContain = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
`

export const ImgBox = styled.div`
  width: 15%;
`

export const ProductImg = styled.img`
  width: 100px;
  height: 100px;
`

export const ProductContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
`

export const ProductNameBox = styled.div``

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: 500;
`

export const ProductSubName = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 12px;
`

export const PostEndDate = styled.div`
  color: lightgray;
`

export const ReviewBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ReviewWrite = styled.button`
  width: 100px;
  height: 25px;
  margin-bottom: 10px;
  border: 1px solid rgb(225, 225, 225);
  background-color: rgb(245, 245, 245);

  &:hover {
    cursor: pointer;
    border: 1px solid lightgray;
    background-color: lightgray;
  }
`

export const ReviewHide = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid rgb(225, 225, 225);
  background-color: rgb(245, 245, 245);

  &:hover {
    cursor: pointer;
    border: 1px solid lightgray;
    background-color: lightgray;
  }
`
