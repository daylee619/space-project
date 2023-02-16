import styled from "@emotion/styled"
export const ColorBox = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin-right: 2px;
`

export const WeeklyBestProduct = styled.div`
  display: table;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* margin-left: 100px; */
  animation-duration: 1s;
  transition: all 0.3s;
`
export const WeeklyBestProductItem = styled.div`
  width: 20%;
  margin: 10px;
  margin-top: 50px;
  position: relative;
`
export const ProductLank = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  padding: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 54px;
  text-align: center;
  background-color: #e86434;
`

export const ItemDescription = styled.div`
  padding: 20px 0;
`
export const DescriptionTop = styled.div`
  display: flex;
`
export const ItemName = styled.div`
  font-size: 14px;
  width: 90%;
  line-height: 17px;
`
export const LikeBtn = styled.button`
  border: none;
  background-color: transparent;
`
export const ItemPrice = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #1a1a1a;
`
export const ItemReview = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 10px;
`
