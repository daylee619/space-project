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

export const MainWrapper = styled.div`
  width: 100%;
`
export const WeeklyBestTitle = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 60px auto 50px;
  font-weight: 700;
`
export const WeeklyBestTab = styled.ul`
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  li {
    float: left;
    margin-right: 30px;
    cursor: pointer;
    font-size: 20px;
    /* font-weight: 700; */
  }
`
export const WeeklyBestProduct = styled.div`
  display: table;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
export const WeeklyBestProductItem = styled.div`
  margin: 10px;
  margin-top: 50px;
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
