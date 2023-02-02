import styled from "@emotion/styled"
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons"

export const Contain = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: white;
`

export const InContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ImgBox = styled.div`
  margin-right: 20px;
`

export const LogoImg = styled.img`
  width: 120px;
`

export const NavContain = styled.div`
  height: 100%;
  display: flex;
`

export const NavCategory = styled.div`
  height: 100%;
  margin-right: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
`
// ////////////////////////////////////

export const UserSignIconContain = styled.div`
  display: flex;
  height: 100%;
`

export const UserOutLinedBox = styled.div`
  margin-right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const UserOutLined = styled(UserOutlined)`
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`

export const SearchOutLinedBox = styled.div`
  margin-right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const SearchOutLined = styled(SearchOutlined)`
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`

export const HeartOutLinedBox = styled.div`
  margin-right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const HeartOutLined = styled(HeartOutlined)`
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`

export const ShoppingCartOutLinedBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const ShoppingCartOutLined = styled(ShoppingCartOutlined)`
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`

export const UserInfoNav = styled.div`
  position: absolute;
`

export const UserInfoNavSpanBox = styled.div`
  position: relative;
  top: 70px;
  right: 17px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background-color: white;
`

export const UserInfoNavSpan = styled.span`
  font-size: 13px;
  color: gray;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`

export const UserInfoNavSpanLast = styled.span`
  font-size: 13px;
  color: gray;

  &:hover {
    cursor: pointer;
  }
`

export const Shadow = styled.div`
  position: absolute;
  background-color: rgba(45, 45, 45, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
