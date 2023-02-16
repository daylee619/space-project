import styled from "@emotion/styled"

export const FilterWrapper = styled.div`
  padding: 62px;
  margin-top: 50px;
`
export const Filter = styled.div`
  font-size: 20px;
  color: #1a1a1a;
  border-bottom: 2px solid #1a1a1a;
  width: 220px;
  padding-bottom: 10px;
`

export const ColorWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 220px;

  button {
    &:hover {
      opacity: 0.5;
    }
  }
`

export const ColorTitle = styled.div`
  font-size: 15px;
  padding: 18px 0;
  cursor: pointer;
  position: relative;
`
export const TitleImg = styled.img<{ cssClick: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;

  transform: ${(props) => props.cssClick && "scaleY(-1)"};
  transition: ${(props) => props.cssClick && "0.3s"};
`

export const Color = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 220px;
  padding: 6px 0 0;
  margin-bottom: 40px;
`
export const ColorButtonWrapper = styled.div<{
  cssColor: boolean
  isChecked: boolean
}>`
  padding: 6px 0 0 5px;

  button {
    width: 37px;
    height: 28px;
    outline: 0;
    cursor: pointer;
    margin: 8px 0 0;
    padding: 3px;
    margin-right: 5px;
    border: 1px solid #e5e5e5;
    background-color: ${(props) => props.cssColor};
    background-image: ${(props) => (props.isChecked ? "img" : "img안보임")};
  }
`
export const ItemWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 220px;
`
export const ItemTitle = styled.div`
  font-size: 15px;
  padding: 18px 0;
  color: #1a1a1a;
  cursor: pointer;
  position: relative;
`
export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 220px;
  margin: 0 0 40px;
`
export const ItemButtonWrapper = styled.div`
  padding: 6px 0 0 5px;

  button {
    width: 105px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    color: #909090;
    padding: 8px 6px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      color: #c41f23;
      border: 1px solid #c41f23;
    }
  }
`
export const SearchWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 220px;
`
export const SearchTitle = styled.div`
  font-size: 15px;
  padding: 18px 0;
  cursor: pointer;
  position: relative;
`
export const SearchBox = styled.div`
  position: relative;
  width: 215px;
  margin: 0 0 40px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 34px;
  padding: 0;
  border: 1px solid #d8d8d8;
  outline: none;
`
export const SearchButton = styled.button<{ src: string }>`
  position: absolute;
  background: url("https://img.echosting.cafe24.com/skin/base/product/btn_research.gif");
  width: 34px;
  height: 33px;
  top: 1px;
  right: 1px;
  border: 0;
  border-left: 1px solid #d8d8d8;
  cursor: pointer;
`

export const GenderWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 220px;
`
export const GenderTitle = styled.div`
  font-size: 15px;
  padding: 18px 0;
  color: #1a1a1a;
  cursor: pointer;
  position: relative;
`
export const Gender = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 220px;
  margin-bottom: 40px;
`
export const GenderButtonWrapper = styled.div`
  padding: 6px 0 0 5px;

  button {
    width: 100px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    color: #909090;
    padding: 8px 6px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      color: #c41f23;
      border: 1px solid #c41f23;
    }
  }
`
