import styled from "@emotion/styled"
export const ProductListWrapper = styled.div`
  float: right;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
  width: 100%;
  margin-top: 100px;
`
export const ProductListBox = styled.div`
  float: right;
`
export const MenuTitle = styled.div`
  margin: 15px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
`

export const Category = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #e5e5e5;
  width: 878px;
  margin-left: 10px;
  margin-bottom: 35px;
`

export const MenuCategoryBox = styled.ul`
  display: flex;
  width: 76%;
  float: left;
  padding: 10px;
`
export const MenuCategoryList = styled.li`
  font-size: 12px;
  font-weight: 400;
  color: #707070;
  margin-right: 20px;
  cursor: pointer;
`

export const ItemNumber = styled.div`
  /* width: 50%; */
  font-size: 12px;
  color: #707070;
  border-left: 1px solid #e5e5e5;

  margin-left: 35px;
  padding: 10px;
`

export const Review = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 10px;
`
export const ItemDescription = styled.div`
  padding: 20px 0;
`
export const ItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ItemName = styled.div`
  font-size: 12px;
  color: #1a1a1a;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
  cursor: pointer;
`

export const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 500;
`
export const ColorDisplay = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin: 12px 0 0;
  margin-right: 3px;
`

export const HeartButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
