import styled from "@emotion/styled"
import { SearchOutlined, CloseOutlined } from "@ant-design/icons"

export const Contain = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid lightgray;
  left: 0;
  top: 79px;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 2;
`

export const InContain = styled.div`
  display: flex;
  padding: 60px 80px;
`

export const SearchBox = styled.div`
  margin-right: 80px;
`

export const TitleBox = styled.div`
  margin-bottom: 15px;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

export const SearchConfirmContain = styled.div``

export const SearchConfirmBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
`

export const Search = styled.input`
  border: none;
  width: 500px;
  height: 25px;
  padding: 10px;
  font-size: 23px;
  font-weight: 100;
  outline: none;
`

export const SearchSign = styled(SearchOutlined)`
  font-size: 40px;

  &:hover {
    cursor: pointer;
  }
`

export const Cloese = styled(CloseOutlined)`
  font-size: 40px;

  &:hover {
    cursor: pointer;
  }
`
